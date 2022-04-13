const { Browser, $, By, Key, until } = require("../lib");

describe("Example usage", function () {
	const searchGoogleField = $(By.css("body")).$(By.name("q"));
	const browser = new Browser();

	afterEach(async () => {
		await browser.close();
	});

	it("first spec", async function () {
		await browser.get("http://www.google.com/ncr");
		await searchGoogleField.sendKeys("webdriver", Key.RETURN);
		await browser.wait(until.titleIs("webdriver - Поиск в Google"), 10000);
	});
});
