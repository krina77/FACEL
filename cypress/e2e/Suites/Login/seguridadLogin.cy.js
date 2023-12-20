describe('Pruebas de seguridad',()=>{
    it('Log-13: Pruebas de seguridad - Inyección SQL',()=>{
        const usuarioMalicioso = "' OR '1'='1"
        const contrasenaMaliciosa = "' OR '1'='1"

        cy.fixture("Login/login").then((the)=>{
            cy.visit(the.data.urlLogin)
            cy.get(the.elementos.nombreUsuarioInput).type(usuarioMalicioso)
            cy.get(the.elementos.contrasenaInput).type(contrasenaMaliciosa)

            cy.get(the.elementos.loginButton).click()
            cy.contains('Correo invalido');
            cy.reload()
            cy.visit(the.data.urlLogin)
            cy.get(the.elementos.nombreUsuarioInput).type("pruebas@facturelo.com")
            cy.get(the.elementos.contrasenaInput).type(contrasenaMaliciosa)
            cy.get(the.elementos.loginButton).click()
        })
    })

    it('Log-14: Pruebas de seguridad - Cross-Site Scripting (XSS)',()=>{
        const usuarioMalicioso = '<script>alert("XSS");</script>'
        const contrasenaMaliciosa = '<script>alert("XSS");</script>'

        cy.fixture("Login/login").then((the)=>{
            cy.visit(the.data.urlLogin)
            cy.get(the.elementos.nombreUsuarioInput).type(usuarioMalicioso)
            cy.get(the.elementos.contrasenaInput).type(contrasenaMaliciosa)
            cy.get(the.elementos.loginButton).click()
            cy.contains('Correo invalido');
            cy.reload()
            cy.visit(the.data.urlLogin)
            cy.get(the.elementos.nombreUsuarioInput).type("pruebas@facturelo.com")
            cy.get(the.elementos.contrasenaInput).type(contrasenaMaliciosa)
            cy.get(the.elementos.loginButton).click()

        })
    })

    it.only('Log-15: Pruebas de seguridad - Prueba de Fuerza Bruta',()=>{
        const usuarioMalicioso = '<script>alert("XSS");</script>'
        const contrasenaMaliciosa = '<script>alert("XSS");</script>'

        cy.fixture("Login/login").then((the)=>{
            for (let i = 0; i < 5; i++){
                cy.visit(the.data.urlLogin)
                cy.get(the.elementos.nombreUsuarioInput).type(usuarioMalicioso)
                cy.get(the.elementos.contrasenaInput).type(contrasenaMaliciosa)
                cy.get(the.elementos.loginButton).click()
                cy.contains('Correo invalido');
                cy.reload()
                cy.visit(the.data.urlLogin)
                cy.get(the.elementos.nombreUsuarioInput).type("pruebas@facturelo.com")
                cy.get(the.elementos.contrasenaInput).type(contrasenaMaliciosa)
                cy.get(the.elementos.loginButton).click()
                cy.contains('Credenciales Incorrectos. Favor vuelva a intentar.')
            }
            
        })
    })
})