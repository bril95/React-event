// @ts-nocheck
import {v4 as uuid} from 'uuid';
import {HelpRequestRepository} from "../HelpRequest";
import {fakerRU as faker, Sex} from '@faker-js/faker';
import log4js from "log4js";

export type UserData = {
    id: string;
    name: string;
    lastName: string;
    birthdate: Date;
    status: 'Начинающий' | 'Опытный',
    baseLocations: Array<{
        latitude: number;
        longitude: number;
        district: string;
        city: string;
    }>,
    educations: Array<{
       organizationName: string;
       level: 'Среднее общее' | 'Среднее профессиональное' | 'Высшее';
       specialization: string;
       graduationYear: number;
    }>,
    additionalInfo: string;
    contacts: {
        email: string;
        phone?: string;
        social: {
            telegram?: string;
            whatsapp?: string;
            vk?: string;
        }
    }
    favouriteRequests: string[]; // request ids
}

export const generateUsers = (count: number): UserData[] => {
    const result = [];
    for(let i = 0; i < count; i++) {
        const userData: UserData = {
            id: uuid(),
            name: faker.person.firstName(i % 2 === 0 ? Sex.Male : Sex.Female),
            lastName: faker.person.lastName(i % 2 === 0 ? 'male' : 'female'),
            birthdate: faker.date.between({ from: '1988-01-01', to: '2007-12-31' }),
            status: i % 3 === 0 ? 'Начинающий' : 'Опытный',
            baseLocations: [
                {
                    latitude: faker.location.latitude(),
                    longitude: faker.location.longitude(),
                    district: faker.location.state(),
                    city: faker.location.city(),
                },
                {
                    latitude: faker.location.latitude(),
                    longitude: faker.location.longitude(),
                    district: faker.location.state(),
                    city: faker.location.city(),
                }
            ],
            educations: [
                {
                    organizationName: i % 3 == 0 ? "МОУ СОШ №" + (i % 26) : 'НПГУ ДПИ',
                    level: i % 3 == 0 ? 'Среднее общее' : 'Высшее',
                    specialization: i % 3 == 0 ? '' : faker.person.jobTitle(),
                    graduationYear: faker.number.int({min: 1999, max: 2020}),
                }
            ],
            additionalInfo: 'Очень хороший человек. Добрый, отзывчивый, честный и замечательный',
            contacts: {
                email: 'test@test.com',
                phone: faker.phone.number({ style: 'international' }),
                social: {
                    telegram: '@test',
                    whatsapp: '@test',
                    vk: 'test@test.com',
                }
            },
            favouriteRequests: [],
        }
        result.push(userData);
    }
    return result;
}

export class UserRepository {
    private users: Record<string, UserData> = {};
    constructor(
        private readonly requestRepository: HelpRequestRepository,
    ) {
        const initialUsers = generateUsers(24);
        initialUsers.forEach((user) => {
            this.users[user.id] = user;
        })
    }

    public getUserById(id: string): UserData | null {
        return this.users[id] || null;
    }

    public getUserFavourites(id: string): string[] {
        return this.users[id]?.favouriteRequests || [];
    }

    public addRequestToFavourites(requestId: string, userId: string): void {
        const logger = log4js.getLogger();
        if (!this.users[userId]) {
            logger.error("UserRepository.addRequestToFavourites. Error. No user found", userId);
            throw new Error("No user with id " + userId);
        }
        if (!this.requestRepository.checkIsRequestExist(requestId)) {
            logger.error("UserRepository.addRequestToFavourites. Error. No request found", userId, requestId);
            throw new Error("No request with id " + requestId);
        }
        this.users[userId].favouriteRequests.push(requestId);
    }

    public removeRequestFromFavourites(requestId: string, userId: string): void {
        if (this.users[userId] && this.users[userId].favouriteRequests?.length && this.users[userId].favouriteRequests.includes(requestId)) {
            this.users[userId].favouriteRequests = this.users[userId].favouriteRequests.filter(id => id !== requestId);
        }
    }

    public getUsers() {
        return Object.values(this.users);
    }
}