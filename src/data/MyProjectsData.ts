const MyProjectsData = [
    {
        title: 'JavaScript (React js)',
        example: [{
            name: 'WEB-приложение с использованием NASA API',
            description: 'Просмотр фотографий по выбранным датам с сайта NASA. Знакомился с localstorage. Для создания вёрстки использовалась Grid система. Изучал работу с CSS3 и различными анимациями. Так же изучал новые библиотеки, такие как React-slick и React-calendar.',
            link: 'https://na-613c.github.io/nasa-apod',
            code: 'https://github.com/na-613c/nasa-apod',
        }, {
            name: 'Соц сеть',
            description: 'Социальная сеть на основе https://social-network.samuraijs.com/',
            link: 'https://na-613c.github.io/vk-parody',
            code: 'https://github.com/na-613c/vk-parody',
        }, {
            name: 'Слайдер',
            description: 'Простой слайдер без использоваия сторонних библиотек.',
            link: 'https://na-613c.github.io/slider',
            code: 'https://github.com/na-613c/slider',
        },
        ],
    },
    {
        title: 'JavaScript (Node js)',
        example: [{
            name: 'Бот для Discord',
            description: 'Бот для Discord. Сделан по принципу модульности, что позволяет с легкостью расширять уже имеющийся функционал.',
            code: 'https://github.com/na-613c/discord-bot',
        }, {
            name: 'Парсер',
            description: 'Парсер резюме сайта jobs.tut.by. Специально не использовалась библиотека cheerio, что бы усложнить разработку. Все данные при скрапинге записывались в переменную. При удачном завершении парсинга все новые данные полностью заменяли предыдущие, что позволяло обезопасить уже имеющиеся данные от потери при возникновении неполадок во время парсинга. Данные записываются в  формате JSON.',
            code: 'https://github.com/na-613c/Parser',
        },{
            name: 'Сервер',
            description: 'Сервер на Node js. Моё первое знакомство с Node js. Данные брались из mySql. Имелась сложная архитектура из более 4 таблиц.',
            code: 'https://github.com/na-613c/Car_Shop_NodeJs',
        },


        ],
    },
    {
        title: 'TypeScript',
        example: [{
            name: 'Заметки',
            description: 'Оповещения о событиях в браузере. Сами данные хранятся в localstorage и берутся с задержкой от 1 до 2 секунд, что бы имитировать работу с api. Во время создания изучил MobX для контроля бизнес уровня. При создании UI использовался Ant Design.',
            link: 'https://na-613c.github.io/browser-notificator/#/',
            code: 'https://github.com/na-613c/browser-notificator',
        }],
    },
    {
        title: 'PHP (Laravel)',
        example: [{
            name: 'Сайт для создания отзывов',
            description: 'Сайт создан для просмотра отзывов пользователей о других сайтах. Каждый желающий может сам оставить отзыв о сайте, но для этого ему придется зарегистрироваться. Так же на сайте организован поиск, для более удобного нахождения нужных статей. Поиск производится по названиям cтатей c автоподсказками при помощи Ajax. Для создания UI использовался Bootstrap.',
            code: 'https://github.com/na-613c/Laravel',
        }],
    },
    {
        title: 'Java (Android)',
        example: [{
            name: 'Wikipedia',
            description: 'Android клиент для интернет портала Wikipedia. При создании использовалось одно Activity и все экраны - Fragments. Для запроса в сеть использовалась библиотека Retrofit2. Личные данные хранятся локально в SQLite. Общедоступные данные - в Firebase. Для создания UI использовался Material Design.',
            code: 'https://github.com/na-613c/Wikipedia',
        },
            {
                name: 'Калькулятор калорий',
                description: 'Калькулятор калорий который позволяет посчиать количество Ккал и ЖБУ в пище. При создании использовалось одно Activity и все экраны - Fragments. Пользователь имеет возможность добавлять новые блюда в удалённую базу данных Firebase.',
                code: 'https://github.com/na-613c/CalorieCalculator',
            }, {
                name: 'Викторина',
                description: 'Викторина о животных с тремя уровнями сложности из 10 вопросов. Все рекорды хранятся в Firebase. Для запроса в сеть используется Retrofit2 и RxJava.',
                code: 'https://github.com/na-613c/Quiz',
            },
            {
                name: 'Калькулятор',
                description: 'Просто калькулятор. Все вычисления и обработка ошибок выполняются при помощи EvalEx.',
                code: 'https://github.com/na-613c/Calculator',
            },
        ],
    },
    {
        title: 'C# (Unity)',
        example: [{
            name: '2D игра',
            description: '2D android платформер. Рекаорды хранятся в памяти устройства. Все враги хранятся в массиве и появляются/пропадают при помощи перемещения за экраном пользоватея с использованием Coroutines, что повышает производительность.',
            code: 'https://github.com/na-613c/UnityGame',
        }],
    },
    {
        title: 'HTML+CSS+JS',
        example: [{
            name: 'Игровой сайт',
            description: 'Учился верстать и изучал html.',
            link: 'https://runningdeath.000webhostapp.com',
            code: 'https://github.com/na-613c/RunningDeath',
        }, {
            name: 'Календарь',
            description: 'Просто календарик на нативном js.',
            link: 'https://na-613c.github.io/Calendar/calendar.html',
            code: 'https://github.com/na-613c/Calendar',
        }, {
            name: 'График',
            description: 'CSS стилизация ввиде динамичного графика. Изучал работу с псевдоэлементами.',
            link: 'https://codepen.io/na-613c/full/bGpXrdg',
            code: 'https://codepen.io/na-613c/pen/bGpXrdg',
        }, {
            name: 'Генератор картинок с котиками',
            description: 'Простое использование стороннего Api.',
            link: 'https://codepen.io/na-613c/full/ExyJBON',
            code: 'https://codepen.io/na-613c/pen/ExyJBON',
        }, {
            name: 'Кальулятор',
            description: 'Калькулятор на нативном js с выбором режима работы [Обычный | Инженерный | Программист] и без использования eval().',
            link: 'https://codepen.io/na-613c/full/WmxVVo',
            code: 'https://codepen.io/na-613c/pen/WmxVVo',
        },
        ],
    },
    {
        title: 'Java (Spring boot)',
        example: [{
            name: 'Сайт автомагазина',
            description: 'Сайт по технологии REST API с разграничением серверной части (spring boot) и фронтенда (angular и bootstrap).',
            code: 'https://github.com/na-613c/car_shop',
        }],
    },
];

export default MyProjectsData;