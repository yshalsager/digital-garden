---  
title: JavaScript Dates  
aliases:  
  - JavaScript Dates  
created: 2022-06-20 17:22  
updated: 2022-06-21 10:19  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
---  
  
  
المعرفة::[JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert), <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date>  
  
---  
  
## Date Object  
  
- JavaScript **`Date`** objects represent a single moment in time in a platform-independent format. `Date` objects contain a `Number` that represents milliseconds since 1 January 1970 UTC.  
  
## Creating Dates  
  
### Current (now) Date  
  
```js  
const now = new Date();  
console.log(now); // 2022-06-20T15:35:28.535Z  
console.log(Date.now()); // 1655793658342  
```  
  
### From date string  
  
```js  
console.log(new Date("Aug 02 2020 18:05:41")); // 2020-08-02T16:05:41.000Z  
console.log(new Date("December 24, 2015")); // 2015-12-23T22:00:00.000Z  
console.log(new Date("2019-11-01T13:15:33.035Z")); // "2019-11-01T13:15:33.035Z"  
```  
  
### From date and time component values  
  
- Month is zero based.  
- JavaScript auto-corrects wrong month days.  
  
```js  
// new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)  
console.log(new Date(2037, 10, 19, 15, 23, 5)); // 2037-11-19T13:23:05.000Z  
// November is 30 days only  
console.log(new Date(2037, 10, 31)); //2 037-11-30T22:00:00.000Z  
```  
  
### From Unix epoch timestamp  
  
- Value passed here is the number of **milliseconds** since January 1, 1970, 00:00:00 UTC.  
  
```js  
console.log(new Date(0)); // 1970-01-01T00:00:00.000Z  
// 3 days afrer January 1, 1970  
// 3 days * 24 hours * 60 minutes * 60 seconds * 1000 millisecond  
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 1970-01-04T00:00:00.000Z  
```  
  
## Working with dates  
  
- `getFullYear()`: returns the **year** of the specified date according to local time.  
- `getMonth()`: returns the **month** in the specified date according to local time, as a **zero-based** value.  
- `getDate()`: returns the **day of the month** for the specified date according to local time.  
- `getDay()`: returns the **day of the week** for the specified date according to local time, where **0 represents Sunday**.  
- `getHours()`, `getMinutes()`, `getSeconds()`: returns the **hours, minutes, and second** for the specified date, according to local time.  
- `getTime()`: returns the number of milliseconds since the ECMAScript epoch.  
- `toISOString()`: returns a string in simplified extended ISO format (`YYYY-MM-DDTHH:mm:ss.sssZ` or `±YYYYYY-MM-DDTHH:mm:ss.sssZ`)  
- `setFullYear()`, `setMonth()`, `setDate()`, `setMonth()`, `setMinutes()`, `setSeconds()`, `setMilliseconds()`.  
  
```js  
const future = new Date(2037, 10, 19, 15, 23);  
console.log(future); // 2037-11-19T13:23:00.000Z  
console.log(future.getFullYear()); // 2037  
console.log(future.getMonth()); // 10  
console.log(future.getDate()); // 19  
console.log(future.getDay()); // 4  
console.log(future.getHours()); // 15  
console.log(future.getMinutes()); // 23  
console.log(future.getSeconds()); // 0  
console.log(future.toISOString()); // 2037-11-19T13:23:00.000Z  
console.log(future.getTime()); // 2142249780000  
console.log(new Date(2142256980000)); // 2037-11-19T15:23:00.000Z  
future.setFullYear(2040);  
console.log(future); // 2040-11-19T13:23:00.000Z  
```  
  
### Getting now date in DD/MM/YYYY format  
  
```js  
const date = new Date()  
const day = `${date.getDate()}`.padStart(2, 0);  
const month = `${date.getMonth() + 1}`.padStart(2, 0);  
const year = date.getFullYear();  
console.log(`${day}/${month}/${year}`);  
```  
  
## Operations on dates  
  
### Converting a date to number  
  
```js  
const future = new Date(2037, 10, 19, 15, 23);  
console.log(Number(future)); // 2142249780000  
console.log(+future); // 2142249780000  
```  
  
### Calculate days between two dates  
  
- Using `Math.abs` it can deal with any case whether date 1 is later or the opposite.  
- To convert timestamp to days: (1000 milliseconds to seconds * 60 seconds * 60 minutes * 24 hours)  
- For more complex calculations like handling daylight saving changes, we should use a library like [moment.js](https://momentjs.com).  
  
```js  
const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));  
const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));  
console.log(days1); // 10  
```  
  
## Dates Internationalization  
  
- The **`Intl`** object is the namespace for the ECMAScript [Internationalization API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl), which provides language sensitive string comparison, number formatting, and date and time formatting.  
  
### `DateTimeFormat()`  
  
- `Intl.DateTimeFormat` object enables language-sensitive date and time formatting.  
- Locale parameter can be one of any ISO country language codes. [See the list here](http://www.lingoes.net/en/translator/langcode.htm).  
- The date and time formats can be customized using the [options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#syntax) argument.  
  
```js  
const date = new Date(Date.UTC(2020, 11, 20, 3, 23, 16, 738));  
// Specify default date formatting for language (locale)  
console.log(new Intl.DateTimeFormat('en-US').format(date)); // 12/20/2020  
  
const options = {  
  hour: "numeric",  
  minute: "numeric",  
  day: "numeric",  
  month: "long",  
  year: "numeric",  
  // weekday: 'long',  
};  
console.log(new Intl.DateTimeFormat('en-US', options).format(date)); // December 20, 2020, 5:23 AM  
```  
  
### Getting locale from user's browser  
  
- The `Navigator.language` read-only property returns a string representing the preferred language of the user, usually the language of the browser UI.  
  
```js  
const locale = navigator.language;  
console.log(locale);  
```  
