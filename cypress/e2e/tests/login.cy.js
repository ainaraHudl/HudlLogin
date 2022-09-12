import {login_parameters} from '../helpers/login_parameters'
import { LoginPage } from '../pageObject/login.page';
import { RegisteredPage } from '../pageObject/registered.page';
import { 
  ROUTE_LOGIN_PAGE,
  ROUTE_REGISTERED_PAGE,
} from '../helpers/routes' ;
import { ERROR_DISPLAY } from '../helpers/content';

describe('Login with organization tests', () => {

  const login = new LoginPage();

  beforeEach(() => {
    login.navigateTo(ROUTE_LOGIN_PAGE);
    cy.url()
      .should('equal', ROUTE_LOGIN_PAGE);
  })

  it('Right email and password provided', () => {
    login.insertEmail(login_parameters.email)
      .should('have.value', login_parameters.email)
    login.insertPassword(login_parameters.password)
      .should('have.value', login_parameters.password)
    login.loginButton()
      .click();

    cy.url()
      .should('include', ROUTE_REGISTERED_PAGE);
    const registeredPage = new RegisteredPage();
    registeredPage.username()
      .contains(login_parameters.username)
  })

  it('Wrong email and password provided', () => {
    login.insertEmail('fake@gmail.com');
    login.insertPassword('123');
    login.loginButton()
      .click();
    login.errorDisplay()
      .contains(ERROR_DISPLAY);   
  })

  it('Wrong password provided', () => {
    login.insertEmail(login_parameters.email)
    login.insertPassword('123')
    login.loginButton()
      .click();
    login.errorDisplay()
      .contains(ERROR_DISPLAY);
  })

  it('Empty email and password provided', () => {
    login.loginButton()
      .click();
    login.errorDisplay()
      .contains(ERROR_DISPLAY);   
  })  

  it('Not email format provided', () => {
    login.insertEmail('fakeEmailgmail.com')
    login.insertPassword('123')
    login.loginButton()
      .click();
    login.errorDisplay()
      .contains(ERROR_DISPLAY);
  })
})