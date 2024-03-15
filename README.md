# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


***Check list:***

Вход пользователя:

+ Стартовый экран — экран «Вход». 
+ Пользователю предлагается ввести почту и пароль, если он уже зарегистрирован, и нажать «Войти». 
+ Если пользователь еще не зарегистрирован, ему необходимо нажать «Регистрируйтесь здесь».

    Неверные данные:

    + При вводе неверных данных вылезает сообщение об ошибке, также красной обводкой отмечается то поле (или поля), к которому относится ошибка. - Красной обводкой отмечаются все поля
    + Кнопка «Войти» становится не активной и приобретает серый цвет.


Регистрация: 

+ На экране регистрации пользователь придумывает имя, почту и пароль. После этого он нажимает «Зарегистрироваться». 
+ Если пользователь понял, что у него уже есть аккаунт, он может нажать «Войдите здесь» и вернуться на экран «Вход».
- После регистрации пользователь снова попадает на стартовый экран «Вход», где вводит логин и пароль заново. - После регистрации пользователь сразу попадает на страницу Канбан 

   	Неверные данные:

+ При вводе неверных данных или если пользователь не заполнил одно из полей вылезает сообщение об ошибке, также красной обводкой отмечается то поле (или поля), к которому относится ошибка.  - Красной обводкой отмечаются все поля
+ Кнопка “Войти” становится не активной и приобретает серый цвет.

    Описание ошибки:
    + Не все заполнены данные пользователя:
    Введенные вами данные не корректны. Чтобы завершить регистрацию, заполните все поля в форме.
    + Пользователь уже существует: 
    Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.

Канбан:

+ После заполнения данных и нажатия на кнопку «Войти» пользователь попадает на главный экран канбан-доски.
+ Канбан состоит из карточек с задачами, которые расположены под теми колонками, в каком статусе выполнения они находятся.
+ Карточка задачи содержит в себе категорию, название задачи и срок ее исполнения. Также на карточке в правом верхнем углу присутствуют три точки, при нажатии на которые раскрывается подробный просмотр задачи (см. ниже). - При нажатии на три точки в правом верхнем углу раскрывается модуль для редактирование карточки с задачей 

Лоадер:

- При загрузки страницы появляется градиентный лоадер, который отображает загрузку. - Реализована страничка с надписью для пользователя, что необходимо подождать загрузку данных 

Верхняя панель (хедер):

+ При нажатии на «Окошко пользователя» пользователю раскрывается окно, где отображаются его имя и почта, а также есть возможность смены темы и выхода из аккаунта. - Смена темы еще в разработке 
+ При нажатии на «Выйти» пользователю раскрывается окно с подтверждением выхода из аккаунта. При нажатии «Да, выйти» происходит выход. При нажатии «Нет, остаться» на экране остается канбан, а окно «Выйти из аккаунта» закрывается. При наведении и нажатии на кнопку с обводкой она заливается цветом.

Создание задачи:

+ При нажатии на кнопку «Создать новую задачу» пользователю раскрывается окно с созданием задачи. 
+ Задний фон с канбаном при открытии окна затемняется.
+ Окно создание задачи содержит в себе поля для заполнения: «Название задачи», «Описание задачи». Также есть возможность выбора категории и постановки срока исполнения.
+ После заполнения информации необходимо нажать на кнопку «Создать задачу» — тогда карточка с задачей падает на доску канбана.

Календарь: 

+ Конечный срок исполнения выбирается нажатием на необходимую дату. 
+ Сегодняшний день выделен начертанием bold.
- Ниже календаря, где написано «Выберите срок исполнения», автоматически проставляется выбранный конечный срок по задаче. - Под календарем всегда есть надпись You selected “выбранная дата”, но изначально всегда стоит актуальная дата, ховер на число не реализован.

Категория в создании задачи:
+ Категория выбирается с помощью клика на необходимый выбор. Активная выбранная категория отображается ярко, а невыбранные категории имеют прозрачность. - Но использован псевдокласс focus, работает не совсем, как задумано по ТЗ.

Просмотр задачи:

+ При нажатии на карточку с задачей открывается окошко с более подробным просмотром данной задачи, где пользователь может увидеть описание задачи, срок исполнения и статус. 
+ Данные поля неактивны для клика и изменения , пока пользователь не нажмет «Редактировать задачу». 
+ Также присутствует возможность удаления задачи. Если пользователь нажимает «Удалить задачу», задача исчезает с канбан-доски.
+ При нажатии на кнопку «Закрыть» окно с просмотром задачи закрывается, и пользователь снова видит канбан.

Редактирование задачи:

+ При нажатии на кнопку «Редактировать задачу» у пользователя появляется возможность взаимодействия с полями «Статус», «Описание задачи» и «Даты».
+ Объекты, которые выбраны, отображаются цветом 94A6BE.
- При редактировании, в поле «Статус» появляются дополнительные статусы. При нажатии на иной (не выбранный) статус задача на канбан-доске перемещается в выбранную колонку. - Не реализовано, задачи автоматически изначально создаются со статусом “Без статуса”, потом пользователь может поменять статус при редактировании задачи 
+ Чтобы применить все изменения, необходимо нажать на кнопку «Сохранить».
+ Чтобы отменить изменения, необходимо нажать на кнопку «Отменить». - И пользователь перемещается на просмотр задачи
+ Чтобы закрыть окно, необходимо нажать на кнопку «Закрыть».



Итог: 
Необходимо дореализовать:
    Календарь:
        Ниже календаря, где написано «Выберите срок исполнения», автоматически проставляется выбранный конечный срок по задаче.

	Категория в создании задачи:
        Категория выбирается с помощью клика на необходимый выбор. Активная выбранная категория отображается ярко, а невыбранные категории имеют прозрачность. (Но использован псевдокласс focus, работает не совсем, как задумано по ТЗ)

    Редактирование задачи:
        При редактировании, в поле «Статус» появляются дополнительные статусы. При нажатии на иной (не выбранный) статус задача на канбан-доске перемещается в выбранную колонку.

