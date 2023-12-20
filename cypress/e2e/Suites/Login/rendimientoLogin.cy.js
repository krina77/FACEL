describe('Pruebas de rendimiento del login', ()=>{
    it('Log-11: Pruebas de rendimiento - Tiempo en ingresar',()=>{
        cy.login()
        cy.window().its('performance.timing').then((timing)=>{
            const loadTime = timing.loadEventEnd - timing.navigationStart;
            cy.log(loadTime)
            cy.url().should('include', 'inicio')
        })
    })
    it('Pruebas de rendimiento - Número de solicitudes',()=>{
        let requestCount = 0

        cy.intercept({url : '**/*'}, (req)=>{
            requestCount += 1
        }).as('allRequest')
        cy.fixture("Login/login").then((the)=>{
            cy.visit(the.data.urlLogin)
        })

        cy.wait('@allRequest').then(()=>{
            cy.log(`Número de solicitudes realizadas: ${requestCount}`)
        })
    })
})