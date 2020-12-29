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
    image = await driver.findElement(By.css("img"));
    driver.actions().mouseMove(image).perform();

     await driver.sleep(6000);
  });



  after(() => driver && driver.quit());
});
