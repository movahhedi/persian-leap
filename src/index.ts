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