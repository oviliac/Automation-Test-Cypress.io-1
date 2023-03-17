import login from "../support/loginpage"
const DataLogin = require('../fixtures/datalogin.json')
import dashboard from "../support/dashboard"
const datadashboard =  require ('../fixtures/datadashboard.json')

describe('Login', () => {
  const LoginPage = new login()
  const Dashboard = new dashboard()
  beforeEach(() => {
    cy.visit(LoginPage.loginUrl)
    cy.get(LoginPage.username).clear()
    cy.get(LoginPage.username).type(DataLogin.valid_username);
    cy.get(LoginPage.password).type(DataLogin.valid_password);
    cy.get(LoginPage.loginbutton).click()
    cy.get(Dashboard.dashboard_title).contains(Dashboard.dashboard_title_text).should('be.visible')
  })
  it('create new customer', () => {
    cy.visit('https://itera-qa.azurewebsites.net/Customer/Create')
    cy.get(Dashboard.form_name).type(datadashboard.Name)
    cy.get(Dashboard.form_company).type(datadashboard.Company)
    cy.get(Dashboard.form_address).type(datadashboard.Address)
    cy.get(Dashboard.form_city).type(datadashboard.City)
    cy.get(Dashboard.form_phone).type(datadashboard.Phone)
    cy.get(Dashboard.form_email).type(datadashboard.Email)
    cy.get(Dashboard.form_submit).click()
    cy.get(Dashboard.search_input).type(datadashboard.Name)
    cy.get(Dashboard.search_submit).click()
    cy.get(Dashboard.table_first_name).contains(datadashboard.Name).should('be.visible')
    cy.get(Dashboard.table_first_email).contains(datadashboard.Email).should('be.visible')
  })
  // Search feature
  it('search customer by name', () => {
    cy.get(Dashboard.search_input).type(datadashboard.Name)
    cy.get(Dashboard.search_submit).click()
    cy.get(Dashboard.table_first_name).contains(datadashboard.Name).should('be.visible')
    cy.get(Dashboard.table_first_email).contains(datadashboard.Email).should('be.visible')
  })
  it('search customer by email', () => {
    cy.get(Dashboard.search_input).type(datadashboard.Email)
    cy.get(Dashboard.search_submit).click()
    cy.get(Dashboard.table_first_name).contains(datadashboard.Name).should('be.visible')
    cy.get(Dashboard.table_first_email).contains(datadashboard.Email).should('be.visible')
  })
  it('see a customer detail', () => {
    cy.get(Dashboard.search_input).type(datadashboard.Email)
    cy.get(Dashboard.search_submit).click()
    cy.get(Dashboard.table_first_name).contains(datadashboard.Name).should('be.visible')
    cy.get(Dashboard.table_first_email).contains(datadashboard.Email).should('be.visible')
    cy.get(Dashboard.details_button).click()
    cy.get(Dashboard.page_title).contains('Details').should('be.visible')
    // Name
    cy.get(Dashboard.detail_name).contains(datadashboard.Name).should('be.visible')
    // Company
    cy.get(Dashboard.detail_company).contains(datadashboard.Company).should('be.visible')
    // Address
    cy.get(Dashboard.detail_address).contains(datadashboard.Address).should('be.visible')
    // City
    cy.get(Dashboard.detail_city).contains(datadashboard.City).should('be.visible')
    // Phone
    cy.get(Dashboard.detail_phone).contains(datadashboard.Phone).should('be.visible')
    // Email
    cy.get(Dashboard.detail_email).contains(datadashboard.Email).should('be.visible')
  })
  it('edit a customer', () => {
    cy.get(Dashboard.search_input).type(datadashboard.Email)
    cy.get(Dashboard.search_submit).click()
    cy.get(Dashboard.table_first_name).contains(datadashboard.Name).should('be.visible')
    cy.get(Dashboard.table_first_email).contains(datadashboard.Email).should('be.visible')
    cy.get(Dashboard.edit_button).click()
    cy.get(Dashboard.page_title).contains(Dashboard.page_title_edit).should('be.visible')
    cy.get(Dashboard.form_name).clear()
    cy.get(Dashboard.form_name).type(datadashboard.edit_name)
    cy.get(Dashboard.form_company).clear()
    cy.get(Dashboard.form_company).type(datadashboard.edit_company)
    cy.get(Dashboard.form_address).clear()
    cy.get(Dashboard.form_address).type(datadashboard.edit_address)
    cy.get(Dashboard.form_city).clear()
    cy.get(Dashboard.form_city).type(datadashboard.edit_city)
    cy.get(Dashboard.form_phone).clear()
    cy.get(Dashboard.form_phone).type(datadashboard.edit_phone)
    cy.get(Dashboard.form_email).clear()
    cy.get(Dashboard.form_email).type(datadashboard.edit_email)
    cy.get(Dashboard.form_submit).click()
    cy.get(Dashboard.page_title).contains('Customer Details').should('be.visible')
  })
  it('delete a customer', () => {
    cy.get(Dashboard.search_input).type("admin@bucket.co")
    cy.get(Dashboard.search_submit).click()
    cy.get(Dashboard.table_first_name).contains('William bucket').should('be.visible')
    cy.get(Dashboard.table_first_email).contains('admin@bucket.co').should('be.visible')
    cy.get(Dashboard.delete_button).click()
    cy.get(Dashboard.page_title).contains('Delete').should('be.visible')
    cy.get(Dashboard.page_subtitle).contains('Are you sure you want to delete this?').should('be.visible')
    cy.get('.container > div').should('be.visible')
    cy.get('.btn-outline-danger').click()
  })
})