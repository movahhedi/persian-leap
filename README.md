# Persian Leap Year

A simple library to check if a Persian year is a leap year or not.

Based on [this Wikipedia page](https://fa.wikipedia.org/wiki/%DA%AF%D8%A7%D9%87%E2%80%8C%D8%B4%D9%85%D8%A7%D8%B1%DB%8C_%D8%B1%D8%B3%D9%85%DB%8C_%D8%A7%DB%8C%D8%B1%D8%A7%D9%86) which references [the official Iranian calendar](https://calendar.ut.ac.ir).

## Installation
Install it via [npm](https://www.npmjs.com/package/persian-leap):
```bash
npm install persian-leap
```
Or yarn:
```bash
yarn add persian-leap
```
Or pnpm:
```bash
pnpm add persian-leap
```

## Usage
```javascript
import { isPersianLeapYear } from "persian-leap";

console.log(isPersianLeapYear(1403)); // true
console.log(isPersianLeapYear(1404)); // false
```
