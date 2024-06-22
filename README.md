<h1 style="text-align: center;">1-ый учебный проект на Хекслет: 'Игры разума'</h1>

<a href="https://ru.hexlet.io/programs/frontend/projects/44 target='_blank'">Ссылка на проект</a>

## Описание

«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново.

- Калькулятор. Арифметические выражения, которые необходимо вычислить.
- Прогрессия. Поиск пропущенных чисел в последовательности чисел.
- Определение четного числа.
- Определение наибольшего общего делителя.
- Определение простого числа.

## Установка

### Менеджер пакетов

Использование npm:

```bash
$ npm install @hexlet/code
```

После установки пакета, вы можете запустить любую игру.

**Для демонстрация работы — жми на название игры.**

## Список игр:

### 1. <a href="https://asciinema.org/a/Fj5gEV39uysKHdmoAkOqfck7I target='_blank'">Игра: "Проверка на чётность".</a>

Суть игры в следующем: пользователю показывается случайное число. И ему нужно ответить yes, если число чётное, или no — если нечётное.

Запуск:

```bash
$ brain-even
```

### 2. <a href="https://asciinema.org/a/FIs4NOpC9RDLL8PgB6m31T2L3 target='_blank'">Игра: "Калькулятор".</a>

Пользователю показывается случайное математическое выражение, например 35 + 16, которое нужно вычислить и записать правильный ответ.

```bash
$ brain-calc
```

### 3. <a href="https://asciinema.org/a/D1rUCsS9dyYfbQ4SDUWicfRNW target='_blank'">Игра "НОД".</a>

Пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

```bash
$ brain-gcd
```

### 4. <a href="https://asciinema.org/a/cpjKTH3OXbzKKlpgJInqhpNeI target='_blank'">Игра "Арифметическая прогрессия".</a>

Показываем игроку ряд чисел, образующий арифметическую прогрессию, заменив любое из чисел двумя точками. Игрок должен определить это число.

```bash
$ brain-progression
```

### 5. <a href="https://asciinema.org/a/0THMckZFd0PGa5s9tx1RN3pDM target='_blank'">Игра "Простое ли число?"</a>

Пользователю показывается случайное число. И ему нужно ответить yes, если число простое, в противном случае — no.

```bash
$ brain-prime
```

### Hexlet tests and linter status:

[![Actions Status](https://github.com/zebpaa/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/zebpaa/frontend-project-44/actions) <a href="https://codeclimate.com/github/zebpaa/frontend-project-44/maintainability"><img src="https://api.codeclimate.com/v1/badges/cfa5c1933860f91e9f90/maintainability" /></a>
