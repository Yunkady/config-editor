export const IQChatConfig = `{
  "Настройка информации о игроке": {
    "Перключатели функций": {
      "Устанавливать автоматически префикс игроку, когда он получил права на него": true,
      "Устанавливать автоматически цвет ника игроку, когда он получил права на него": true,
      "Устанавливать автоматически цвет чата игроку, когда он получил права на него": true,
      "Сбрасывать автоматически префикс при окончании прав на него у игрока": true,
      "Сбрасывать автоматически цвет ника при окончании прав на него у игрока": true,
      "Сбрасывать автоматически цвет чата при окончании прав на него у игрока": true
    },
    "Настройка стандартных значений": {
      "Данный префикс установится если игрок впервые зашел на сервер или в случае окончания прав на префикс, который у него стоял ранее": "<color=#CC99FF>[ИГРОК]</color>",
      "Данный цвет ника установится если игрок впервые зашел на сервер или в случае окончания прав на цвет ника, который у него стоял ранее": "#0099FF",
      "Данный цвет чата установится если игрок впервые зашел на сервер или в случае окончания прав на цвет чата, который у него стоял ранее": "#eee"
    }
  },
  "Настройка параметров для игрока": {
    "Настройка отображения параметров для выбора игрока": {
      "Тип отображения выбора префикса для игрока - (0 - выпадающий список, 1 - слайдер (Учтите, что если у вас включен мульти-префикс, будет установлен выпадающий список))": 0,
      "Тип отображения выбора цвета ника для игрока - (0 - выпадающий список, 1 - слайдер)": 1,
      "Тип отображения выбора цвета сообщения для игрока - (0 - выпадающий список, 1 - слайдер)": 0,
      "IQRankSystem : Тип отображения выбора ранга для игрока - (0 - выпадающий список, 1 - слайдер)": 1
    },
    "Список и настройка цветов для ника": [
      {
        "Права": "iqchat.default",
        "Значение": "#CC99FF",
        "Заблокировать возможность выбрать данный параметр игроком в меню плагина (true - да/false - нет)": false
      },
      {
        "Права": "iqchat.admin",
        "Значение": "#ffff99",
        "Заблокировать возможность выбрать данный параметр игроком в меню плагина (true - да/false - нет)": false
      },
      {
        "Права": "iqchat.admin",
        "Значение": "#ff9999",
        "Заблокировать возможность выбрать данный параметр игроком в меню плагина (true - да/false - нет)": false
      }
    ],
    "Список и настройка цветов для сообщений в чате": [
      {
        "Права": "iqchat.default",
        "Значение": "#CC99FF",
        "Заблокировать возможность выбрать данный параметр игроком в меню плагина (true - да/false - нет)": false
      },
      {
        "Права": "iqchat.admin",
        "Значение": "#ffff99",
        "Заблокировать возможность выбрать данный параметр игроком в меню плагина (true - да/false - нет)": false
      },
      {
        "Права": "iqchat.admin",
        "Значение": "#ff9999",
        "Заблокировать возможность выбрать данный параметр игроком в меню плагина (true - да/false - нет)": false
      }
    ],
    "Список и настройка префиксов в чате": {
      "Включить поддержку нескольких префиксов сразу (true - можно установить несколько префиксов/false - установить можно только 1 на выбор)": false,
      "Максимальное количество префиксов, которое можно установить за раз(Данный параметр работает только если включена установка нескольких префиксов)": 5,
      "Список префиксов и их настройка": [
        {
          "Права": "iqchat.default",
          "Значение": "<color=#CC99FF>[ИГРОК]</color>",
          "Заблокировать возможность выбрать данный параметр игроком в меню плагина (true - да/false - нет)": false
        },
        {
          "Права": "iqchat.admin",
          "Значение": "<color=#ffff99>[VIP]</color>",
          "Заблокировать возможность выбрать данный параметр игроком в меню плагина (true - да/false - нет)": false
        },
        {
          "Права": "iqchat.admin",
          "Значение": "<color=#ff9999>[АДМИН]</color>",
          "Заблокировать возможность выбрать данный параметр игроком в меню плагина (true - да/false - нет)": false
        }
      ]
    }
  },
  "Настройка мута в плагине": {
    "Запрещать отправлять сообщения в /pm, /r - если у игрока заблокирован чат": false,
    "Настройка автоматического мута": {
      "Включить автоматический мут по запрещенным словам(true - да/false - нет)": true,
      "Причина автоматического мута": {
        "Причина для блокировки": "Автоматическая блокировка чата",
        "Время блокировки(в секундах)": 300
      }
    },
    "Дополнительная настройка для логирования о мутах в дискорд": {
      "Поддержка логирования последних N сообщений (Должно быть включено логирование в дискорд о мутах)": false,
      "Сколько последних сообщений игрока отправлять в логировании": 10
    },
    "Причины для блокировки чата": [
      {
        "Причина для блокировки": "Агрессивное поведение",
        "Время блокировки(в секундах)": 100
      },
      {
        "Причина для блокировки": "Оскорбления",
        "Время блокировки(в секундах)": 300
      },
      {
        "Причина для блокировки": "Оскорбление (повторное нарушение)",
        "Время блокировки(в секундах)": 1000
      },
      {
        "Причина для блокировки": "Реклама",
        "Время блокировки(в секундах)": 5000
      },
      {
        "Причина для блокировки": "Унижение",
        "Время блокировки(в секундах)": 300
      },
      {
        "Причина для блокировки": "Спам",
        "Время блокировки(в секундах)": 60
      }
    ],
    "Причины для блокировки голоса": [
      {
        "Причина для блокировки": "Агрессивное поведение",
        "Время блокировки(в секундах)": 100
      },
      {
        "Причина для блокировки": "Оскорбления",
        "Время блокировки(в секундах)": 300
      },
      {
        "Причина для блокировки": "Срыв мероприятия криками",
        "Время блокировки(в секундах)": 300
      }
    ]
  },
  "Настройка обработки сообщений": {
    "Основная настройка сообщений в чат от плагина": {
      "Уведомлять игрока в чате о получении префикса/цвета ника/цвета чата (true - да/false - нет)": true,
      "Уведомлять игрока в чате о окончании префикса/цвета ника/цвета чата (true - да/false - нет)": true,
      "Настройка формата оповещения в чате": {
        "Наименование оповещения в чат": "<color=#68cacd><b>[ОПОВЕЩЕНИЕ]</b></color>",
        "Цвет сообщения оповещения в чат": "#efedee",
        "Steam64ID для аватарки в чате": "0"
      },
      "Настройка формата упоминания в чате, через @": {
        "Цвет сообщения упоминания игрока в чате": "#efedee",
        "Звук при при получении и отправки упоминания через @": "assets/bundled/prefabs/fx/notice/item.select.fx.prefab"
      },
      "Дополнительная настройка": {
        "Время,через которое удалится сообщение с UI от администратора": 5,
        "Размер сообщения от игрока в чате": 14,
        "Размер ника игрока в чате": 14,
        "Размер префикса игрока в чате (будет использовано, если в самом префиксе не установвлен <size=N></size>)": 14,
        "Размер ника по привилегии [permission] = размер": {
          "iqchat.bigBoy": 16
        },
        "Размер сообщения в чате по привилегии [permission] = размер": {
          "iqchat.bigBoy": 16
        }
      }
    },
    "Настройка переключения функционала в чате": {
      "Настройка защиты от спама": {
        "Включить защиту от спама (Анти-спам)": true,
        "Время через которое игрок может отправлять сообщение (АнтиСпам)": 10,
        "Дополнительная настройка Анти-Спама": {
          "Включить дополнительную защиту от спама (Анти-дубликаты, повторяющие сообщения)": true,
          "Сколько дублирующих сообщений нужно сделать игроку чтобы его замутила система": 3,
          "Настройка автоматического мута за дубликаты": {
            "Причина для блокировки": "Повторяющиеся сообщения (СПАМ)",
            "Время блокировки(в секундах)": 300
          }
        }
      },
      "Настройка временной блокировки чата новичкам (которые только зашли на сервер)": {
        "Защита от новичка в PM/R": {
          "Включить защиту?": false,
          "Время блокировки чата для новичка": 1200
        },
        "Защита от новичка в глобальном и коммандном чате": {
          "Включить защиту?": false,
          "Время блокировки чата для новичка": 1200
        }
      },
      "Настройка личных сообщений": {
        "Включить личные сообщения": true,
        "Звук при при получении личного сообщения": "assets/bundled/prefabs/fx/notice/stack.world.fx.prefab"
      },
      "Включить игнор ЛС игрокам(/ignore nick или через интерфейс)": true,
      "Скрыть из чата выдачу предметов Админу": true,
      "Переносить мут в командный чат(В случае мута, игрок не сможет писать даже в командный чат)": true
    },
    "Настройка форматирования сообщений игроков": {
      "Включить форматирование сообщений [Будет контроллировать капс, формат сообщения] (true - да/false - нет)": true,
      "Использовать список запрещенных слов (true - да/false - нет)": true,
      "Слово которое будет заменять запрещенное слово": "***",
      "Список запрещенных слов [ЗапрещенноеСлово] = Заменять ли его в части слова (например ВасяБля => Вася***) (true - да/false - нет)": {
        "бля": false,
        "сука": false,
        "говно": false,
        "нахуй": true
      },
      "Настройка контроллера ников": {
        "Включить форматирование ников игроков (должно быть включено форматирование сообщений)": true,
        "Слово которое будет заменять запрещенное слово (Вы можете оставить пустым и будет просто удалять)": "",
        "Список запрещенных ников [ЗапрещенноеСлово] = Заменять ли его в части слова (например ВасяБля => Вася***) (true - да/false - нет)": {
          "Админ": true,
          "Модератор": true,
          "Модер": true,
          "Хелпер": true
        },
        "Список разрешенных ссылок в никах": [
          "mysite.com"
        ]
      }
    }
  },
  "Настройка оповещений в чате": {
    "Настройка оповещений в чате": {
      "Включить автоматические сообщения в чат (true - да/false - нет)": true,
      "Тип автоматических сообщений : true - поочередные/false - случайные": false,
      "Список автоматических сообщений в чат": {
        "Настройка мультиязычных сообщений [КодЯзыка] = ВариацииПеревода": {
          "en": [
            "Automatic message #1 (Edit in configuration)",
            "Automatic message #2 (Edit in configuration)",
            "Automatic message #3 (Edit in configuration)",
            "Automatic message #4 (Edit in configuration)",
            "Automatic message #5 (Edit in configuration)",
            "Automatic message #6 (Edit in configuration)"
          ],
          "ru": [
            "Автоматическое сообщение #1 (Редактировать в конфигурации)",
            "Автоматическое сообщение #2 (Редактировать в конфигурации)",
            "Автоматическое сообщение #3 (Редактировать в конфигурации)",
            "Автоматическое сообщение #4 (Редактировать в конфигурации)",
            "Автоматическое сообщение #5 (Редактировать в конфигурации)",
            "Автоматическое сообщение #6 (Редактировать в конфигурации)"
          ]
        }
      },
      "Интервал отправки сообщений в чат (Броадкастер) (в секундах)": 60
    },
    "Настройка оповещений о статусе сессии игрока": {
      "При уведомлении о входе/выходе игрока отображать его аватар напротив ника (true - да/false - нет)": true,
      "Уведомлять в чате о входе игрока (true - да/false - нет)": true,
      "Включить случайные уведомления о входе игрока из списка (true - да/false - нет)": false,
      "Отображать страну зашедшего игрока (true - да/false - нет": true,
      "Уведомлять о выходе игрока в чат(выбираются из списка) (true - да/false - нет)": true,
      "Включить случайные уведомления о выходе игрока (true - да/false - нет)": false,
      "Отображать причину выхода игрока (true - да/false - нет)": true,
      "Случайные уведомления о входе игрока({0} - ник игрока, {1} - страна(если включено отображение страны)": {
        "Настройка мультиязычных сообщений [КодЯзыка] = ВариацииПеревода": {
          "en": [
            "{0} flew in from {1}",
            "{0} flew into the server from{1}",
            "{0} jumped on a server"
          ],
          "ru": [
            "{0} влетел как дурачок из {1}",
            "{0} залетел на сервер из {1}, соболезнуем",
            "{0} прыгнул на сервачок"
          ]
        }
      },
      "Случайные уведомления о выходе игрока({0} - ник игрока, {1} - причина выхода(если включена причина)": {
        "Настройка мультиязычных сообщений [КодЯзыка] = ВариацииПеревода": {
          "en": [
            "{0} gone to another world",
            "{0} left the server with a reason {1}",
            "{0} went to another server"
          ],
          "ru": [
            "{0} ушел в мир иной",
            "{0} вылетел с сервера с причиной {1}",
            "{0} пошел на другой сервачок"
          ]
        }
      }
    },
    "Настройка оповещений о статусе сессии администратора": {
      "Уведомлять о входе админа на сервер в чат (true - да/false - нет)": false,
      "Уведомлять о выходе админа на сервер в чат (true - да/false - нет)": false
    },
    "Настройка персональных оповоещений игроку при коннекте": {
      "Включить случайное сообщение зашедшему игроку (true - да/false - нет)": true,
      "Список сообщений игроку при входе": {
        "Настройка мультиязычных сообщений [КодЯзыка] = ВариацииПеревода": {
          "en": [
            "Welcome to the server SUPERSERVER\nWe are glad that you chose us!",
            "Welcome back to the server!\nWe wish you good luck",
            "Welcome to the server\nWe have the best plugins"
          ],
          "ru": [
            "Добро пожаловать на сервер SUPERSERVER\nРады,что выбрал именно нас!",
            "С возвращением на сервер!\nЖелаем тебе удачи",
            "Добро пожаловать на сервер\nУ нас самые лучшие плагины"
          ]
        }
      }
    }
  },
  "Настройка Rust+": {
    "Использовать Rust+": true,
    "Название для уведомления Rust+": "СУПЕР СЕРВЕР"
  },
  "Настройка плагинов поддержки": {
    "Настройка XLevels": {
      "Использовать поддержку XLevels": false,
      "Использовать полный префикс с уровнем из XLevel (true) иначе только уровень (false)": false,
      "Цвет дополнительного тэга": "#FF0000, #FF3300, #FF6600, #FF9900, #FFCC00, #FFFF00, #CCFF00, #99FF00, #66FF00, #33FF00"
    },
    "Настройка IQFakeActive": {
      "Использовать поддержку IQFakeActive": true
    },
    "Настройка IQRankSystem": {
      "Формат отображения ранга в чате ( {0} - это ранг юзера, не удаляйте это значение)": "[{0}]",
      "Формат отображения времени с IQRankSystem в чате ( {0} - это время юзера, не удаляйте это значение)": "[{0}]",
      "Использовать поддержку рангов": false,
      "Отображать игрокам их отыгранное время рядом с рангом": true
    },
    "Настройка Clans": {
      "Отображать в чате клановый тэг (если установлены Clans)": false,
      "Цвет дополнительного тэга": "#FF0000, #FF3300, #FF6600, #FF9900, #FFCC00, #FFFF00, #CCFF00, #99FF00, #66FF00, #33FF00"
    },
    "Настройка TranslationAPI": {
      "Использовать автоматический перевод сообщений с помощью TranslataionAPI": false,
      "Переводить командный чат": false,
      "Переводить чат в личных сообщениях": true,
      "Код приоритетного языка (оставьте пустым и тогда для каждого игрока будет переводиться на его языке клиента)": ""
    },
    "Настройка SkillTree": {
      "Использовать поддержку SkillTree": false,
      "Использовать полный вывод информации XP + Level (true), использовать только Level (false)": false,
      "Использовать престиж": false,
      "Цвет дополнительного тэга": "#FF0000, #FF3300, #FF6600, #FF9900, #FFCC00, #FFFF00, #CCFF00, #99FF00, #66FF00, #33FF00"
    },
    "Настройка PlayerRanks": {
      "Использовать поддержку PlayerRanks": false,
      "Цвет дополнительного тэга": "#FF0000, #FF3300, #FF6600, #FF9900, #FFCC00, #FFFF00, #CCFF00, #99FF00, #66FF00, #33FF00"
    },
    "Настройка XPrison": {
      "Использовать поддержку XPrison": false,
      "Цвет дополнительного тэга": "#FF0000, #FF3300, #FF6600, #FF9900, #FFCC00, #FFFF00, #CCFF00, #99FF00, #66FF00, #33FF00"
    }
  },
  "Настройка автоответчика": {
    "Включить автоответчик?(true - да/false - нет)": true,
    "Настройка сообщений [Ключевое слово] = Ответ": {
      "wipe": {
        "Настройка мультиязычных сообщений [КодЯзыка] = ВариацииПеревода": {
          "en": [
            "Wipe will be 27.06"
          ],
          "ru": [
            "Вайп будет 27.06"
          ]
        }
      },
      "читер": {
        "Настройка мультиязычных сообщений [КодЯзыка] = ВариацииПеревода": {
          "en": [
            "Found a cheater? Write /report and send a complaint"
          ],
          "ru": [
            "Нашли читера?Напиши /report и отправь жалобу"
          ]
        }
      }
    }
  },
  "Отключить дополнительное дублированиеи чата в RCON": true,
  "Дополнительная настройка": {
    "SteamApiKey (https://steamcommunity.com/dev/apikey)": "",
    "Включить команду /online (true - да/ false - нет)": false,
    "Использовать сокращенный формат /online (будет отображать только количество)": true,
    "Настройка логирования сообщений": {
      "Настройка логирования общего чата": {
        "Включить логирование (true - да/false - нет)": false,
        "Webhooks канала для логирования": ""
      },
      "Настройка логирования тим чата": {
        "Включить логирование (true - да/false - нет)": false,
        "Webhooks канала для логирования": ""
      }
    },
    "Настройка логирования личных сообщений игроков": {
      "Включить логирование (true - да/false - нет)": false,
      "Webhooks канала для логирования": ""
    },
    "Настройка логирования блокировок/разблокировок чата/голоса": {
      "Включить логирование (true - да/false - нет)": false,
      "Webhooks канала для логирования": ""
    },
    "Настройка логирования чат-команд от игроков": {
      "Включить логирование (true - да/false - нет)": false,
      "Webhooks канала для логирования": ""
    }
  }
}`
