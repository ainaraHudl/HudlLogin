export class LoginPage {

    navigateTo(url){ 
        return cy.visit(url);
    }

    insertEmail(emailAddress){
        return cy.get('[id=email]')
            .clear()
            .type(emailAddress)        
    }

    insertPassword(passwordAddress){
        return cy.get('[id=password]')
            .clear()
            .type(passwordAddress)
            
    }

    loginButton(){
        return cy.get('[id^=logIn]');
    }

    loginWithOrganization() {
        return cy.get('[data-qa-id="log-in-with-organization-btn"]').click()
    }

    errorDisplay(){
        return cy.get('[data-qa-id="error-display"]')     
    }

    needHelp() {
        return cy.get('[data-qa-id="need-help-link"]');
    }

    logo() {
        // return cy.get('[data-qa-id="hudl-logo"]');
        return cy.get('[class="uni-link uni-link--wrapper styles_hudlLogoContainer_1L8Lig-sH69T84pB_fXSlv styles_fadeInUpFast_13tTIPxY77Mkw_Ud-lEwlP"]')
    }

    goBackLink() {
        return cy.get('[class="styles_backIcon_1nBYGKhbTIbTmIULDJg1MZ"]');
    }

    signUp() {
        return cy.get('[class="uni-link uni-link--default styles_signUpLink_1CPc8TbK9yDyBdJiSpUOZV"]')
    }
}

