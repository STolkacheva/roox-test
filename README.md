## Сверстать две страницы “Список пользователей” и “Профиль пользователя”

Данные пользователей [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

Ссылка на макет [https://www.figma.com/file/X8Ke95Xuc9ZXrZJ3DzQjOW/Тестовое-задание?node-id=2%3A2](https://www.figma.com/file/X8Ke95Xuc9ZXrZJ3DzQjOW/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5?node-id=2%3A2)

### для улучшения читаемости страниц, шрифты были увеличены и использованы более единообразные отступы

Список пользователей:

1. Вывести 10 пользователей соответственно макету. Данные взять  с [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

2. Пока идет загрузка списка пользователей должен быть индикатор загрузки

3. Вывести на карточку:
    * name
    * address.city
    * company.name
    
4. Кнопка “Подробнее” должна вести на “Профиль пользователя”
5. Реализовать фильтрацию списка по признаку Name и City в алфавитном порядке

Профиль пользователя:

1. Вывести в профиле:
    * name 
    * username
    * email
    * address.street
    * address.city
    * address.zipcode
    * phone 
    * website
    
2. Все поля формы, кроме Comment, должны быть предзаполнены из [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

3. Реализовать кнопку изменить, изначально поля должны быть readonly, после нажатия на кнопку поля можно редактировать
4. Реализовать валидацию на клиенте
5. Все поля формы, кроме поля Comment, обязательны для заполнения
6. Из данных формы при отправке нужно сформировать JSON и вывести его в консоль.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
