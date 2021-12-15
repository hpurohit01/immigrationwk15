package gov.uk.check.visa.pages;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import javax.swing.text.Utilities;
import java.util.List;

import static gov.uk.check.visa.drivermanager.ManageDrive.driver;

public class DurationOfStayPage extends Utilities {

    private static final Logger log = LogManager.getLogger(DurationOfStayPage.class.getName());

    public DurationOfStayPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//div[@class='govuk-radios']//div//label")   //div[@class='govuk-radios']//label
    List<WebElement> durationOfstayRadios;

    @CacheLookup
    @FindBy(xpath = "//button[contains(text(),'Continue')]")
    WebElement continueButton;

    @CacheLookup
    @FindBy(xpath = "//div[@class='govuk-radios']//label[contains(text(),'6 months or less')]")
    WebElement sixMonthsOrLessRadio;

    @CacheLookup
    @FindBy(xpath = "//div[@class='govuk-radios']//label[contains(text(),'longer than 6 months')]")
    WebElement longerThanSixMonthsRadio;


    public void selectDurationOfStayBySwitch(String stay) {
        switch (stay){
            case "6 months or less":

                clickOnElement(sixMonthsOrLessRadio);
                log.info("selecting duration of stay : " +sixMonthsOrLessRadio.toString());
                break;
            case  "longer than 6 months" :

              clickOnElement(longerThanSixMonthsRadio);
                log.info("selecting duration of stay : " +longerThanSixMonthsRadio.toString());
                break;

        }

    }

    private void clickOnElement(WebElement sixMonthsOrLessRadio) {
    }

    public void selectDurationOfStay(String durationOfStay) {
        for (WebElement duration : durationOfstayRadios) {
            if (duration.getText().equalsIgnoreCase(durationOfStay)) {
                duration.click();
                log.info("selecting duration of stay : " +durationOfstayRadios.toString());
                break;
            }
        }
    }

    public void clickNextStepButton() {
        clickOnElement(continueButton);
        log.info("selecting continue : " +continueButton.toString());
    }


}
