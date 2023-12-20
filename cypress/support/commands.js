//Commands para login
Cypress.Commands.add("irLogin",()=>{
    cy.fixture("Login/login").then((the)=>{
        cy.visit(the.data.urlLogin)
        cy.contains(the.data.loginButton).should("be.visible")
    })
})

Cypress.Commands.add("login",()=>{
    cy.fixture("Login/login").then((the)=>{
        cy.visit(the.data.urlLogin)
        cy.get(the.elementos.nombreUsuarioInput).type(the.data.nombreUsuarioValido)
        cy.get(the.elementos.contrasenaInput).type(the.data.contrasenaValida)
        cy.get(the.elementos.loginButton).click()
        cy.url().should('include', the.data.urlConteins);
    })
})


//el comando sessiones se supone maneja los credenciales en memoria y no los pide más, pero no me funciona como que se queda cargando, envía al api cosas vacias
Cypress.Commands.add("loginSession",()=>{
    cy.session("login",()=>{
        cy.fixture("Login/login").then((the)=>{
            cy.visit(the.data.urlLogin)
            cy.get(the.elementos.nombreUsuarioInput).type(the.data.nombreUsuarioValido)
            cy.get(the.elementos.contrasenaInput).type(the.data.contrasenaValida)
            cy.get(the.elementos.loginButton).click()
        })
    })
})

Cypress.Commands.add("loginIncorrecto",()=>{
    cy.fixture("Login/login").then((the)=>{
    cy.get(the.elementos.nombreUsuarioInput).type(the.data.nombreUsuarioInvalido)
    cy.get(the.elementos.contrasenaInput).type(the.data.contrasenaInvalido)
    cy.get(the.elementos.loginButton).click()
    cy.contains(the.data.loginIncorrecto); 
    });
})

Cypress.Commands.add("abrirModalRestablecerContraseña",()=>{
    cy.get(':nth-child(1) > .dropdown-item')
            .should('exist')
            .should('be.visible')
            .click()
})

Cypress.Commands.add("abrirModalRegistroLinea",()=>{
    cy.get(':nth-child(2) > .dropdown-item')
            .should('exist')
            .should('be.visible')
            .click()
})