const { Builder, By, Key, until } = require("selenium-webdriver");

class Browser {
	constructor() {}
	async init() {
		this.driver = await new Builder()
			.usingServer("http://localhost:4444/wd/hub")
			.forBrowser("chrome")
			.build();
	}
	async get(url) {
		if (this.driver) {
			await this.driver.get(url);
		} else {
			await this.init();
			await this.driver.get(url);
		}
	}
}

module.export = {
	Browser
};

// (async function example() {
// 	let driver = await new Builder()
// 		.usingServer("http://localhost:4444/wd/hub")
// 		.forBrowser("chrome")
// 		.build();
// 	try {
// 		await driver.get("http://www.google.com/ncr");
// 		await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
// 		await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
// 	} finally {
// 		await driver.quit();
// 	}
// })();
