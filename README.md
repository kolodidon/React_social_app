# Социальная сеть
##### (По курсу IT-KAMASUTRA)
## https://kolodidon.github.io/react_social_app/

## Технологии:
- React.js + TypeScript
- React-router-dom
- Redux (react-redux, redux-thunk, reselect)
- Axios
- Formik + yup
- Jest (всего пару-тройку тестов)

## Как это работает:
Приложение состоит из страниц:
1. [Profile](#profile)
  1. [ProfileInfo](#profileinfo)
  2. [MyPostsContainer](#mypostscontainer)
2. [Dialogs](#dialogs)
3. [Users](#users)
4. [Music](#music)
5. [Settings](#settings)
6. [Страница логинизации](#login)

### Profile <a name="profile"></a>
Компонент Profile получает данные из redux через контейнерный компонент ProfileContainer ( connect(mapStateToProps, mapDispatchToProps)(Profile) )
Внутри себя содержит ProfileInfo и MyPostsContainer

##### ProfileInfo <a name="profileinfo"></a>
Содержит компоненты:
- ProfileStatusWithHooks, компонент для отображения/изменения статуса в профиле
- UploadAvatar, компонент для загрузки картинки-аватара, реализован на Formik, валидация формы сделана на библиотеке Yup. Есть предпросмотр загруженной картинки (Thumb)
- UploadInfo, компонент для загрузки данных о себе в профиле. Также реализован на Formik + Yup.
Все три компонента отправляют данные на сервер по API

##### MyPostsContainer <a name="mypostscontainer"></a>
Компонент для публикации и отображения постов на странице профиля пользователя.
Фактически, он отрисовывает содержимое массива объектов state.profilePage.postData, и даёт возможность добавлять новые посты-объекты.
Но это нигде не сохраняется.

### Dialogs <a name="dialogs"></a>
Компонент для отображения и написания сообщений.
Сейчас он отрисовывает только state.dialogsPage.contactData и state.dialogsPage.messageData
Также есть возможность добавлять новые "сообщения" в state.dialogsPage.messageData, в соответствующем окне для написания текста.

### Users <a name="users"></a>
Получает данные из Redux через контейнерный компонент UsersContainer ( connect(mapStateToProps, mapDispatchToProps)(UsersComponent) )
В UsersComponent уже вызывается Users со всеми нужными данными.
В самом компоненте выводится массив state.usersPage.users. Изначально этот массив пуст, в него приходят данные при выполнении thunk с таким запросом:
```tsx
    getUsers(currentPage = 1, pageSize = 10) {
        return(
            axiosInstance.get<getUsersResponceType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(responce => responce.data)
        )
    },
```
Полный URL запроса будет выглядеть так:
```js
https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}
```
Параметры currentPage и pageSize передаются из компонента Paginator в Users, который, соответственно, занимается пагинацией.

### Music <a name="music"></a>
Тут ничего нет, пока что это только заглушка

### Settings <a name="settings"></a>
Тут ничего нет, пока что это только заглушка

### Страница логинизации <a name="login"></a>
Стандартная форма для ввода логина и пароля, отправляет данные вот таким образом:
```tsx
    loginUser(email: string, password: string, rememberMe: boolean, captcha: string){
        return(
            axiosInstance.post<loginUserResponseType>(`auth/login/`, { email, password, rememberMe, captcha })
            .then(responce => responce.data)
        )
    },
```
Присутствуют все проверки на успешность/провал запроса, они реализованы в thunk'e (loginUserThunkCreator)
В случае многократных ошибок, будет выслана капча, она тоже нормально поддерживается.
