async function FetchFromTimeIr(year: number) {
	const response = await fetch("https://api.time.ir/v1/time/fa/time/convertdate", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			// They hard coded api key in the web app so it's not a secret
			"X-API-KEY": "ZAVdqwuySASubByCed5KYuYMzb9uB2f7",
			// "X-API-KEY": "97qVHZFLxxyQajE8cZhUMmgxQSZF259e",
		},
		body: JSON.stringify({
			current_base: 0,
			year: year,
			month: 1,
			day: 1,
		}),
	})
		.then((response) => response.json());

	return response;
}

function isResponseLeapYear(response: any) {
	return response.data.date_list[0].is_leap_year;
}

const leapYears = [];

for (let year = 1300; year <= 1415; year++) {
	await (FetchFromTimeIr(year).then((response) => {
		const isLeapYear = isResponseLeapYear(response);
		if (isLeapYear) {
			leapYears.push(year);
			console.log(year, isLeapYear);
		}
	}));
}

console.log(leapYears);
