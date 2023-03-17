import login from "../support/loginpage"
const DataLogin = require('../fixtures/datalogin.json')
import dashboard from "../support/dashboard"

describe('Login', () => {
    const LoginPage = new login()
    const Dashboard = new dashboard()
    beforeEach(()=>{
        cy.visit(LoginPage.loginUrl)
    })

    it('success login', () => {   
      cy.get(LoginPage.username).type(DataLogin.valid_username)
      cy.get(LoginPage.password).type(DataLogin.valid_password)
      cy.get(LoginPage.loginbutton).click()
      cy.get(Dashboard.dashboard_title).contains(Dashboard.dashboard_title_text).should('be.visible')
    })
    it('invalid username and password', () => {
        cy.get(LoginPage.username).type(DataLogin.invalid_username)
        cy.get(LoginPage.password).type(DataLogin.invalid_password)
        cy.get(LoginPage.loginbutton).click()
        cy.get(LoginPage.validation_error).contains(LoginPage.validation_error_message).should('be.visible')
    })
    it('invalid username and valid password', () => {  
        cy.get(LoginPage.username).type(DataLogin.invalid_username)
        cy.get(LoginPage.password).type(DataLogin.valid_password)
        cy.get(LoginPage.loginbutton).click()
        cy.get(LoginPage.validation_error).contains(LoginPage.validation_error_message).should('be.visible')
    })
    it('valid username and invalid password', () => {  
        cy.get(LoginPage.username).type(DataLogin.valid_username)
        cy.get(LoginPage.password).type(DataLogin.invalid_password)
        cy.get(LoginPage.loginbutton).click()
        cy.get(LoginPage.validation_error).contains(LoginPage.validation_error_message).should('be.visible')
    })
    it('empty username', () => { 
        cy.get(LoginPage.username)
        cy.get(LoginPage.password).type(DataLogin.valid_password)
        cy.get(LoginPage.loginbutton).click()
        cy.get(LoginPage.validation_error).contains(LoginPage.validation_error_message).should('be.visible')
    })
    it('empty password', () => {
        cy.get(LoginPage.username).type(DataLogin.valid_username)
        cy.get(LoginPage.password)
        cy.get(LoginPage.loginbutton).click()
        cy.get(LoginPage.validation_error).contains(LoginPage.validation_error_message).should('be.visible')
        cy.get(LoginPage.field_validation_error).contains(LoginPage.field_empty_validation_message).should('be.visible')
    })
    it('empty username and password', () => {   
        cy.get(LoginPage.username)
        cy.get(LoginPage.password)
        cy.get(LoginPage.loginbutton).click()
        cy.get(LoginPage.validation_error).contains(LoginPage.validation_error_message).should('be.visible')
        cy.get(LoginPage.field_validation_error).contains(LoginPage.field_empty_validation_message).should('be.visible')
    })
    it('clear all field', () => {  
        cy.get(LoginPage.username).type(DataLogin.valid_username)
        cy.get(LoginPage.password).type(DataLogin.valid_password)
        cy.get(LoginPage.clearbutton).click()
        cy.get(LoginPage.loginbutton).click()
        cy.get(LoginPage.validation_error).contains(LoginPage.validation_error_message).should('be.visible')
        cy.get(LoginPage.field_validation_error).contains(LoginPage.field_empty_validation_message).should('be.visible')
    })
    it('open register page', () => {   
        cy.get(LoginPage.registerbutton).click()
        cy.get(LoginPage.signuppage_title).contains(LoginPage.signuppage_title_text).should('be.visible')
        cy.get(LoginPage.signup_form).should('be.visible')
    })
})