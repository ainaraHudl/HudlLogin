import { login_parameters } from '../helpers/login_parameters'
import { LoginPage } from '../pageObject/login.page';
import { LoginWithOrganizationPage } from '../pageObject/loginWithOrganization.page';
import { 
  ROUTE_LOGIN_WITH_SSO_PAGE,
  ROUTE_LOGIN_PAGE 
} from '../helpers/routes' ;
import { 
  ERROR_DISPLAY_SSO,
  LOGIN_WITH_SSO_HEADER 
} from '../helpers/content';

describe('Login with organization tests', () => {

  const loginWithOrganization = new LoginWithOrganizationPage();

  beforeEach(() => {
   const  hudlLogin = new LoginPage()
    hudlLogin.navigateTo(ROUTE_LOGIN_PAGE)
    cy.url()
      .should('equal', ROUTE_LOGIN_PAGE);

    hudlLogin.loginWithOrganization();

    cy.url()
      .should('include', 'https://www.hudl.com/app/auth/login/organization');
    cy.get('h2')
      .contains(LOGIN_WITH_SSO_HEADER);

    loginWithOrganization.loginWithSSOButton()
      .should('be.disabled');

  })

  it('Login with correct email', () => {
    loginWithOrganization.insertOrganizationEmail(login_parameters.email)
      .should('have.value', login_parameters.email);
    loginWithOrganization.loginWithSSOButton()
      .click();
    cy.url()
      .should('include', ROUTE_LOGIN_WITH_SSO_PAGE);

    loginWithOrganization.errorDisplay()
      .contains(ERROR_DISPLAY_SSO); // i'd expect ths to work and login rather than raising an error
  })

  it.skip('Login with incorrect email', () => {
    loginWithOrganization.insertOrganizationEmail('fakeEmail@gmail.com')
    loginWithOrganization.loginWithSSOButton()
      .click();
    cy.url()
      .should('include', 'expectedWebsite'); 
  })

  it('Redirect back to login with email and password', () => {
    loginWithOrganization.loginWithEmailAndPassword()
      .click();
    cy.url()
      .should('include', ROUTE_LOGIN_PAGE);
  })

  it('Go back link', () => {
    loginWithOrganization.goBackLink()
      .click();
    cy.url()
      .should('include', ROUTE_LOGIN_PAGE);
  })
})