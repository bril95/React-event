import {UserData} from "../User";
import bcrypt from "bcryptjs";
import jwt, {JwtPayload} from "jsonwebtoken";
import log4js from "log4js";

export type AuthData = {
    userId: string
    login: string;
    password: string;
}

const JWT_SECRET = 'your_jwt_secret';

export const generateAuthData = (users: UserData[]): AuthData[] => {
    const count = users.length;
    const result: AuthData[] = [];
    for(let i = 0; i < count; i++) {
        const authData: AuthData = {
            userId: users[i].id,
            login: `testUser${i}@test.com`,
            password: bcrypt.hashSync(`password${i}`, 8),
        }
        result.push(authData);
    }
    return result;
}

export class AuthRepository {
    private readonly auths: Record<string, AuthData> = {};
    constructor(users: UserData[]) {
        const authRecords = generateAuthData(users);
        authRecords.forEach((authRecord: AuthData) => {
            this.auths[authRecord.login] = authRecord
        })
    }

    public getUserIdByLogin(login: string): string {
        return this.auths[login]?.userId || '';
    }

    public checkCredentials(login: string, password: string) {
        const authRecord = this.auths[login];
        return !!authRecord && bcrypt.compareSync(password, authRecord.password)
    }

    public verifyToken = (token: string): string => {
        try {
            const decoded = jwt.verify(token, JWT_SECRET);
            return (decoded as JwtPayload)?.id || '';
        } catch (err) {
            const logger = log4js.getLogger();
            logger.error("AuthRepository.verifyToken. Error. Token is not decoded ", token,err);
            return '';
        }
    };

    public login(login: string, password: string) {
        const logger = log4js.getLogger();
        const authRecord = this.auths[login];
        let token = '';
        if (authRecord && this.checkCredentials(login, password)) {
            const userId = authRecord.userId;
            token = jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: '1h' });
        }
        if (token) {
            logger.info("AuthRepository.login. User is authenticated", login, password);
        } else {
            logger.error("AuthRepository.login failed", login, password);
        }
        return token;
    }
}

