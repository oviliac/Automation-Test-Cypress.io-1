import login from "./loginpage"

Cypress.Commands.add('login', () => {
    const LoginPage = new login()
    const username = `xii`
    const Username = `xii`
    // const password = Cypress.env('password')
    const password = 'x'

    cy.visit(LoginPage.loginUrl)
    cy.get(LoginPage.username).type(Username)
    cy.get(LoginPage.password).type(password)
    cy.get(LoginPage.loginbutton).click()
    cy.get('h1').contains('Dashboard').should('be.visible')

    let cookie = cy.getCookies();
    cy.log(cookie);

    return {
        username : Username,
        password: password
    }

    // cy.request({
    //     // here we can't use just '/users' url because baseUrl is different than API url
    //     // if they are the same,
    //     // then we can just use: '/users' without prefix, like in visit() command
    //     url: `${apiUrl}/users`,
    //     method: 'POST',
    //     body: {
    //         user: {
    //             username: Username,
    //             password: password
    //         }
    //     }
    // })
    //     .then((response) => {
    //         expect(response.status).to.eq(200)
    //         // user is also logged in after registering
    //         // so we can just save token
    //         // window.localStorage.setItem('jwtToken', response.body.user.token)
            
    //         let cookie = cy.getCookies()
    //         cy.log('**user created**')
    //         cy.log(`**username: ${Username}**`)
    //         cy.log(`**password: ${password}**`)
    //         cy.log(cookie)
    //     })
    //     .then(() => ({
    //         // we need email and username in tests
    //         username : Username,
    //         password: password
    //     }))
})