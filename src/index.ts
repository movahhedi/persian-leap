/**
 * Check if a Persian year is a leap year. based on [this Wikipedia page](https://fa.wikipedia.org/wiki/%DA%AF%D8%A7%D9%87%E2%80%8C%D8%B4%D9%85%D8%A7%D8%B1%DB%8C_%D8%B1%D8%B3%D9%85%DB%8C_%D8%A7%DB%8C%D8%B1%D8%A7%D9%86) which references [the official Iranian calendar](https://calendar.ut.ac.ir).
 * @param year The Persian year to check
 * @returns `true` if the year is a leap year, `false` otherwise
 */
export function isPersianLeapYear(year: number): boolean {
	// Step 1: Find the remainder when dividing by 33 (Cycle length)
	const cycleYear = year % 33;

	// Step 2: Identify if the year is a leap year
	// Every 4 years except the last one in a cycle (the 29th, 33rd, and 37th year)
	// If cycleYear is 1, 5, 9, 13, 17, 22, 26, or 30, it's a leap year
	const leapYearsInCycle = [1, 5, 9, 13, 17, 22, 26, 30];

	// Check if the year is in the list of leap years
	return leapYearsInCycle.includes(cycleYear);
}

/**
 * Check if a Persian year is a leap year using the Birashk method. **This method DOES NOT comply with the official Iranian calendar.** You should use the `isPersianLeapYear()` function instead.
 */
function isPersianLeapYearBirashk(year: number): boolean {
	// Rule-based method for years 1244-1342 and 1343-1472
	const remainder33 = year % 33;

	if (year >= 1244 && year <= 1342) {
		return [1, 5, 9, 13, 17, 21, 26, 30].includes(remainder33);
	}

	if (year >= 1343 && year <= 1472) {
		return [1, 5, 9, 13, 17, 22, 26, 30].includes(remainder33);
	}

	// Birashk method for years outside the above ranges
	const remainder128 = year % 128;

	const leapYearRemainders = [
		0, 4, 8, 12, 16, 20, 24, 29, 33, 37, 41, 45, 49, 53, 57, 62, 66, 70, 74, 78, 82, 86, 90, 95, 99, 103, 107, 111, 115,
		119, 124,
	];

	const adjustedLeapYearRemainders = [
		0, 4, 8, 12, 16, 20, 25, 29, 33, 37, 41, 45, 49, 53, 58, 62, 66, 70, 74, 78, 82, 86, 91, 95, 99, 103, 107, 111, 116,
		120, 124,
	];

	if (year >= 1 && year <= 473) {
		return adjustedLeapYearRemainders.includes(remainder128);
	} else {
		return leapYearRemainders.includes(remainder128);
	}
}

/**
 * Get the number of days in a Persian month.
 * @param year The Persian year, to check if it's a leap year
 * @param month The Persian month (1-12)
 * @returns The number of days in the month
 */
export function getDaysInPersianMonth(year: number, month: number): number {
	// Days in each month in a non-leap year
	const daysInMonth = [
		31, // Farvardin
		31, // Ordibehesht
		31, // Khordad
		31, // Tir
		31, // Mordad
		31, // Shahrivar
		30, // Mehr
		30, // Aban
		30, // Azar
		30, // Dey
		30, // Bahman
		29, // Esfand
	];

	// If the month is Esfand and the year is a leap year, return 30
	if (month === 12 && isPersianLeapYear(year)) {
		return 30;
	}

	// Otherwise, return the number of days in the month
	return daysInMonth[month - 1];
}

/**
 * Leap years in the official Iranian calendar from 1210 to 1498.
 * From [Wikipedia](https://fa.wikipedia.org/wiki/%DA%AF%D8%A7%D9%87%E2%80%8C%D8%B4%D9%85%D8%A7%D8%B1%DB%8C_%D8%B1%D8%B3%D9%85%DB%8C_%D8%A7%DB%8C%D8%B1%D8%A7%D9%86).
 * Time.ir also returns the same results.
 */
export const leapYears1210To1498 = [
	1210, 1214, 1218, 1222, 1226, 1230, 1234, 1238,
	// (33ساله),
	1243, 1247, 1251, 1255, 1259, 1263, 1267, 1271,
	// (33ساله),
	1276, 1280, 1284, 1288, 1292, 1296, 1300, 1304,
	// (33ساله),
	1309, 1313, 1317, 1321, 1325, 1329, 1333, 1337,
	// (33ساله),
	1342, 1346, 1350, 1354, 1358, 1362, 1366, 1370,
	// (33ساله),
	1375, 1379, 1383, 1387, 1391, 1395, 1399, 1403,
	// (33ساله),
	1408, 1412, 1416, 1420, 1424, 1428, 1432, 1436,
	// (33ساله),
	1441, 1445, 1449, 1453, 1457, 1461, 1465, 1469,
	// (33ساله),
	1474, 1478, 1482, 1486, 1490, 1494, 1498,
];
