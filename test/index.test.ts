import { expect, test } from "vitest";
import { isPersianLeapYear } from "../src";

/**
 * From [Wikipedia](https://fa.wikipedia.org/wiki/%DA%AF%D8%A7%D9%87%E2%80%8C%D8%B4%D9%85%D8%A7%D8%B1%DB%8C_%D8%B1%D8%B3%D9%85%DB%8C_%D8%A7%DB%8C%D8%B1%D8%A7%D9%86).
 * Time.ir also returns the same results.
 */
const correctLeapYears = [
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
	TestWithReferenceYears(correctLeapYears);
});
