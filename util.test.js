//for testing only the file in mock folder and not testing the api itself
// jest.mock("./http");

const { loadTitle } = require("./util");

test("should print uppercase text", () => {
	loadTitle().then((title) => {
		expect(title).toBe("DELECTUS AUT AUTEM");
	});
});
