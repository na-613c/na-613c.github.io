const MyProjectsData = {
    'ru': [
        {
            title: 'JavaScript (React js)',
            example: [{
                name: 'WEB-приложение с использованием NASA API',
                description: 'Просмотр фотографий по выбранным датам с сайта NASA. Знакомился с localstorage. Для создания вёрстки использовалась Grid система. Изучал работу с CSS3 и с различными анимациями. Так же изучал новые библиотеки, такие как React-slick и React-calendar.',
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
            }, {
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
                link: 'https://na-613c.github.io/browser-notificator',
                code: 'https://github.com/na-613c/browser-notificator',
            }, {
                name: 'Портфолио',
                description: 'Данное портфолио сделано при помощи Type Script и React . При создании UI использовался Ant Design. Для использования 3D анимации использовал React-Three-Fiber. Изучил работу с i18next для смены языка. Для смены темы приложения используется Less и localstorage.',
                link: 'https://na-613c.github.io',
                code: 'https://github.com/na-613c/na-613c.github.io',
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
                description: '2D android платформер. Рекорды хранятся в памяти устройства. Все враги хранятся в массиве и появляются/пропадают при помощи перемещения за экраном пользователя с использованием Coroutines, что повышает производительность.',
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
    ],
    'en': [
        {
            title: 'JavaScript (React js)',
            example: [{
                name: 'WEB-application with NASA API',
                description: 'View photos by selected dates from the NASA website. I got acquainted with localstorage. The Grid system was used to create the layout. Studied working with CSS3 and various animations. I also studied new libraries such as React-slick and React-calendar.',
                link: 'https://na-613c.github.io/nasa-apod',
                code: 'https://github.com/na-613c/nasa-apod',
            }, {
                name: 'Social network',
                description: 'Social network based on https://social-network.samuraijs.com/',
                link: 'https://na-613c.github.io/vk-parody',
                code: 'https://github.com/na-613c/vk-parody',
            }, {
                name: 'Slider',
                description: 'Slider on base native  react js',
                link: 'https://na-613c.github.io/slider',
                code: 'https://github.com/na-613c/slider',
            },
            ],
        },
        {
            title: 'JavaScript (Node js)',
            example: [{
                name: 'Discord Bot',
                description: 'Discord bot made on the principle of modularity and you can to easily expand the existing functionality.',
                code: 'https://github.com/na-613c/discord-bot',
            }, {
                name: 'Parser',
                description: 'Parser of the resume of the site jobs.tut.by. The cheerio library was not specifically used to complicate development. All scraping data was written to a variable. Upon successful completion of the parsing, all new data completely replaced the previous ones, which made it possible to protect the existing data from loss in case of problems during parsing. The data is written in JSON format.',
                code: 'https://github.com/na-613c/Parser',
            }, {
                name: 'Server',
                description: 'Server on Node js. My first acquaintance with Node js. The data was taken from mySql. There was a complex architecture with more than 4 tables.',
                code: 'https://github.com/na-613c/Car_Shop_NodeJs',
            },],
        },
        {
            title: 'TypeScript',
            example: [{
                name: 'Browser notificator',
                description: 'Browser event notifications. The data itself is stored in localstorage and is taken with a delay of 1 to 2 seconds to simulate working with api. At the time of creation, I studied MobX to control the business level. The UI was created using Ant Design.',
                link: 'https://na-613c.github.io/browser-notificator',
                code: 'https://github.com/na-613c/browser-notificator',
            }, {
                name: 'Portfolio',
                description: 'This portfolio is made using Type Script and React. The UI was created using Ant Design. I used React-Three-Fiber to use 3D animation. Studied working with i18next to change the language. Less and localstorage are used to change the theme of the application.',
                link: 'https://na-613c.github.io',
                code: 'https://github.com/na-613c/na-613c.github.io',
            }],
        },
        {
            title: 'PHP (Laravel)',
            example: [{
                name: 'Website for creating reviews',
                description: 'The site was created to view user reviews of other sites. Everyone can leave a review of the site himself, but for this he will have to register. A search is also organized on the site, for more convenient finding the necessary articles. The search is performed by the titles of articles with auto-suggestions using Ajax. Bootstrap was used to create the UI.',
                code: 'https://github.com/na-613c/Laravel',
            }],
        },
        {
            title: 'Java (Android)',
            example: [{
                name: 'Wikipedia',
                description: 'Android client for Wikipedia. When creating, one Activity was used and all screens were Fragments. The Retrofit2 library was used to query the network. Personal data is stored locally in SQLite. Public data is in Firebase. Material Design was used to create the UI.',
                code: 'https://github.com/na-613c/Wikipedia',
            },
                {
                    name: 'Calorie calculator',
                    description: 'Calorie calculator that allows you to calculate the amount of kcal and  fat, protein, carbohydrates in food. When creating, one Activity was used and all screens were Fragments. The user has the ability to add new dishes to the remote Firebase database.',
                    code: 'https://github.com/na-613c/CalorieCalculator',
                }, {
                    name: 'Quiz',
                    description: 'An animal quiz with three difficulty levels and 10 questions. All records are stored in Firebase. Retrofit2 and RxJava are used to query the network.',
                    code: 'https://github.com/na-613c/Quiz',
                },
                {
                    name: 'Calculator',
                    description: 'Easy Calculator on android. All calculations and error handling are done using EvalEx.',
                    code: 'https://github.com/na-613c/Calculator',
                },
            ],
        },
        {
            title: 'C# (Unity)',
            example: [{
                name: '2D platformer',
                description: '2D android platformer. Records are stored in the device\'s memory. All enemies are stored in an array and appear/disappear by moving behind the user\'s screen using Coroutines, which improves performance.',
                code: 'https://github.com/na-613c/UnityGame',
            }],
        },
        {
            title: 'HTML+CSS+JS',
            example: [{
                name: 'Game guild site',
                description: 'Studied html.',
                link: 'https://runningdeath.000webhostapp.com',
                code: 'https://github.com/na-613c/RunningDeath',
            }, {
                name: 'Calendar',
                description: 'Easy calendar on native js.',
                link: 'https://na-613c.github.io/Calendar/calendar.html',
                code: 'https://github.com/na-613c/Calendar',
            }, {
                name: 'Timeline',
                description: 'CSS styling in the form of dynamic timeline. Studied working with pseudo-elements.',
                link: 'https://codepen.io/na-613c/full/bGpXrdg',
                code: 'https://codepen.io/na-613c/pen/bGpXrdg',
            }, {
                name: 'Generator of pictures with cats',
                description: 'Simple use of someone else\'s api.',
                link: 'https://codepen.io/na-613c/full/ExyJBON',
                code: 'https://codepen.io/na-613c/pen/ExyJBON',
            }, {
                name: 'Calculator',
                description: 'Calculator in native js with a choice of operating mode [Normal | Engineering | Programmer] and without using eval ().',
                link: 'https://codepen.io/na-613c/full/WmxVVo',
                code: 'https://codepen.io/na-613c/pen/WmxVVo',
            },
            ],
        },
        {
            title: 'Java (Spring boot)',
            example: [{
                name: 'Carshop website',
                description: 'A site based on REST API technology with a distinction between the server side (spring boot) and the frontend (angular and bootstrap).',
                code: 'https://github.com/na-613c/car_shop',
            }],
        },
    ]
};

export default MyProjectsData;