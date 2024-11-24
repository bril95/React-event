// @ts-nocheck
import { createServer } from "http";
import express, {NextFunction, Request, Response} from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import log4js from "log4js";
import dotenv from "dotenv";
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';
import loggerSetup from "./src/utils/configureLogger";
import {UserRepository} from "./src/data/User";
import {HelpRequestRepository} from "./src/data/HelpRequest";
import {AuthRepository} from "./src/data/Auth";

// envs
dotenv.config();

// express engine
const app = express();

// express app config
app.use(cors())
app.use(bodyParser.json())

// APP INIT
const requestRepository = new HelpRequestRepository();
const userRepository = new UserRepository(requestRepository);
const authRepository = new AuthRepository(userRepository.getUsers());

// OpenAPI specification
const openApiDocumentation = YAML.load('./apispec2.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocumentation));

// ERROR MIDDLEWARE
let ERROR_REQUEST_NUMBER = 1;
const errorMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const logger = log4js.getLogger();
    logger.info("ERROR_MIDDLEWARE request log: ", req?.originalUrl, req?.body);
    if (ERROR_REQUEST_NUMBER % 5 === 0) {
        logger.warn(`Planned server Error ` + ERROR_REQUEST_NUMBER);
        ERROR_REQUEST_NUMBER++;
        return res.status(500).send('Planned Server Error')
    } else {
        ERROR_REQUEST_NUMBER++;
        next();
    }
}

app.use(errorMiddleware);

// AUTH
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        const logger = log4js.getLogger();
        logger.error("No token provided ", req?.originalUrl);
        return res.status(403).json({ message: 'No token provided.' });
    }
    const userId = authRepository.verifyToken(token);
    if (!userId) {
        const logger = log4js.getLogger();
        logger.error("Token is not valid ", req?.originalUrl);
        return res.status(403).json({ message: 'No token provided.' });
    }
    req.userId = userId;
    next();
};

app.post('/api/auth', (req: Request, res: Response) => {
    const { login, password } = req.body;
    const logger = log4js.getLogger();

    // Find the user by username
    const userId = authRepository.getUserIdByLogin(login);
    const user = userId ? userRepository.getUserById(userId) : null
    if (!user) {
        logger.error("User not found by log/pass ", req?.body);
        return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Compare the provided password with the stored hashed password
    const passwordIsValid = authRepository.checkCredentials(login, password)
    if (!passwordIsValid) {
        logger.error("Invalid password ", req?.body);
        return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Create a token (JWT)
    const token = authRepository.login(login, password);
    if (!token) {
        logger.error("Empty token on token creation", req?.body);
        return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Send the token back to the client
    logger.info("Successful authentication ", req?.body);
    res.json({ auth: true, token });
})

app.use(authMiddleware);

// USER
app.get('/api/user/favourites', (req: Request, res: Response) => {
    const logger = log4js.getLogger();
    const userId= req.userId;
    const favourites = userRepository.getUserFavourites(userId);
    logger.info("Successful favourites ", userId);
    res.json(favourites);
})

app.post('/api/user/favourites', (req: Request<{requestId: string}>, res: Response) => {
    const logger = log4js.getLogger();
    const { requestId } = req.body;
    if (!requestId) {
        logger.error("No requestId provided", req?.body);
        res.status(400).send("No request id");
        return;
    }
    const userId= req.userId;
    try {
        userRepository.addRequestToFavourites(requestId, userId);
        logger.info("Successful add favourites ", userId, requestId);
        res.send("Request is added to Favourites successfully.");
    } catch (err) {
        const logger = log4js.getLogger();
        logger.error('Failed to add request to favourites', userId, requestId, err);
        res.status(400).send("Failed to add request to favourites");
    }
})

app.delete('/api/user/favourites/:requestId', (req: Request, res: Response) => {
    const logger = log4js.getLogger();
    const userId = req.userId;
    const { requestId } = req.params;
    if (!requestId) {
        logger.error("Delete favorite failed. No requestId provided", userId, req?.body);
        res.status(400).send("No request id");
        return;
    }
    try {
        userRepository.removeRequestFromFavourites(requestId, userId);
        logger.info("Successful remove favourites ", userId, requestId);
        res.send("Request is removed form Favourites successfully.");
    } catch (err) {
        const logger = log4js.getLogger();
        logger.error('Failed to delete request to favourites', userId, requestId, err);
        res.status(400).send("Failed to add request to favourites");
    }
})

app.use('/api/user', (req: Request, res: Response) => {
    const logger = log4js.getLogger();
    const user= userRepository.getUserById(req.userId);
    logger.info("Successful user", user, res.userId);
    res.json(user);
})

// HELP REQUESTS

app.post('/api/request/:id/contribution', (req: Request, res: Response) => {
    const logger = log4js.getLogger();
    const {id} = req.params;
    if (!requestRepository.checkIsRequestExist(id)) {
        logger.error("Add contribution. No request found", id, req?.body);
        res.status(404).send("No request found");
        return;
    }
    logger.info("Successful contribution", id, req?.body);
    res.send(`Contribution in Requests ${id} is done successfully.`);
})

app.get('/api/request/:id', (req: Request, res: Response) => {
    const logger = log4js.getLogger();
    const {id} = req.params;
    if (!id) {
        logger.error("Get Request. No request found", id, req?.body);
        res.status(400).send("No request id");
        return;
    }
    const request = requestRepository.getRequestDetails(id);
    if (!request) {
        logger.info("Get Request. Success", id, req?.body);
        res.status(404).send("No request found");
        return;
    }
    res.json(request);
})

app.get('/api/request', (req: Request, res: Response) => {
    const logger = log4js.getLogger();
    const requests = requestRepository.getRequests();
    logger.info("Successful requests ", req?.body);
    res.send(requests);
})

// web server
const port = process.env.PORT || 4040;
const server = createServer(app);

// configure of server
loggerSetup();

// start of application
server.listen(port, () => {
    const logger = log4js.getLogger();
    logger.info(`Server is listening on port ${port}`)
});