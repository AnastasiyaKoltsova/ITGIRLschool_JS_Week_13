# ITGIRLschool_JS_Week_13

## Теоретические вопросы
### 1. Как создать дату 24 января 2021 года, 22 часа 51 минута? Временная зона — местная.
```
let d = new Date(2021, 0, 24, 22, 51);
```
### 2. Для чего предназначен метод `getDay()`?
Вернет день недели от 0 (воскресенье) до 6 (суббота).
### 3. Как посчитать, сколько секунд осталось до завтра?
```
function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    let diff = tomorrow - now;
    return Math.round(diff / 1000);
}
```
### 4. Для чего предназначен метод `getDate()`?
Получить день месяца, от 1 до 31
### 5. Что выведет `console.log(d)` ?
```
let d = new Date(2016, 2, 9);  
console.log(d);
```
Ответ:
```
Wed Mar 09 2016 00:00:00 GMT+0300 (Москва, стандартное время)
```
### 6. Что делает `getTimezoneOffset()` ?
Возвращает разницу в минутах между UTC и местным часовым поясом.
### 7. Что выведет консоль?
```
let date = new Date();
console.log(date.getUTCHours());
```
Ответ (в 12:24 по Московскому времени UTC+3): 
```
9
``` 
### 8. Для чего предназначен метод `getHours()` объекта Date?
Метод getHours() возвращает часы указанной даты по местному времени.
### 9. Что выведет консоль?
```
let d = new Date(); 
let y =  d.getFullYear();
console.log(y);
```
Ответ: 
```
2023
```
### 10. В чём ошибка в коде?
```
let y = new Date(); 
let d = y.getDate();
console.log(d);
```
Здесь ошибки нет.
## Практические задания
Решение практического задания с формой можно запустить через index.html.

Задание со звездочкой реализовано в файле src/formatDate.js.