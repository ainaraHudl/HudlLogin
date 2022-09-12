
==============
INTRO
==========================

I have decided to use Cypress to do this exercise. I have had some experience with it a few years ago when choosing the technology for my current project. I have tested it with chrome on my current MAC.
In my day to day I develop with WebdriverIO with Selenium (and typescript). 

I have decided to use Cypress for this project because this tool makes it easier than WDIO for sharing and running as WDIO dependencies have to be installed for it to run. Also, I believe Cypress is quite similar to Playwright which was your requirement. I decided not to use PW because I have never worked with it so it would take me time to understand how it works and I may miss the deadline.

The code can be found under : HudlLogin/cypress/e2e/

==============
PAGE OBJECT MODEL
==========================

I have implemented the tests for the login page and other pages. I have tried implementing the Page Object Model method, having:

- Page folder: This will interact with the pages directly i.e. inserting the email. It makes it easier to have a function which I can call instead of repeating the same code across the different test files. Moreover, if the data-qa-id or the id is updated it is easier to update the value in one place rather than in each test. 

- Tests folder: Here is where the cy files are. They use the page files and also perform the comparisons with expected values / errors. 

- helpers folder

+ fields for the different valid login constants are defined:
•	Email: a valid email, if you want to run the tests update this value with your own email
•	Password: a valid password, update this value as well before running the tests with your own password
•	Name: the username that is assigned to the email. Update this value as well before running the tests

+ routes where the different pages' URLs is defined. This is helpful for when we want to check the URL in different places. If the URL is changed then we would only have to change it in one place rather than in multiple places.

+ content, same as above, where headers or error messages are invoked by multiple files, this file makes it easier to keep up to changes

This folder can also be helpful, for example, creating functions that will create API functions against a database, or if we were running the application locally and we had to setup several configurations. 

==============
SELENIUM – GHERKIN
==========================

If I was running this in WebdriverIO with Cucumber, then there would be an extra folder called "feature". Here is where the Gherkin files would exist, i.e

Feature: Login page tests
    As a team
    I want to log into my Hudl account
    So that I can manage the different areas of the website

  Background:
      Given the team navigates to the Hudl page

    Scenario: A user can log in with valid credentials
        When the user inserts valid username and password
        Then the new library page is displayed 

    Scenario: A user will not be able to log in with incorrect credentials
        When the user inserts incorrect password
        Then an error message is displayed

'
The idea would be similar to the one implemented here, a "pageobject" folder for interacting with the different ids and also a "test" folder where the tests would reside, these tests would have some Given-when-then functions that would match the feature files content.

==============
TESTS ENHANCEMENTS 
==========================

login_with_organization.cy.js> 
Login with incorrect email > When running it locally and when in Cypress the website was different (and kept changing) so the test was failing. Therefore I have disabled this step.
If the email does not follow the pattern then a warning is displayed (there is no test for this). 

login.cy.js> Login with correct email > I have used 
cy.get('[class=hui-globaluseritem__display-name]')
      .contains(fields.name)

But it would be good to be able to make fields.name dynamic, maybe by requesting to the database for the user name by providing an email and comparing the displayed value and the one returned by the database.

More case scenarios that I have considered but not implemented:

Login:
1. Insert email but not password
2. Insert password but not email
3. Remember me, I do not know the differences between having it on or not, how long the session would last for but a test should be included for it

==============
OTHER AREAS TO THINK ABOUT
==========================

Things I have thought about but not implemented as they are outside the scope of this excercise:

1. Tests related with Navigation, so navigating back and forward with the browser buttons once logged in. For example, login correctly and then click back and then forward in the browser. 
2. Request a new password. We would need to emulate that the user recives an email with a link to update the password
3. Cross browser testing, I use Browserstack for my current project so for Hudl's project this would be an improvement. I have used Saucelabs as well in my previous project but we barely used it
4. Accessibility testing
5. SQL Injection, eg "select email,password from clients" as username or password 
