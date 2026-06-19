import { expect, test } from "vitest";
import { isPersianLeapYear, leapYears1210To1498, isPersianDateValid } from "../src/index.js";

function TestWithReferenceYears(referenceYears: number[]) {
	for (let year = referenceYears[0]; year <= referenceYears[referenceYears.length - 1]; year++) {
		const isLeapYear = isPersianLeapYear(year);
		const expected = referenceYears.includes(year);

		if (isLeapYear !== expected) {
			console.error(`isPersianLeapYear(${year}) = \`${isLeapYear}\` but expected \`${expected}\``);
		}

		expect(isLeapYear).toBe(expected);
	}
}

test("check leap years from Wikipedia", async () => {
	TestWithReferenceYears(leapYears1210To1498);
});

// test isPersianDateValid
test("check isPersianDateValid", async () => {
	expect(isPersianDateValid(1399, 0, 1)).toBe(false);
	expect(isPersianDateValid(1399, 1, 1)).toBe(true);
	expect(isPersianDateValid(1399, 6, 31)).toBe(true);
	expect(isPersianDateValid(1399, 7, 31)).toBe(false);
	expect(isPersianDateValid(1399, 8, 30)).toBe(true);
	expect(isPersianDateValid(1399, 8, 31)).toBe(false);
	expect(isPersianDateValid(1399, 9, 30)).toBe(true);
	expect(isPersianDateValid(1399, 9, 31)).toBe(false);
	expect(isPersianDateValid(1399, 10, 30)).toBe(true);
	expect(isPersianDateValid(1399, 10, 31)).toBe(false);
	expect(isPersianDateValid(1399, 11, 29)).toBe(true);
	expect(isPersianDateValid(1399, 11, 30)).toBe(true);
	expect(isPersianDateValid(1399, 12, 29)).toBe(true);
	expect(isPersianDateValid(1399, 12, 30)).toBe(true);
	expect(isPersianDateValid(1399, 12, 31)).toBe(false);
	expect(isPersianDateValid(1399, 13, 1)).toBe(false);
});
