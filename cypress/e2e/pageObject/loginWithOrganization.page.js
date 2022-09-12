export class LoginWithOrganizationPage {

    insertOrganizationEmail(emailAddress){
        return cy.get('[id=uniId_1]')
        .type(emailAddress)
    }

    loginWithSSOButton(){
       return cy.get('[data-qa-id="log-in-with-sso"]');
    }

    errorDisplay(){
        return cy.get('[data-qa-id="error-display"]')
    }

    loginWithEmailAndPassword() {
        return cy.get('[data-qa-id="log-in-with-email-and-password"]')
    }

    goBackLink() {
        return cy.get('[data-qa-id="go-back"]')
    }
}
