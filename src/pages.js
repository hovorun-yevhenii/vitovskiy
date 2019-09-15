/*

1. Головна
2. Новини
3. Оголошення
4. Публічна інформація
5. Структура ВО
  5.1. Відділ освіти
	5.2. КУ Вітовський методичний кабінет
	5.3. КУ ІРЦ
	5.4. КУ ВРЦ ФГО
	5.5. Центр позашкільної роботи
6. Заклади освіти
	6.1. Заклади дошкільної освіти
	6.2. Заклади загальної середньої освіти
	6.3. ІРЦ
7. Діяльність
	7.1. Нормативно-правова база
	7.2. Атестація педагогічних працівників
	7.3. Олімпіади, турніри, МАН
	7.4. Фахові конкурси
	7.5. Нова українська школа
	7.6. ЗНО
	7.7. Я маю право
8. Зворотній зв'язок

*/

export default [
  {
    path: '/',
    name: 'home',
    title: 'Головна'
  },
  {
    path: '/news',
    name: 'news',
    title: 'Новини'
  },
  {
    path: '/announce',
    name: 'announce',
    title: 'Оголошення'
  },
  {
    path: '/transparency',
    name: 'transparency',
    title: 'Публічна інформація'
  },
  {
    name: 'structure',
    title: 'Структура ВО',
    children: [
      {
        path: '/department',
        name: 'department',
        title: 'Відділ освіти'
      },
      {
        path: '/ku-vmk',
        name: 'kuVmk',
        title: 'КУ Вітовський методичний кабінет'
      },
      {
        path: '/ku-irc',
        name: 'kuIrc',
        title: 'КУ ІРЦ'
      },
      {
        path: '/ku-vrc',
        name: 'kuVrc',
        title: 'КУ ВРЦ ФГО'
      },
      {
        path: '/cpo',
        name: 'cpo',
        title: 'Центр позашкільної роботи'
      }
    ]
  },
  {
    name: 'institutions',
    title: 'Заклади освіти',
    children: [
      {
        path: '/pre-school',
        name: 'preSchool',
        title: 'Дошкільна освіта'
      },
      {
        path: '/secondary-school',
        name: 'secondarySchool',
        title: 'Загальна середня освіта'
      },
      {
        path: '/irc',
        name: 'ircPage',
        title: 'ІРЦ'
      },
    ]
  },

  {
    name: 'activity',
    title: 'Діяльність',
    children: [
      {
        path: '/regulatory',
        name: 'regulatory',
        title: 'Нормативно-правова база'
      },
      {
        path: '/certification',
        name: 'certification',
        title: 'Атестація педагогічних працівників'
      },
      {
        path: '/man',
        name: 'man',
        title: 'Олімпіади, турніри, МАН'
      },
      {
        path: '/contests',
        name: 'contests',
        title: 'Фахові конкурси'
      },
      {
        path: '/new-school',
        name: 'newSchool',
        title: 'Нова українська школа'
      },
      {
        path: '/externally',
        name: 'externally',
        title: 'ЗНО'
      },
      {
        path: '/rights',
        name: 'rights',
        title: 'Я маю право'
      },
    ]
  },
  {
    path: '/feedback',
    name: 'feedback',
    title: 'Зворотній зв\'язок'
  },
]
