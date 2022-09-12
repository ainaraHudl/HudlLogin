import { LoginPage } from '../pageObject/login.page';
import { 
  ROUTE_LOGIN_PAGE,
  ROUTE_HELP_PAGE,
  ROUTE_INITIAL_LANDING_PAGE,
  ROUTE_SIGN_UP,
} from '../helpers/routes' ;
import { LOGIN_HELP} from '../helpers/content';

describe('Other items in the website', () => {

  const login = new LoginPage();

  beforeEach(() => {
    login.navigateTo(ROUTE_LOGIN_PAGE);
    cy.url()
      .should('equal', ROUTE_LOGIN_PAGE);
  })

  it('Need help', () => {
    login.needHelp()
      .click()
    cy.url()
      .should('equal', ROUTE_HELP_PAGE);
    cy.get('[data-qa-id="login-help-headline"]')
      .contains(LOGIN_HELP)
  })

  it('Logo', () => {
    login.logo()
      .click()
    cy.url().should('equal', ROUTE_INITIAL_LANDING_PAGE);
  })

  it('Go back link', () => {
    login.goBackLink()
      .click();
    cy.url().should('equal', ROUTE_INITIAL_LANDING_PAGE);
  })

  it('Sign up link', () => {
    login.signUp()
      .click();
    cy.url().should('equal', ROUTE_SIGN_UP);
  })
  
})
