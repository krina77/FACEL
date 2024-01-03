const { select } = require("async")
import 'cypress-downloadfile/lib/downloadFileCommand'

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
    it('Dash-17: Probar que cada icono o enlace abre una ventana - Sección Otros.', ()=>{
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
            cy.get('.with-sub > .ti-receipt').click()
            cy.get('.ti-shopping-cart').click()
            cy.url().should('include', 'facturacompra')
            cy.visit(the.data.urlInicio)
            //Proforma
            cy.get('.with-sub > .ti-receipt').click()
            cy.get('#ProformMenu > .nav-link > .sidemenu-label').click()
            cy.url().should('include', 'proformas')
            cy.visit(the.data.urlInicio)
            cy.get('.with-sub > .ti-receipt').click()
            cy.get('.ti-shopping-cart').click()
            cy.url().should('include', 'proformas')
            cy.visit(the.data.urlInicio)
            //Recivo
            cy.get('.with-sub > .ti-receipt').click()
            cy.get('#ReceiveMenu > .nav-link > .sidemenu-label').click()
            cy.url().should('include', 'recibos')
            cy.visit(the.data.urlInicio)
            cy.get('.with-sub > .ti-receipt').click()
            cy.get('.ti-envelope').click()
            cy.url().should('include', 'recibos')
            cy.visit(the.data.urlInicio)
            //Provisional
            cy.get('.with-sub > .ti-receipt').click()
            cy.get('#ReceiveMenu > .nav-link > .sidemenu-label').click()
            cy.url().should('include', 'recibos')
            cy.visit(the.data.urlInicio)
            cy.get('.with-sub > .ti-receipt').click()
            cy.get('.ti-envelope').click()
            cy.url().should('include', 'recibos')
            cy.visit(the.data.urlInicio)
        })
    })

    it('Dash-18: Probar que cada icono o enlace abre una ventana - Sección Recepción', ()=>{
        cy.fixture("Login/login").then((the)=>{
            //Recepcion
            cy.get(':nth-child(9) > .with-sub > .sidemenu-label').click()
            cy.contains('Recepciones')
            cy.visit(the.data.urlInicio)
            cy.get('.with-sub > .ti-world').click()
            cy.contains('Recepciones')
            cy.visit(the.data.urlInicio)
            cy.get(':nth-child(9) > .with-sub').click()
            cy.contains('Recepciones')
            cy.visit(the.data.urlInicio)
            //Recepciones
            cy.get(':nth-child(9) > .with-sub > .sidemenu-label').click()
            cy.get('#ReceptionMenu > .nav-link > .sidemenu-label').click()
            cy.url().should('include', 'recepcion')
            cy.visit(the.data.urlInicio)
            cy.get(':nth-child(9) > .with-sub > .sidemenu-label').click()
            cy.get('#ReceptionMenu > .nav-link > .ti-harddrives').click()
            cy.url().should('include', 'recepcion')
            cy.visit(the.data.urlInicio)
             //Otros Gastos
            cy.get(':nth-child(9) > .with-sub > .sidemenu-label').click()
            cy.get('#ReceptionImportacionMenu > .nav-link > .sidemenu-label').click()
            cy.url().should('include', 'otrosGastos')
            cy.visit(the.data.urlInicio)
            cy.get(':nth-child(9) > .with-sub > .sidemenu-label').click()
            cy.get('#ReceptionImportacionMenu > .nav-link > .ti-harddrives').click()
            cy.url().should('include', 'otrosGastos')
            cy.visit(the.data.urlInicio)
        })
    })

    it('Dash-19: Probar los accesos directos', ()=>{
        //dar clic 
        cy.fixture("Login/login").then((the)=>{
            cy.get('body > div.page > div:nth-child(2) > div.main-header.side-header.sticky.sticky-pin > div.container-fluid > div.main-header-center > div.col-12.col-xl-8.AccesoDirectos.row.p-0')
            .within(()=>{
                for (let i = 1; i <= 6; i++){
                    try {
                        cy.get(`[id="AccesoDirecto${i}"]`).should('be.visible').click()
                    } catch (error) {
                    cy.log(`El elemento ${i} no existe`)  
                    }
                }
                
            })
        })
    })
    it('Dash-20: Cambiar un acceso directo',()=>{
        cy.get('#AccesoDirecto2opciones > .fe').should('be.visible').click()
        cy.get('#AccesoDirecto2 > div > div > div > div > div > button:nth-child(1)').should('be.visible')
        cy.get('#AccesoDirecto2 > div > div > div > div > div > button:nth-child(2)').should('be.visible')
        cy.get('#AccesoDirecto2 > div > div > div > div > div > button:nth-child(1)').click()
        cy.contains('Seleccione').should('be.visible')
        const selectSelector = 'body > div.page > div:nth-child(2) > div:nth-child(5) > div > div > div > div.modal-body > div > div > div > div > div > select';
        for (let i = 1; i <= 10; i++) {
            const valorASeleccionar = i.toString();
            cy.get(selectSelector).select(valorASeleccionar);
            // Verifica si la opción seleccionada es la correcta
            cy.get(selectSelector).should('have.value', valorASeleccionar);
            // Sale del bucle si la opción fue seleccionada correctamente
            break;
        }
        cy.get('.modal-footer > .btn-primary').click()
        cy.contains('Seleccione').should('not.exist')
        
    })
    it('Dash-21: Eliminar acceso directo',()=>{
        cy.get('#AccesoDirecto2opciones > .fe').should('be.visible').click()
        cy.get('#AccesoDirecto2 > div > div > div > div > div > button:nth-child(2)').click()
        cy.contains('La configuración se editó con éxito.').should('be.visible')
    })
    it('Dash-22: Probar iconos menu superior derecho',()=>{
        cy.get('.fe-maximize').should('be.visible').click()
        cy.get('#menuDeclaration').click()
        cy.contains('Aplicaciones').should('be.visible')
        cy.get('#menuReports > .nav-link').click()
        cy.contains('Listado de Notificaciones').should('be.visible')
        cy.get('#menuSettings4').click()
        cy.contains('Compañías').should('be.visible')
        cy.get('#menuSettings > .nav-link').click()
        cy.contains('Configuración').should('be.visible')
        cy.get('.main-img-user > img').click()
        cy.contains('Menú de Sesión').should('be.visible')
    })
    it('Dash-23: Probar menu de Aplicaciones',()=>{
        cy.get('#menuDeclaration').click()
        cy.contains('Aplicaciones').should('be.visible')
        //Opciones del menú
        cy.contains('DECLARACIÓN').should('be.visible')
        cy.contains('AGENDA').should('be.visible')
        cy.contains('RECEPCIÓN AUTOMÁTICA').should('be.visible')
        cy.contains('FIRMA DIGITAL').should('be.visible')
        cy.contains('CÓDIGOS CABYS').should('be.visible')
        cy.contains('CONSULTAR IDENTIFICACIÓN').should('be.visible')
        cy.contains('VISUALIZAR XML').should('be.visible')
        cy.get('#menuDeclaration > div > div.main-notification-list > div:nth-child(1)').should('be.visible')
        cy.get('#menuDeclaration > div > div.main-notification-list > div:nth-child(2)').should('be.visible')
        cy.get('#menuDeclaration > div > div.main-notification-list > div:nth-child(3)').should('be.visible')
        cy.get('#menuDeclaration > div > div.main-notification-list > div:nth-child(4)').should('be.visible')
        cy.get('#menuDeclaration > div > div.main-notification-list > div:nth-child(5)').should('be.visible')
        cy.get('#menuDeclaration > div > div.main-notification-list > div:nth-child(6)').should('be.visible')
        cy.get('#menuDeclaration > div > div.main-notification-list > div:nth-child(7)').should('be.visible')
    })
    it('Dash-27: Probar menu de Compañías',()=>{
        cy.get('#menuSettings4 > .nav-link > .far').click()
        cy.contains('Compañías').should('be.visible')
        //Opciones del menú
        cy.contains('Editar Compañía').should('be.visible')
        cy.contains('Agregar compañía o Sucursal').should('be.visible')
        cy.contains('Listado de Compañías').should('be.visible')
        cy.get('#menuSettings4 > .dropdown-menu > [href="#/companies/edit/860"]').should('be.visible')
        cy.get('#menuSettings4 > .dropdown-menu > [href="#/companies/add/"]').should('be.visible')
        cy.get('#menuSettings4 > div > a:nth-child(5)').should('be.visible')
    })
    it('Dash-28: Probar menu de Configuracion',()=>{
        cy.get('#menuSettings').click()
        cy.contains('Configuración').should('be.visible')
        //Opciones del menú
        cy.contains('Clientes').should('be.visible')
        cy.contains('Grupos').should('be.visible')
        cy.contains('Productos').should('be.visible')
        cy.contains('Precios').should('be.visible')
        cy.contains('Proveedores').should('be.visible')
        cy.contains('Impuestos').should('be.visible')
        cy.contains('Unidades').should('be.visible')
        cy.contains('Importar documentos').should('be.visible')
        cy.contains('Facturación Grupal').should('be.visible')
        cy.contains('Facturación Grupal').should('be.visible')
        cy.contains('Facturación Recurrente').should('be.visible')
        cy.contains('Correo').scrollIntoView().should('be.visible')
        cy.contains('Usuarios').scrollIntoView().should('be.visible')
        cy.contains('Bitácora').scrollIntoView().should('be.visible')
        cy.get('#menuSettings > .dropdown-menu > [href="#/clientes"]').should('be.visible').should('exist')
        cy.get('#menuSettings > div > a:nth-child(4)').should('be.visible').should('exist')
        cy.get('#menuSettings > div > a:nth-child(5)').should('be.visible').should('exist')
        cy.get('#menuSettings > div > a:nth-child(6)').should('be.visible').should('exist')
        cy.get('#menuSettings > div > a:nth-child(7)').should('be.visible').should('exist')
        cy.get('#menuSettings > div > a:nth-child(8)').should('be.visible').should('exist')
        cy.get('#menuSettings > div > a:nth-child(9)').should('be.visible').should('exist')
        cy.get('#menuSettings > div > a:nth-child(10)').should('be.visible').should('exist')
        cy.get('#menuSettings > div > a:nth-child(11)').should('be.visible').should('exist')
        cy.get('#menuSettings > div > a:nth-child(12)').should('be.visible').should('exist')
        cy.get('#menuSettings > div > a:nth-child(13)').should('be.visible').should('exist')
        cy.get('#menuSettings > div > a:nth-child(14)').should('be.visible').should('exist')
        cy.get('#menuSettings > div > a:nth-child(15)').should('be.visible').should('exist')
    }) 

    it.only('Dash-29: Probar menu de Sesión',()=>{
        cy.get('.main-img-user > img').click()
        cy.contains('Menú de Sesión').should('be.visible')
        cy.get('#MenuProfile > div.sidebar-body > div:nth-child(2) > p:nth-child(1) > strong').should('not.be.empty')
        cy.get('#MenuProfile > div.sidebar-body > div:nth-child(2) > p.main-notification-text.blue > strong').should('not.be.empty')
        cy.get('[style="text-align: left; margin-bottom: 0px !important;"] > :nth-child(3) > strong').should('not.be.empty')
        cy.get('[style="text-align: left; margin-bottom: 0px !important;"] > :nth-child(4) > strong').should('not.be.empty')
        cy.get('[style="text-align: left; margin-bottom: 0px !important;"] > :nth-child(5) > strong').should('not.be.empty')
        cy.get('[title="Acerca del Sistema"]').should('be.visible')
        cy.contains('Mi Plan').should('be.visible')
        cy.contains('Ayuda').should('be.visible')
        cy.contains('Novedades').should('be.visible')
        cy.get('#MenuProfile > div.sidebar-body > a:nth-child(7)').should('be.visible')
        cy.contains('Sugerencias').should('be.visible')
        cy.get('.sidebar-body > [href="#/DocumentosDisponibles"]').should('exist')
        cy.get('#MenuProfile > div.sidebar-body > a:nth-child(10)').should('be.visible')
        cy.get('.sidebar-body > [href="#/DocumentosDisponibles"] > .alert').should('be.visible')
        cy.get('.img').should('be.visible')
    })
})