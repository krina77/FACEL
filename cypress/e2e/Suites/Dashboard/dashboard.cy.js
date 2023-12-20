describe("Casos de prueba - Dashboard", ()=>{

    before("Iniciar Sesión",()=>{
        cy.login()
    })
    it("Dash-01: Se cargan todos los elementos del dashboard ",()=>{
        cy.fixture("Login/login").then((the)=>{
            cy.url().should('include', the.data.urlConteins);

            cy.get('.main-logo > [src="assets/img/brand/logo-light.png"]')
            .should('exist')
            .should('be.visible')
            .should('have.attr','src').and('not.be.empty')

            cy.get('.main-logo > [src="assets/img/brand/logo-light.png"]')
            .should('exist')
            .should('be.visible')

            cy.get('#homeMenu > .nav-link')

            cy.get('#TicketsMenu > .nav-link')
            .should('exist')
            .should('be.visible')

            cy.get('#ExportationInvoicesMenu > .nav-link')
            .should('exist')
            .should('be.visible')

            cy.get('#CreditNotesMenu > .nav-link')
            .should('exist')
            .should('be.visible')

            cy.get('#DebitNotesMenu > .nav-link')
            .should('exist')
            .should('be.visible')

            cy.get('#ReportMenu > .nav-link')
            .should('exist')
            .should('be.visible')

            cy.get(':nth-child(8) > .with-sub')
            .should('exist')
            .should('be.visible')

            cy.get(':nth-child(9) > .with-sub')
            .should('exist')
            .should('be.visible')

            cy.get('#mainSidebarToggle')
            .should('exist')
            .should('be.visible')

            cy.get('#AccesoDirecto1 > :nth-child(1) > .row')
            .should('exist')
            .should('be.visible')

            cy.get('.main-header-right > :nth-child(1) > .nav-link')
            .should('exist')
            .should('be.visible')
            
            cy.get('#menuDeclaration > .nav-link')
            .should('exist')
            .should('be.visible')

            cy.get('#menuReports')
            .should('exist')
            .should('be.visible')

            cy.get('#menuSettings > .nav-link > .fe')
            .should('exist')
            .should('be.visible')

            cy.get('.header-settings > .nav-link')
            .should('exist')
            .should('be.visible')
            
            cy.get('.main-footer')
            .should('exist')
            .should('be.visible')

            cy.get('#dashPanels')
            .should('exist')
            .should('be.visible')

            cy.get('strong.colorprimarioTextoP')
            .should('exist')
            .should('be.visible')
        })
    })

    it('Dash-16: Probar que cada enlace del menú lateral abre una ventana o listado.', ()=>{
        cy.fixture("Login/login").then((the)=>{
            cy.get('.ti-home').click()
            cy.url().should('include', the.data.urlConteins)
            cy.get('#homeMenu > .nav-link > .sidemenu-label').click()
            cy.url().should('include', the.data.urlConteins)
            //facturas
            cy.get('#InvoicesMenu > .nav-link > .ti-receipt').click()
            cy.url().should('include', 'facturas')
            cy.visit(the.data.urlInicio)
            cy.get(':nth-child(4) > .sidemenu-label').click()
            cy.url().should('include', 'facturas')
            cy.visit(the.data.urlInicio)
            //tiquetes
            cy.get('#TicketsMenu > .nav-link > .sidemenu-label').click()
            cy.url().should('include', 'tiquetes')
            cy.visit(the.data.urlInicio)
            cy.get('.ti-credit-card').click()
            cy.url().should('include', 'tiquetes')
            cy.visit(the.data.urlInicio)
            //facturaexportacion
            cy.get('#ExportationInvoicesMenu > .nav-link > .sidemenu-label').click()
            cy.url().should('include', 'facturaexportacion')
            cy.visit(the.data.urlInicio)
            cy.get('#ExportationInvoicesMenu > .nav-link > .ti-world').click()
            cy.url().should('include', 'facturaexportacion')
            cy.visit(the.data.urlInicio)
            //notascredito
            cy.get('#CreditNotesMenu > .nav-link > .sidemenu-label').click()
            cy.url().should('include', 'notascredito')
            cy.visit(the.data.urlInicio)
            cy.get('.ti-share-alt').click()
            cy.url().should('include', 'notascredito')
            cy.visit(the.data.urlInicio)
            //notasdebito
            cy.get('#DebitNotesMenu > .nav-link > .sidemenu-label').click()
            cy.url().should('include', 'notasdebito')
            cy.visit(the.data.urlInicio)
            cy.get('.ti-share').click()
            cy.url().should('include', 'notasdebito')
            cy.visit(the.data.urlInicio)
            //reportes
            cy.get('#ReportMenu > .nav-link > .sidemenu-label').click()
            cy.url().should('include', 'reportes')
            cy.visit(the.data.urlInicio)
            cy.get('.ti-printer').click()
            cy.url().should('include', 'reportes')
            cy.visit(the.data.urlInicio)
            //otros
            cy.get('.with-sub > .ti-receipt').click()
            cy.contains('Facturas de Compra')
            cy.visit(the.data.urlInicio)
            cy.get(':nth-child(8) > .with-sub > .sidemenu-label').click()
            cy.contains('Facturas de Compra')
            cy.visit(the.data.urlInicio)
            cy.get(':nth-child(8) > .with-sub > .angle').click()
            cy.contains('Facturas de Compra')
            cy.visit(the.data.urlInicio)
            //Recepción
            cy.get('.with-sub > .ti-world').click()
            cy.contains('Recepciones')
            cy.visit(the.data.urlInicio)
            cy.get('.show > .with-sub > .sidemenu-label').click()
            cy.contains('Recepciones')
            cy.visit(the.data.urlInicio)
            cy.get('.show > .with-sub > .angle').click()
            cy.contains('Recepciones')
            cy.visit(the.data.urlInicio)
        })
    })
    it.only('Dash-17: Probar que cada icono o enlace abre una ventana - Sección Otros.', ()=>{
        cy.fixture("Login/login").then((the)=>{
            //otros
            cy.get('.with-sub > .ti-receipt').click()
            cy.contains('Facturas de Compra')
            cy.visit(the.data.urlInicio)
            cy.get(':nth-child(8) > .with-sub > .sidemenu-label').click()
            cy.contains('Facturas de Compra')
            cy.visit(the.data.urlInicio)
            cy.get(':nth-child(8) > .with-sub > .angle').click()
            cy.contains('Facturas de Compra')
            cy.visit(the.data.urlInicio)
            //Factura de compra
            cy.get('.with-sub > .ti-receipt').click()
            cy.get('#SupliersInvoicesMenu > .nav-link > .sidemenu-label').click()
            cy.url().should('include', 'facturacompra')
            cy.visit(the.data.urlInicio)
            cy.get('.show > .with-sub').click()
            cy.get('.ti-shopping-cart').click()
            cy.url().should('include', 'facturacompra')
            cy.visit(the.data.urlInicio)
            //Proforma
            cy.get('.show > .with-sub').click()
            cy.get('#ProformMenu > .nav-link > .sidemenu-label').click()
            cy.url().should('include', 'proformas')
            cy.visit(the.data.urlInicio)
            cy.get('.show > .with-sub').click()
            cy.get('.ti-shopping-cart').click()
            cy.url().should('include', 'proformas')
            cy.visit(the.data.urlInicio)
            //Recivo
            cy.get('.show > .with-sub').click()
            cy.get('#ReceiveMenu > .nav-link > .sidemenu-label').click()
            cy.url().should('include', 'recibos')
            cy.visit(the.data.urlInicio)
            cy.get('.ti-envelope').click()
            cy.get('.show > .with-sub').click()
            cy.url().should('include', 'recibos')
            cy.visit(the.data.urlInicio)
        })
    })
})