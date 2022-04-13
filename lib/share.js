let browser = null;

function setBrowserDriver(driver) {
	browserDriver = driver;
}

function getBrowserDriver() {
	return browserDriver;
}

module.export = {
	setBrowserDriver,
	getBrowserDriver,
};
