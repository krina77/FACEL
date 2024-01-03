describe("Casos de prueba - Menu de aplicaciones", ()=>{
    before("Iniciar Sesión",()=>{
        cy.login()
    })
    it('Dash-24: Probar menu de Aplicaciones - Declaraciones D-IVA Porporcionalidad',()=>{
        cy.get('#menuDeclaration').click()
        //Opción de Declaración
        cy.get('.main-notification-list > :nth-child(1) > .dropdown-item').click()
        cy.contains('DECLARACIONES').should('be.visible')
        cy.get('#divaFormulario > .row > :nth-child(1)').should('exist')
        cy.get('#divaFormulario > .row > :nth-child(2)').should('exist')
        cy.get('#divaFormulario > .row > :nth-child(3)').should('exist')
        //Opción de Declaración D-IVA Porporcionalidad
        cy.get(':nth-child(1) > .small-box > .small-box-footer').click()
        cy.contains('D-IVA Porporcionalidad').should('be.visible')
        cy.get('.col-sm-12 > :nth-child(1)').should('exist')
        cy.get('.col-sm-12 > :nth-child(2)').should('exist')
        //Opción de Calcular Proporcionalidad
        cy.get('.col-sm-12 > :nth-child(1)').click()
        cy.contains('Año').should('be.visible')
        cy.get('.col-md-3 > .form-control').should('exist')
        cy.contains('Ventas 13% IVA').should('be.visible')
        cy.contains('Ventas 8% IVA').should('be.visible')
        cy.contains('Ventas 4% IVA').should('be.visible')
        cy.contains('Ventas 2% IVA').should('be.visible')
        cy.contains('Ventas 1% IVA').should('be.visible')
        cy.contains('Ventas 0.5% IVA').should('be.visible')
        cy.contains('Ventas Exentas IVA').should('be.visible')
        cy.contains('Ventas No Sujetas IVA').should('be.visible')
        cy.get('.col-sm-12 > .btn').should('be.visible').click()
        cy.contains('Proporcionalidad Registrada Correctamente').should('be.visible')
        //Opción calculo del IVA
        cy.get('.col-sm-12 > :nth-child(2)').click()
        cy.get(':nth-child(2) > .form-control').should('be.visible')
        cy.get(':nth-child(2) > .col-sm-12 > .btn').should('be.visible')
        cy.get('#proporcionalidad > :nth-child(2) > :nth-child(1) > h6').should('be.visible')
        cy.get('#proporcionalidad > :nth-child(2) > :nth-child(2) > h6').should('be.visible')
        cy.get(':nth-child(3) > h6').should('be.visible')
        cy.get(':nth-child(4) > h6').should('be.visible')
        cy.get(':nth-child(4) > :nth-child(1) > .table-responsive').should('be.visible')
        cy.get(':nth-child(2) > .table-responsive').should('be.visible')
        cy.get('.col-md-2 > .table-responsive').should('be.visible')
        cy.get(':nth-child(5) > :nth-child(1) > .table-responsive').should('be.visible')
        cy.get(':nth-child(2) > .col-sm-12 > .btn').click()
        cy.get(':nth-child(6) > .col-sm-12 > .btn').click()
        cy.wait(5000)
        const downloadFolder = 'C:\\Users\\LENOVO\\Downloads'
        cy.task('fileExists',`${downloadFolder}\\D-iva.pdf`).should('equal',true)
    })
    it('Dash-25: Probar menu de Aplicaciones - Declaraciones D-151',()=>{
        cy.get('#menuDeclaration').click()
        cy.get('.main-notification-list > :nth-child(1) > .dropdown-item').click()
        cy.get(':nth-child(2) > .small-box > .small-box-footer').click()
        cy.contains('Descargar Reporte D-151').should('be.visible')
        cy.contains('Seleccione el año').should('be.visible')
        cy.contains('Año').should('be.visible')
        cy.get('.btn-default').should('exist')
        cy.get('.modal-footer > :nth-child(2)').should('exist')
        cy.get('.modal-footer > :nth-child(3)').should('exist')
    
        cy.get('.btn-default').click()
        cy.contains('Seleccione el año').should('not.exist')

        cy.get(':nth-child(2) > .small-box > .small-box-footer').click()
        cy.get('.close').click()
        cy.contains('Seleccione el año').should('not.exist')

        cy.get(':nth-child(2) > .small-box > .small-box-footer').click()
        cy.get('.modal-footer > :nth-child(2)').click()
        cy.contains('Se está generando el D-151.xls, por favor espere sin cerrar o refrescar la pestaña.').should('be.visible')
    
        cy.get(':nth-child(2) > .small-box > .small-box-footer').click()
        cy.get('.modal-footer > :nth-child(3)').click()
        cy.contains('Se está generando el D-151.pdf, por favor espere sin cerrar o refrescar la pestaña.').should('be.visible')
    })
    it('Dash-26: Probar menu de Aplicaciones - Declaraciones D-101',()=>{
        cy.get('#menuDeclaration').click()
        cy.get('.main-notification-list > :nth-child(1) > .dropdown-item').click()
        cy.get(':nth-child(3) > .small-box > .small-box-footer').click()
        cy.contains('D-101').should('be.visible')
        cy.contains('Ingresos').should('be.visible')
        cy.contains('Costos, Gastos y Deducciones').should('be.visible')
        cy.contains('Base Imponible').should('be.visible')
        cy.contains('Créditos').should('be.visible')

        cy.get('.col-md-5 > .btn').should('be.visible').should('exist')
        cy.get('.col-md-5 > .btn').click()
        cy.contains('Descargar Reporte D-101').should('be.visible')
        cy.get('.modal-body > :nth-child(1) > :nth-child(1) > .form-control').should('be.visible').should('exist')
        cy.get('.modal-body > :nth-child(1) > :nth-child(2) > .form-control').should('be.visible').should('exist')
        cy.get('.modal-footer > .btn-primary').should('be.visible').should('exist')
        cy.get('.btn-default').should('be.visible').should('exist')

        cy.get('.btn-default').click()
        cy.contains('Descargar Reporte D-101').should('not.exist')

        cy.get('.col-md-5 > .btn').click()
        cy.get('.close').click()
        cy.contains('Descargar Reporte D-101').should('not.exist')

        cy.get('.col-md-5 > .btn').click()
        cy.get('.modal-footer > .btn-primary').click()
        cy.contains('Periodo consultado del').should('be.visible')

        cy.get('.col-md-3 > .btn').click()
    })

})