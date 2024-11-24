# Требования и ассеты к "Благотворительному React-ивенту джунов", 2024

**Тема хакатона - Помощь пожилым людям**

## Дизайн

[Фигма](https://www.figma.com/design/8GhqLYG4S1bGwuwTpFlzrH/%D0%9C%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%BF%D0%BB%D0%B5%D0%B9%D1%81-%D0%B7%D0%B0%D0%BF%D1%80%D0%BE%D1%81%D0%BE%D0%B2-%D0%BE-%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D0%B8?node-id=2-2&node-type=canvas&t=PxezvoMSq26STuDC-0)

Список экранов:
- логин;
- каталог запросов о помощи (запросы могут отображаться гридом, списком или на карте);
- страница одного запроса;
- страница профиля юзера;

## Бэкенд

- Лежит [вот тут](https://natticharity.eveloth.ru)
- [API-дока](https://natticharity.eveloth.ru/api-docs/)

## Требования
- общетехнические - [тут](./requirements/Common.md)
- ❗подробные - [тут](./requirements/user-scenarios.md)

## Как запустить локально проект (backend)
### Перед началом
- переименовать файл `.env-example` в `env`
### Локальный дев-сервер (основной способ запуска)
- `npm install`
- `npm run build`
- `npm run dev`
### Docker (опционально, если вдруг захотите)
- `npm install`
- `npm run build`
- `docker build -t charity_back .`
- `docker run -p 4040:4040 charity_back`
### Использование локального API
Стучимся в эндпойнты, как на примере: `http://localhost:4040/auth`

## OpenAPI спецификация
- файл: `./apispec.yaml`
- эндпоинт: `/api-docs` (после запуска бэка переходите на http://localhost:4040/api-docs)
