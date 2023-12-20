describe("Casos de prueba - Login", ()=>{

    
        beforeEach("Visitar página de login",()=>{
            cy.irLogin()
        })
    
        it("Log-01: Hacer login exitosamente",()=>{
            cy.login()
        })
    
        it('Log-02: Hacer login inválido', () => {
            cy.loginIncorrecto()
        })

        it("Log-03: Carga el logo",()=>{
            cy.get('[align="center"] > .img-responsive')
            .should('be.visible')
            .and(($logo)=>{
                expect($logo.height()).to.be.greaterThan(0)
                expect($logo.width()).to.be.greaterThan(0)
            })
        })

        it("Log-04: Existen imágenes en el carrusel",()=>{
            cy.get('#carouselExampleIndicators > div > div.carousel-item.active > div > a > img', { timeout: 10000 })
                .should('exist') 
                .should('be.visible') 
                .should('have.attr', 'src') 
                .and('not.be.empty');
        })

        it("Log-05: Funcionamiento del chat de ayuda",()=>{
            cy.get('#zsiq_agtpic',{timeout: 10000}).should('be.visible')
            cy.get('#zsiq_agtpic').click()
        })

        it('Log-06: Función de restablecer contraseña',()=>{
            cy.abrirModalRestablecerContraseña()
            cy.contains('Restablecer Contraseña').should('be.visible')


            cy.get('.card-body > #loginform > .form-group > .pos-relative > .form-control')
            .should('exist')
            .should('be.visible')
            
            cy.fixture("Login/login").then((the)=>{
                cy.get('#loginform > div > div > input').eq(1).type(the.data.cuantaPrueba, { force: true })
            })

            cy.get('.card-body > #loginform > .btn').click()
            cy.contains('La contraseña se ha restablecido, revise el correo electrónico').should('be.visible')
            cy.contains('Restablecer Contraseña').should('not.exist')
        })

        it('Log-07: Cerrar modal de restablecer contraseña',()=>{
            cy.abrirModalRestablecerContraseña()
            cy.get('.text-center > .btn')
            .should('exist')
            .should('be.visible')
            .click()
            cy.contains('Restablecer Contraseña').should('not.exist')

            cy.abrirModalRestablecerContraseña()
            cy.get('.close')
            .should('exist')
            .should('be.visible')
            .click()
            cy.contains('Restablecer Contraseña').should('not.exist')
        })

        it('Log-08: Función de registrarse en línea',()=>{
            cy.abrirModalRegistroLinea()
            cy.contains('Proceso de Registro').should('be.visible')


            cy.get('#loginform > div.pos-relative > input')
            .should('exist')
            .should('be.visible')

            cy.get('.card-body > #loginform > .form-group > .form-control')
            .should('exist')
            .should('be.visible')

            cy.fixture("Login/login").then((the)=>{
                cy.get('#loginform > div.pos-relative > input').type(the.data.cuantaPrueba, { force: true })
                cy.get('.card-body > #loginform > .form-group > .form-control').type(the.data.nombre, { force: true })
            })

            cy.get('.card-body > #loginform > .btn').click()
            cy.contains('El registro se efectuó satisfactoriamente').should('be.visible')
            cy.contains('Proceso de Registro').should('not.exist')
        })

        it('Log-09: Cerrar modal de registrarse en línea',()=>{
            cy.abrirModalRegistroLinea()
            cy.get('.text-center > .btn')
            .should('exist')
            .should('be.visible')
            .click()
            cy.contains('Restablecer Contraseña').should('not.exist')

            cy.abrirModalRegistroLinea()
            cy.get('.close')
            .should('exist')
            .should('be.visible')
            .click()
            cy.contains('Proceso de Registro').should('not.exist')
        })

        it('Log-10: Registrarse en línea - Cuenta Existente y espacios en blanco', ()=>{
            cy.abrirModalRegistroLinea()
            cy.get('.card-body > #loginform > .btn').click()
            cy.contains('Ingrese todos los datos para proceder').should('be.visible')
            cy.fixture("Login/login").then((the)=>{
                cy.get('#loginform > div.pos-relative > input').type("pruebas@facturelo.com", { force: true })
                cy.get('.card-body > #loginform > .form-group > .form-control').type(the.data.nombre, { force: true })
            })
            cy.get('.card-body > #loginform > .btn').click()
            cy.contains('El correo ingresado ya existe en el sistema').should('be.visible')
        })
})