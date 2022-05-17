$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateAccountPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "CreateAccountPageTest",
  "description": "As User I want to create an account in automation website",
  "id": "createaccountpagetest",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8674997300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "verify that user should create account successfully",
  "description": "",
  "id": "createaccountpagetest;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity,"
    },
    {
      "line": 4,
      "name": "@regression,"
    },
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter email address \"bbkhbn3@gmail.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I click on create and account button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I fill all mandetory fields \"Ram\",\"Patel\",\"Ram41256\",\"ram\",\"Patel\",\"54 stocklake\",\"london\",\"california\",\"90936\",\"07404567456\",\"House\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I can see my account",
  "keyword": "And "
});
formatter.match({
  "location": "SignInPageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 162205800,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTestSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1898971600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bbkhbn3@gmail.com",
      "offset": 23
    }
  ],
  "location": "CreateAccountPageTest.iEnterEmailAddress(String)"
});
formatter.result({
  "duration": 173387800,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountPageTest.iClickOnCreateAndAccountButton()"
});
formatter.result({
  "duration": 107435400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ram",
      "offset": 29
    },
    {
      "val": "Patel",
      "offset": 35
    },
    {
      "val": "Ram41256",
      "offset": 43
    },
    {
      "val": "ram",
      "offset": 54
    },
    {
      "val": "Patel",
      "offset": 60
    },
    {
      "val": "54 stocklake",
      "offset": 68
    },
    {
      "val": "london",
      "offset": 83
    },
    {
      "val": "california",
      "offset": 92
    },
    {
      "val": "90936",
      "offset": 105
    },
    {
      "val": "07404567456",
      "offset": 113
    },
    {
      "val": "House",
      "offset": 127
    }
  ],
  "location": "CreateAccountPageTest.iFillAllMandetoryFields(String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 3320558500,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountPageTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 1581298600,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountPageTest.iCanSeeMyAccount()"
});
formatter.result({
  "duration": 39805600,
  "status": "passed"
});
formatter.after({
  "duration": 821062300,
  "status": "passed"
});
formatter.uri("SignInPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "SignPageTest",
  "description": "As user I Should Navigate To SignIn Page SuccessFully",
  "id": "signpagetest",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4895890600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "signpagetest;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity,"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I can see \"AUTHENTICATION\" message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 22500,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTestSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1826293000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AUTHENTICATION",
      "offset": 11
    }
  ],
  "location": "SignInPageTestSteps.iCanSeeMessageIsDisplayed(String)"
});
formatter.result({
  "duration": 33278800,
  "status": "passed"
});
formatter.after({
  "duration": 768002500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify the Error Message With InValid Credentials",
  "description": "",
  "id": "signpagetest;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@sanity,"
    },
    {
      "line": 10,
      "name": "@smoke,"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter the password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click On signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Error Message \"\u003cerrormsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "signpagetest;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errormsg"
      ],
      "line": 19,
      "id": "signpagetest;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 20,
      "id": "signpagetest;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 21,
      "id": "signpagetest;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 22,
      "id": "signpagetest;verify-the-error-message-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 23,
      "id": "signpagetest;verify-the-error-message-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4543228200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify the Error Message With InValid Credentials",
  "description": "",
  "id": "signpagetest;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@sanity,"
    },
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@smoke,"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter the username\"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter the password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click On signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Error Message \"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 17600,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTestSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1275531300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 21
    }
  ],
  "location": "SignInPageTestSteps.iEnterTheUsername(String)"
});
formatter.result({
  "duration": 125353300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 22
    }
  ],
  "location": "SignInPageTestSteps.iEnterThePassword(String)"
});
formatter.result({
  "duration": 197339100,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTestSteps.iClickOnSigninButton()"
});
formatter.result({
  "duration": 2192097500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 28
    }
  ],
  "location": "SignInPageTestSteps.iVerifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 46582400,
  "status": "passed"
});
formatter.after({
  "duration": 799757500,
  "status": "passed"
});
formatter.before({
  "duration": 5406240500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify the Error Message With InValid Credentials",
  "description": "",
  "id": "signpagetest;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@sanity,"
    },
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@smoke,"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter the username\"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter the password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click On signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Error Message \"Password is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 39100,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTestSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1632389900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 21
    }
  ],
  "location": "SignInPageTestSteps.iEnterTheUsername(String)"
});
formatter.result({
  "duration": 150961900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 22
    }
  ],
  "location": "SignInPageTestSteps.iEnterThePassword(String)"
});
formatter.result({
  "duration": 112449500,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTestSteps.iClickOnSigninButton()"
});
formatter.result({
  "duration": 873304500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 28
    }
  ],
  "location": "SignInPageTestSteps.iVerifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 29400100,
  "status": "passed"
});
formatter.after({
  "duration": 736957700,
  "status": "passed"
});
formatter.before({
  "duration": 4210245600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify the Error Message With InValid Credentials",
  "description": "",
  "id": "signpagetest;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@sanity,"
    },
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@smoke,"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter the username\"adfdfgfg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter the password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click On signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Error Message \"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 38500,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTestSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2124273400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 21
    }
  ],
  "location": "SignInPageTestSteps.iEnterTheUsername(String)"
});
formatter.result({
  "duration": 89360700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 22
    }
  ],
  "location": "SignInPageTestSteps.iEnterThePassword(String)"
});
formatter.result({
  "duration": 94301100,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTestSteps.iClickOnSigninButton()"
});
formatter.result({
  "duration": 838948200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 28
    }
  ],
  "location": "SignInPageTestSteps.iVerifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 50628000,
  "status": "passed"
});
formatter.after({
  "duration": 784726000,
  "status": "passed"
});
formatter.before({
  "duration": 4645517900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify the Error Message With InValid Credentials",
  "description": "",
  "id": "signpagetest;verify-the-error-message-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@sanity,"
    },
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@smoke,"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter the username\"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter the password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click On signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Error Message \"Authentication failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 109200,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTestSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1729230000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 21
    }
  ],
  "location": "SignInPageTestSteps.iEnterTheUsername(String)"
});
formatter.result({
  "duration": 103461700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 22
    }
  ],
  "location": "SignInPageTestSteps.iEnterThePassword(String)"
});
formatter.result({
  "duration": 113887700,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTestSteps.iClickOnSigninButton()"
});
formatter.result({
  "duration": 1059693500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 28
    }
  ],
  "location": "SignInPageTestSteps.iVerifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 47535700,
  "status": "passed"
});
formatter.after({
  "duration": 780553500,
  "status": "passed"
});
formatter.before({
  "duration": 4460180100,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify That User Should LogIn SuccessFully With Valid Credentials",
  "description": "",
  "id": "signpagetest;verify-that-user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@smoke,"
    },
    {
      "line": 25,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter the username\"prime256@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter the password \"Prime456\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click On signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Verify that Sign out link is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 27500,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTestSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2323218800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime256@gmail.com",
      "offset": 21
    }
  ],
  "location": "SignInPageTestSteps.iEnterTheUsername(String)"
});
formatter.result({
  "duration": 92319900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime456",
      "offset": 22
    }
  ],
  "location": "SignInPageTestSteps.iEnterThePassword(String)"
});
formatter.result({
  "duration": 149386400,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTestSteps.iClickOnSigninButton()"
});
formatter.result({
  "duration": 3289179600,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTestSteps.iVerifyThatSignOutLinkIsDisplayed()"
});
formatter.result({
  "duration": 77163400,
  "status": "passed"
});
formatter.after({
  "duration": 786268000,
  "status": "passed"
});
formatter.before({
  "duration": 4429528200,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "verify That User Should LogOut SuccessFully",
  "description": "",
  "id": "signpagetest;verify-that-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@smoke,"
    },
    {
      "line": 34,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I enter the username\"prime256@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter the password \"Prime456\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click On signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on Sign out Link",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I Verify that Sign In Link displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 32300,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTestSteps.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1365229800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "prime256@gmail.com",
      "offset": 21
    }
  ],
  "location": "SignInPageTestSteps.iEnterTheUsername(String)"
});
formatter.result({
  "duration": 131041100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Prime456",
      "offset": 22
    }
  ],
  "location": "SignInPageTestSteps.iEnterThePassword(String)"
});
formatter.result({
  "duration": 149063000,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTestSteps.iClickOnSigninButton()"
});
formatter.result({
  "duration": 1537088400,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTestSteps.iClickOnSignOutLink()"
});
formatter.result({
  "duration": 2697874900,
  "status": "passed"
});
formatter.match({
  "location": "SignInPageTestSteps.iVerifyThatSignInLinkDisplayed()"
});
formatter.result({
  "duration": 64987600,
  "status": "passed"
});
formatter.after({
  "duration": 739958400,
  "status": "passed"
});
formatter.uri("WomenCategoryPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "WomenCategoryPageTest",
  "description": "As User I am able to use all functionality of the women category page",
  "id": "womencategorypagetest",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4260313600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "verify user should navigate to women category page successfully",
  "description": "",
  "id": "womencategorypagetest;verify-user-should-navigate-to-women-category-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity,"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I can see Women Page display with message WOMEN",
  "keyword": "Then "
});
formatter.match({
  "location": "SignInPageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 55000,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 1692452700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iCanSeeWomenPageDisplayWithMessageWOMEN()"
});
formatter.result({
  "duration": 29436500,
  "status": "passed"
});
formatter.after({
  "duration": 741901400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "verifyUserShouldAddProductToTheCartSuccessfully",
  "description": "",
  "id": "womencategorypagetest;verifyusershouldaddproducttothecartsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on women tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I can click on product \"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I can change the Quantity \"\u003cquantity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can select the size \"\u003csize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can select the colour \"\u003ccolour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I can verify Product successfully added to your cart \"\u003cProduct successfully added to your shopping cart\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I can click on X button",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "womencategorypagetest;verifyusershouldaddproducttothecartsuccessfully;",
  "rows": [
    {
      "cells": [
        "product",
        "quantity",
        "size",
        "colour"
      ],
      "line": 24,
      "id": "womencategorypagetest;verifyusershouldaddproducttothecartsuccessfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 25,
      "id": "womencategorypagetest;verifyusershouldaddproducttothecartsuccessfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 26,
      "id": "womencategorypagetest;verifyusershouldaddproducttothecartsuccessfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 27,
      "id": "womencategorypagetest;verifyusershouldaddproducttothecartsuccessfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress with Price $28.98",
        "2",
        "M",
        "Blue"
      ],
      "line": 28,
      "id": "womencategorypagetest;verifyusershouldaddproducttothecartsuccessfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5018571400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "verifyUserShouldAddProductToTheCartSuccessfully",
  "description": "",
  "id": "womencategorypagetest;verifyusershouldaddproducttothecartsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on women tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I can click on product \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I can change the Quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can select the size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can select the colour \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I can verify Product successfully added to your cart \"\u003cProduct successfully added to your shopping cart\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I can click on X button",
  "keyword": "And "
});
formatter.match({
  "location": "SignInPageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 27500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 2078116900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 1520437700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 24
    }
  ],
  "location": "WomenCategoryPageSteps.iCanClickOnProduct(String)"
});
formatter.result({
  "duration": 1532447900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 27
    }
  ],
  "location": "WomenCategoryPageSteps.iCanChangeTheQuantity(String)"
});
formatter.result({
  "duration": 117669200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 23
    }
  ],
  "location": "WomenCategoryPageSteps.iCanSelectTheSize(String)"
});
formatter.result({
  "duration": 135932700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 25
    }
  ],
  "location": "WomenCategoryPageSteps.iCanSelectTheColour(String)"
});
formatter.result({
  "duration": 90486500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iCanClickOnAddToCartButton()"
});
formatter.result({
  "duration": 110506000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cProduct successfully added to your shopping cart\u003e",
      "offset": 54
    }
  ],
  "location": "WomenCategoryPageSteps.iCanVerifyProductSuccessfullyAddedToYourCart(String)"
});
formatter.result({
  "duration": 79998100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iCanClickOnXButton()"
});
formatter.result({
  "duration": 800267200,
  "status": "passed"
});
formatter.after({
  "duration": 833314200,
  "status": "passed"
});
formatter.before({
  "duration": 4694285800,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "verifyUserShouldAddProductToTheCartSuccessfully",
  "description": "",
  "id": "womencategorypagetest;verifyusershouldaddproducttothecartsuccessfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on women tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I can click on product \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I can change the Quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can select the size \"L\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can select the colour \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I can verify Product successfully added to your cart \"\u003cProduct successfully added to your shopping cart\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I can click on X button",
  "keyword": "And "
});
formatter.match({
  "location": "SignInPageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 55300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 1636231700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 1707263300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 24
    }
  ],
  "location": "WomenCategoryPageSteps.iCanClickOnProduct(String)"
});
formatter.result({
  "duration": 1362026700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 27
    }
  ],
  "location": "WomenCategoryPageSteps.iCanChangeTheQuantity(String)"
});
formatter.result({
  "duration": 208377500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 23
    }
  ],
  "location": "WomenCategoryPageSteps.iCanSelectTheSize(String)"
});
formatter.result({
  "duration": 101624200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 25
    }
  ],
  "location": "WomenCategoryPageSteps.iCanSelectTheColour(String)"
});
formatter.result({
  "duration": 107237800,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iCanClickOnAddToCartButton()"
});
formatter.result({
  "duration": 105088700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cProduct successfully added to your shopping cart\u003e",
      "offset": 54
    }
  ],
  "location": "WomenCategoryPageSteps.iCanVerifyProductSuccessfullyAddedToYourCart(String)"
});
formatter.result({
  "duration": 28969300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iCanClickOnXButton()"
});
formatter.result({
  "duration": 815728500,
  "status": "passed"
});
formatter.after({
  "duration": 783778600,
  "status": "passed"
});
formatter.before({
  "duration": 4517417500,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "verifyUserShouldAddProductToTheCartSuccessfully",
  "description": "",
  "id": "womencategorypagetest;verifyusershouldaddproducttothecartsuccessfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on women tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I can click on product \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I can change the Quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can select the size \"S\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can select the colour \"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I can verify Product successfully added to your cart \"\u003cProduct successfully added to your shopping cart\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I can click on X button",
  "keyword": "And "
});
formatter.match({
  "location": "SignInPageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 39700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 1634622000,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 2347276700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 24
    }
  ],
  "location": "WomenCategoryPageSteps.iCanClickOnProduct(String)"
});
formatter.result({
  "duration": 1914612200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 27
    }
  ],
  "location": "WomenCategoryPageSteps.iCanChangeTheQuantity(String)"
});
formatter.result({
  "duration": 256214000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 23
    }
  ],
  "location": "WomenCategoryPageSteps.iCanSelectTheSize(String)"
});
formatter.result({
  "duration": 86982500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 25
    }
  ],
  "location": "WomenCategoryPageSteps.iCanSelectTheColour(String)"
});
formatter.result({
  "duration": 104286700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iCanClickOnAddToCartButton()"
});
formatter.result({
  "duration": 96523500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cProduct successfully added to your shopping cart\u003e",
      "offset": 54
    }
  ],
  "location": "WomenCategoryPageSteps.iCanVerifyProductSuccessfullyAddedToYourCart(String)"
});
formatter.result({
  "duration": 105044600,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iCanClickOnXButton()"
});
formatter.result({
  "duration": 903663900,
  "status": "passed"
});
formatter.after({
  "duration": 1009633600,
  "status": "passed"
});
formatter.before({
  "duration": 4798219500,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "verifyUserShouldAddProductToTheCartSuccessfully",
  "description": "",
  "id": "womencategorypagetest;verifyusershouldaddproducttothecartsuccessfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on women tab",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I can click on product \"Printed Summer Dress with Price $28.98\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I can change the Quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can select the size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can select the colour \"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I can verify Product successfully added to your cart \"\u003cProduct successfully added to your shopping cart\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I can click on X button",
  "keyword": "And "
});
formatter.match({
  "location": "SignInPageTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 64900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 1774067900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iClickOnWomenTab()"
});
formatter.result({
  "duration": 2111930700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress with Price $28.98",
      "offset": 24
    }
  ],
  "location": "WomenCategoryPageSteps.iCanClickOnProduct(String)"
});
formatter.result({
  "duration": 1243683000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 27
    }
  ],
  "location": "WomenCategoryPageSteps.iCanChangeTheQuantity(String)"
});
formatter.result({
  "duration": 213652000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 23
    }
  ],
  "location": "WomenCategoryPageSteps.iCanSelectTheSize(String)"
});
formatter.result({
  "duration": 151672800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 25
    }
  ],
  "location": "WomenCategoryPageSteps.iCanSelectTheColour(String)"
});
formatter.result({
  "duration": 147799000,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iCanClickOnAddToCartButton()"
});
formatter.result({
  "duration": 127869600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cProduct successfully added to your shopping cart\u003e",
      "offset": 54
    }
  ],
  "location": "WomenCategoryPageSteps.iCanVerifyProductSuccessfullyAddedToYourCart(String)"
});
formatter.result({
  "duration": 174913500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageSteps.iCanClickOnXButton()"
});
formatter.result({
  "duration": 511096100,
  "status": "passed"
});
formatter.after({
  "duration": 1110289300,
  "status": "passed"
});
});