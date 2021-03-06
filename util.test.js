const { loadTitle } = require("./util");

test("should print uppercase text", () => {
	loadTitle().then((title) => {
		expect(title).toBe("DELECTUS AUT AUTEM");
	});
});
