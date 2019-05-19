/*

1. Головна
2. Новини
3. Структура ВО
4. Заклади освіти
	4.1. Заклади дошкільної освіти
	4.2. Заклади загальної середньої освіти
5. Оголошення
6. Публічна інформація
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
    path: '/structure',
    name: 'structure',
    title: 'Структура ВО'
  },
  {
    path: '/transparency',
    name: 'transparency',
    title: 'Публічна інформація'
  },
  {
    path: '/announce',
    name: 'announce',
    title: 'Оголошення'
  },
  {
    name: 'institutions',
    title: 'Заклади освіти',
    children: [
      {
        path: '/pre-school',
        name: 'preSchool',
        title: 'Заклади дошкільної освіти'
      },
      {
        path: '/secondary-school',
        name: 'secondarySchool',
        title: 'Заклади загальної середньої освіти'
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
