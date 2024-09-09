import { expect, test } from "vitest";
import { isPersianLeapYear, leapYears1210To1498 } from "../src";

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
