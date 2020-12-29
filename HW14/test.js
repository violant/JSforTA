require("chromedriver");
const assert = require("chai");
const { Builder, Key, By, until } = require("selenium-webdriver");
describe("HW14-Selenium part1", function () {
  let driver;
  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });
  it("Стан активності елемента", async function () {
    await driver.get("http://the-internet.herokuapp.com/dropdown");
    dropdown = await driver.findElement(By.id("dropdown"));
    dropdown.click();
    dropdown.findElements(By.css("option")).then((options) => {
      assert.equal(
        options[0].getAttribute("disabled"),
        "disabled",
        "1st option is not disabled"
      );
      assert.equal(
        options[1].getAttribute("disabled"),
        null,
        "2nd option is disabled"
      );
    });
  });

  it("Наведення мишою на елемент", async function () {
    await driver.get("http://the-internet.herokuapp.com/hovers");
    let image = await driver.findElement(By.css("div.figure > img"));
    await driver.actions().move({ origin: image, duration: 1000 }).perform();
    let name = image.findElement(By.css("h5"));
    name.getText().then(function (text) {
      assert.equal(text, "name: user1", "text is not name: user1 under img");
    });
  });

  it("Заповнення форми", async function () {
    await driver.get("http://formy-project.herokuapp.com/form");
    await driver.findElement(By.id("first-name")).sendKeys("Peter");
    await driver.findElement(By.id("last-name")).sendKeys("Peterson");
    await driver.findElement(By.id("job-title")).sendKeys("tester");
    await driver.findElement(By.id("radio-button-1")).click();
    await driver.findElement(By.id("checkbox-1")).click();
    await driver
      .findElement(By.css("#select-menu > option:nth-child(3)"))
      .click();
    await driver.findElement(By.id("datepicker")).sendKeys("12/12/2020");
    await driver.findElement(By.css(".btn.btn-lg.btn-primary")).click();

    let testStatusElem = await driver.wait(
      until.elementLocated(By.css(".alert.alert-success")),
      5000
    );
    testStatusElem.getText().then(function (text) {
      assert.equal(text, "The form was successfully submitted!");
    });

    await driver.sleep(6000);
  });

  it("Сортування таблиці", async function () {
    await driver.get("http://the-internet.herokuapp.com/tables");

    let image = await driver.findElement(By.css("div.figure > img"));
    await driver.actions().move({ origin: image, duration: 1000 }).perform();
    let name = image.findElement(By.css("h5"));
    name.getText().then(function (text) {
      assert.equal(text, "name: user1", "text is not name: user1 under img");
    });
  });

  after(() => driver && driver.quit());
});
