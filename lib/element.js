const { getBrowserDriver } = require("./share");

class Element {
	constructor(driver, locatorBy) {
		this.driver = driver;
		this.locatorBy = locatorBy;
	}

	async init() {
		this.driver = this.driver || getBrowserDriver;
		this._root = await this.driver.findElement(this.locatorBy);
	}

	async sendKeys(...args) {
		if (this._root) {
			await this._root.sendKeys(...args);
		} else {
			await this.init();
			await this._root.sendKeys(...args);
		}
	}
}

function $() {
	return new Element(null, locatorBy);
}

module.export = { $ };
