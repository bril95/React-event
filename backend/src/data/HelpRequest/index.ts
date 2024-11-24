import {v4 as uuid} from "uuid";
import {fakerRU as faker} from '@faker-js/faker';

export type HelpRequestData = {
    id: string;
    title: string;
    organization: {
        title: string;
        isVerified?: boolean;
    },
    description: string;
    goalDescription: string;
    actionsSchedule: Array<{
        stepLabel: string;
        isDone?: boolean;
    }>;
    endingDate: Date;
    location: {
        latitude: number;
        longitude: number;
        district: string;
        city: string;
    },
    contacts: {
        email: string;
        phone?: string;
        website?: string;
    },
    requesterType: "person" | 'organization',
    helpType: 'finance' | 'material',
    helperRequirements: {
        helperType: 'group' | 'single',
        isOnline: boolean,
        qualification: 'professional' | 'common',
    },
    contributorsCount: number,
    requestGoal: number,
    requestGoalCurrentValue: number
}

const requestHelper = {
    personal: [
        {
            name: 'Сбор средств для пенсионерки Кузьминой Анны Ильинишны',
            description: 'Пожилая женщина, живущая одна, нуждается в регулярном обеспечении продуктами и медикаментами',
            goal: 'Сбор средств на продукты, лекарства и оплату коммунальных услуг'
        },
        {
            name: 'Помощь Иванову Александру Петровичу',
            description: 'Александр Петрович, ветеран труда, потерял почти всю пенсию из-за роста цен. Из-за диабета и других хронических заболеваний он нуждается в регулярных лекарствах. Ваша поддержка поможет ему прожить с достоинством и не отказывать себе в необходимом',
            goal: ' Финансирование лечения и приобретения необходимых лекарств'
        },
        {
            name: 'Сбор для пенсионерки Руминой Анны Михайловны',
            description: 'Анна Михайловна, 79 лет, живёт одна и часто сталкивается с нехваткой теплой одежды и лекарств. Пожилой возраст и отсутствие поддержки делают её жизнь крайне сложной. Помощь в вещах и лекарствах станет настоящим спасением',
            goal: 'Обеспечение теплыми вещами и продуктами',
            isMaterial: true,
        },
        {
            name: 'Поддержка Лешникова Владимира Ивановича',
            description: 'Владимир Иванович страдает от хронических заболеваний и нуждается в помощи для оплаты жилья и лекарств',
            goal: 'Сбор средств на лекарства и оплату коммунальных услуг'
        },
        {
            name: 'Помощь Плотниковой Марии Сергеевне',
            description: 'Пожилая женщина нуждается в поддержке для покрытия основных расходов на питание и лекарства',
            goal: "Сбор средств на продукты и медицинские расходы",
        },
        {
            name: 'Сбор зимних вещей для Островного Николая Александровича',
            description: 'Николай Александрович нуждается в зимней одежде и продуктах на зимний период',
            goal: 'Обеспечение тёплой одеждой и продуктами',
            isMaterial: true,
        },
        {
            name: 'Помощь Рушниковой Татьяне Николаевне',
            description: 'Татьяна Николаевна нуждается в лечении и регулярных медицинских процедурах',
            goal: 'Покрытие расходов на медицинские услуги и лекарства'
        },
        {
            name: 'Сбор медикаментов для Анатас Людмилы Сергеевны',
            description: 'Одинокая пожилая женщина нуждается в продуктах и медикаментах для зимнего периода',
            goal: 'Обеспечение её продуктами питания и медикаментами',
            isMaterial: true,
        },
        {
            name: 'Помощь Ладыженскому Петру Николаевичу',
            description: 'Петр Николаевич, 76 лет, вынужден зимой жить в неотапливаемом доме из-за нехватки средств. У него нет родственников, которые могли бы помочь. Ваша поддержка с одеждой и продуктами позволит ему встретить зиму в безопасности и тепле.',
            goal: 'помощь с одеждой и продуктами питания',
            isMaterial: true,
        },
        {
            name: 'Вещи и необходимые медикаменты для Ольгиной Галины Ивановны',
            description: 'Пожилая женщина нуждается в лекарствах и основных продуктах для поддержания здоровья',
            goal: 'Обеспечение медикаментами'
        }
    ],
    organizations: [
        {
            name: 'Дом престарелых "Серебряный Уют"',
            description: 'В доме "Серебряный Уют" проживают 50 пожилых людей, нуждающихся в регулярном уходе. С наступлением холодов учреждению необходимы тёплые одеяла, одежда и лекарства от хронических болезней, чтобы поддержать комфорт и здоровье пожилых людей в зимний период',
            goal: 'Сбор средств на одежду и медикаменты',
        },
        {
            name: 'Пансионат "Надежда"',
            description: 'Пансионат "Надежда" приютил пожилых людей, оказавшихся в трудной жизненной ситуации. Учреждению требуется помощь в обеспечении продуктами питания, средствами гигиены и лекарствами. Без поддержки риск ухудшения здоровья обитателей пансионата значительно возрастает',
            goal: 'Закупка продуктов и предметов ухода',
        },
        {
            name: 'Дом престарелых "Тихий Берег"',
            description: '"Тихий Берег" — дом для пожилых, где живут более 70 человек, нуждающихся в регулярных медицинских услугах. Учреждению необходимы средства на медикаменты и частые осмотры врачей, что поможет предотвратить развитие заболеваний и улучшить качество жизни обитателей',
            goal: 'Поддержка медицинского ухода',
        },
        {
            name: 'Центр заботы "Золотой Век"',
            description: 'В центре "Золотой Век" проживают ветераны войны и труда. Зимой расходы на коммунальные услуги возрастают, и без поддержки центр не может обеспечить тепло и питание. Средства необходимы для оплаты отопления и продуктов питания для поддержки здоровья пожилых',
            goal: 'Оплата коммунальных услуг и продуктов',
        },
        {
            name: 'Пансионат "Доброта"',
            description: 'Пансионат "Доброта" заботится о пожилых людях с хроническими заболеваниями, требующими регулярного лечения. Средства, полученные в рамках данной акции, будут направлены на приобретение необходимых медикаментов для поддержания стабильного состояния здоровья всех постояльце',
            goal: 'Финансирование медикаментов и ухода',
        },
        {
            name: 'Дом для пожилых "Солнечная Лужайка"',
            description: 'Дом "Солнечная Лужайка" нуждается в обновлении обстановки для создания комфортных условий проживания. Необходимы средства на покупку новой мебели, одеял и постельного белья, чтобы пожилые люди чувствовали себя уютно и безопасно',
            goal: 'Закупка мебели и предметов обихода для улучшения условий',
        },
        {
            name: 'Дом престарелых "Ласковый Огонь"',
            description: 'В доме "Ласковый Огонь" живут более 40 пожилых людей с минимальными доходами. Чтобы поддерживать их здоровье и комфорт, необходима помощь в обеспечении продовольствием, предметами гигиены и одеждой для холодных месяцев',
            goal: 'Сбор средств на питание, предметы ухода и тёплую одежду',
        },
        {
            name: 'Пансионат "Уютный Уголок"',
            description: 'Пансионат "Уютный Уголок" оказывает помощь пожилым людям с ослабленным здоровьем. Средства необходимы для оплаты медицинских обследований и лечения, что позволит проводить профилактические меры и своевременное лечение хронических заболеваний',
            goal: 'Поддержка медицинских услуг и регулярные осмотры',
        },
        {
            name: 'Центр поддержки "Добрые Руки"',
            description: 'Центр "Добрые Руки" приютил 60 пожилых людей, и они остро нуждаются в предметах гигиены и санитарных материалах. Поддержка центра позволит улучшить санитарные условия, что особенно важно для предупреждения инфекций среди жителей',
            goal: 'Сбор средств на закупку средств гигиены и дезинфекции',
        },
        {
            name: 'Дом для пожилых "Светлый Путь"',
            description: 'Дом "Светлый Путь" помогает пожилым с ограниченной мобильностью. Им требуются инвалидные коляски, медицинское оборудование и поддержка в оплате услуг медсестёр. Средства помогут пожилым сохранить самостоятельность и удобство передвижения',
            goal: 'Финансирование оборудования и услуг медперсонала',
        },
    ]

}
export const generateHelpRequests = (count: number): HelpRequestData[] => {
    const result = [];
    for(let i = 0; i < count; i++) {
        const requestHelpData: {name: string, description: string, goal: string, isMaterial?: boolean} =
            i % 2 === 0
                ? requestHelper.personal[i % requestHelper.personal.length]
                : requestHelper.organizations[i % requestHelper.organizations.length];

        const requestData: HelpRequestData = {
            id: uuid(),
            title: `[${i}] ` + requestHelpData.name,
            organization: {
                title: i % 2 === 0 ?faker.company.name() : requestHelpData.name,
                isVerified: i % 3 !== 0,
            },
            description: requestHelpData.description,
            goalDescription: requestHelpData.goal,
            actionsSchedule: [
                {stepLabel: "Нужное купить", isDone: false},
                {stepLabel: "Денежку собрать"},
                {stepLabel: "Собраться", isDone: true}
            ],
            endingDate: faker.date.future(),
            location: {
                latitude: faker.location.latitude(),
                longitude: faker.location.longitude(),
                district: faker.location.state(),
                city: faker.location.city(),
            },
            contacts: {
                email: faker.internet.email(),
                phone: faker.phone.number({ style: 'international' }),
                website: faker.internet.domainName(),
            },
            requesterType: i % 2 === 0 ? "person" : 'organization',
            helpType: requestHelpData?.isMaterial ? 'material' : 'finance',
            helperRequirements: {
                helperType: i % 5 === 0 ? 'group' : "single",
                isOnline: !(i % 3),
                qualification: i % 6 ? 'professional' : 'common',
            },
            contributorsCount: i * 10 + i,
            requestGoal: i * 23 + i * 50 + 100,
            requestGoalCurrentValue: i * 23 + i * 60 + 5,
        }
        result.push(requestData);
    }
    return result;
}


export class HelpRequestRepository {
    private requests: Record<string, HelpRequestData> = {};
    constructor() {
        const initialRequests = generateHelpRequests(2400);
        initialRequests.forEach((requestData: HelpRequestData) => {
            this.requests[requestData.id] = requestData;
        })
    }

    public getRequests() {
        return Object.values(this.requests);
    }

    public getRequestDetails(requestId: string): HelpRequestData | null {
        return this.requests[requestId] || null;
    }

    public checkIsRequestExist(requestId: string): boolean {
        return !!this.requests[requestId];
    }
}