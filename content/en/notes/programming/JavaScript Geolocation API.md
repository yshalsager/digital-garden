---  
title: JavaScript Geolocation API  
created: 2022-08-03 08:44  
updated: 2022-08-03 08:47  
aliases:  
  - JavaScript Geolocation API  
share: true  
website: en/notes/programming  
tags:  
  - ملاحظة_مؤرشفة  
  - JavaScript  
---  
  
  
  
المعرفة:: [JavaScript](JavaScript)  
الحالة:: #ملاحظة_مؤرشفة  
المراجع:: [The Complete JavaScript Course 2022 From Zero to Expert](The%20Complete%20JavaScript%20Course%202022%20From%20Zero%20to%20Expert), <https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API>, <https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition>  
  
---  
  
- The Geolocation API allows the user to provide their location to web applications if they so desire.  
  
## getCurrentPosition()  
  
- `Geolocation.getCurrentPosition()`: Retrieves the device's current location.  
- It takes two parameters, a callback function to run on success and another one on failure. ^getCurrentPositionParameters  
- The success callback function takes a GeolocationPosition object as its sole input parameter.  
  
```js  
if (navigator.geolocation) {  
  navigator.geolocation.getCurrentPosition(  
    function (position) {  
      const { latitude } = position.coords;  
      const { longitude } = position.coords;  
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);  
    },  
    function () { alert('Could not get your position') });  
}  
  
/*  
GeolocationPosition {coords: GeolocationCoordinates, timestamp: 1659510336804}  
coords: GeolocationCoordinates {latitude: xxxx, longitude: xxxxx, altitude: null, accuracy: 1, altitudeAccuracy: null, …}  
timestamp: 1659510336804  
[](Prototype): GeolocationPosition  
*/  
```  
