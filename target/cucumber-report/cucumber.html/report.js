$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("visaComfiemation.feature");
formatter.feature({
  "line": 1,
  "name": "Visa confirmation test",
  "description": "",
  "id": "visa-confirmation-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "an Australian coming to uk for tourism",
  "description": "",
  "id": "visa-confirmation-test;an-australian-coming-to-uk-for-tourism",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on start page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I select my nationality \"\u003cnationality\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select purpose of trip \"\u003cpurpose\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I see result page",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "visa-confirmation-test;an-australian-coming-to-uk-for-tourism;",
  "rows": [
    {
      "cells": [
        "nationality",
        "purpose"
      ],
      "line": 14,
      "id": "visa-confirmation-test;an-australian-coming-to-uk-for-tourism;;1"
    },
    {
      "cells": [
        "Australia",
        "Tourism"
      ],
      "line": 15,
      "id": "visa-confirmation-test;an-australian-coming-to-uk-for-tourism;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 22091774899,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "an Australian coming to uk for tourism",
  "description": "",
  "id": "visa-confirmation-test;an-australian-coming-to-uk-for-tourism;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on start page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I select my nationality \"Australia\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I select purpose of trip \"Tourism\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I see result page",
  "keyword": "And "
});
formatter.match({
  "location": "StartPageSteps.iAmOnStartPage()"
});
formatter.result({
  "duration": 1329258501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Australia",
      "offset": 25
    }
  ],
  "location": "SelectNationalitySteps.iSelectMyNationality(String)"
});
formatter.result({
  "duration": 416394300,
  "status": "passed"
});
formatter.match({
  "location": "SelectNationalitySteps.iClickOnContinue()"
});
formatter.result({
  "duration": 462608301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tourism",
      "offset": 26
    }
  ],
  "location": "ReasonForTravelSteps.iSelectPurposeOfTrip(String)"
});
formatter.result({
  "duration": 316303399,
  "status": "passed"
});
formatter.match({
  "location": "SelectNationalitySteps.iClickOnContinue()"
});
formatter.result({
  "duration": 307730799,
  "status": "passed"
});
formatter.match({
  "location": "ResultPageSteps.iSeeResultPage()"
});
formatter.result({
  "duration": 20656924301,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[@class\u003d\u0027gem-c-heading gem-c-heading--font-size-27 govuk-!-margin-bottom-6\u0027]\"}\n  (Session info: chrome\u003d96.0.4664.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027HEMAL\u0027, ip: \u0027192.168.0.41\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [614c595098402364ba2476e56190f0e1, findElement {using\u003dxpath, value\u003d//h2[@class\u003d\u0027gem-c-heading gem-c-heading--font-size-27 govuk-!-margin-bottom-6\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\HEMALP~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53687}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53687/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 614c595098402364ba2476e56190f0e1\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat gov.uk.check.visa.pages.ResultPage.getResultMessage(ResultPage.java:25)\r\n\tat gov.uk.check.visa.cucumber.steps.ResultPageSteps.iSeeResultPage(ResultPageSteps.java:10)\r\n\tat ✽.And I see result page(visaComfiemation.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2082660801,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "a Chilean to the uk for work and plan to stay longer than six months",
  "description": "",
  "id": "visa-confirmation-test;a-chilean-to-the-uk-for-work-and-plan-to-stay-longer-than-six-months",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@smoke"
    },
    {
      "line": 17,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on start page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I select my nationality \"\u003cnationality\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select purpose of trip \"\u003cpurpose\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I duration of stay \"\u003cduration\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I clicked continue",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select work type \"\u003cworkType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I clicked on continue in work type page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I see result page",
  "keyword": "And "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "visa-confirmation-test;a-chilean-to-the-uk-for-work-and-plan-to-stay-longer-than-six-months;",
  "rows": [
    {
      "cells": [
        "nationality",
        "purpose",
        "duration",
        "workType"
      ],
      "line": 31,
      "id": "visa-confirmation-test;a-chilean-to-the-uk-for-work-and-plan-to-stay-longer-than-six-months;;1"
    },
    {
      "cells": [
        "Chile",
        "Work, academic visit or business",
        "longer than 6 months",
        "Health and care professional"
      ],
      "line": 32,
      "id": "visa-confirmation-test;a-chilean-to-the-uk-for-work-and-plan-to-stay-longer-than-six-months;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6251174599,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "a Chilean to the uk for work and plan to stay longer than six months",
  "description": "",
  "id": "visa-confirmation-test;a-chilean-to-the-uk-for-work-and-plan-to-stay-longer-than-six-months;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@smoke"
    },
    {
      "line": 17,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on start page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I select my nationality \"Chile\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click on continue",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select purpose of trip \"Work, academic visit or business\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on continue button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I duration of stay \"longer than 6 months\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I clicked continue",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select work type \"Health and care professional\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I clicked on continue in work type page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I see result page",
  "keyword": "And "
});
formatter.match({
  "location": "StartPageSteps.iAmOnStartPage()"
});
formatter.result({
  "duration": 250199500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chile",
      "offset": 25
    }
  ],
  "location": "SelectNationalitySteps.iSelectMyNationality(String)"
});
formatter.result({
  "duration": 129411899,
  "status": "passed"
});
formatter.match({
  "location": "SelectNationalitySteps.iClickOnContinue()"
});
formatter.result({
  "duration": 353886801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Work, academic visit or business",
      "offset": 26
    }
  ],
  "location": "ReasonForTravelSteps.iSelectPurposeOfTrip(String)"
});
formatter.result({
  "duration": 268344400,
  "status": "passed"
});
formatter.match({
  "location": "ReasonForTravelSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 326970099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "longer than 6 months",
      "offset": 20
    }
  ],
  "location": "DurationOfStaySteps.iDurationOfStay(String)"
});
formatter.result({
  "duration": 70974900,
  "status": "passed"
});
formatter.match({
  "location": "DurationOfStaySteps.iClickedContinue()"
});
formatter.result({
  "duration": 19755299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Health and care professional",
      "offset": 20
    }
  ],
  "location": "WorkTypeSteps.iSelectWorkType(String)"
});
formatter.result({
  "duration": 126355100,
  "status": "passed"
});
formatter.match({
  "location": "WorkTypeSteps.iClickedOnContinueInWorkTypePage()"
});
formatter.result({
  "duration": 255446400,
  "status": "passed"
});
formatter.match({
  "location": "ResultPageSteps.iSeeResultPage()"
});
formatter.result({
  "duration": 20402517700,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with locator By.xpath: //h2[@class\u003d\u0027gem-c-heading gem-c-heading--font-size-27 govuk-!-margin-bottom-6\u0027]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027HEMAL\u0027, ip: \u0027192.168.0.41\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat gov.uk.check.visa.pages.ResultPage.getResultMessage(ResultPage.java:25)\r\n\tat gov.uk.check.visa.cucumber.steps.ResultPageSteps.iSeeResultPage(ResultPageSteps.java:10)\r\n\tat ✽.And I see result page(visaComfiemation.feature:28)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 12610127200,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d96.0.4664.93)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027HEMAL\u0027, ip: \u0027192.168.0.41\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c39ca93ee482e085d01ea821426981f6, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\HEMALP~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53711}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:53711/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c39ca93ee482e085d01ea821426981f6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat gov.uk.check.visa.utility.Utility.getScreenshot(Utility.java:335)\r\n\tat gov.uk.check.visa.cucumber.Hooks.tearDown(Hooks.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
});