/// <reference types="cypress"/>

describe('Criando cenário de testes para o site herokuapp',()=> {
  
  it('Caso de teste: Adicionando itens no carrinho', ()=> {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(31) > a').click()
    testeTeclado()
  })

  it('Caso de teste: Login no site com sucesso', ()=> {
    cy.visit('https://the-internet.herokuapp.com/login')   
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').should('contain.text', 'You logged into a secure area!')
  })

  it('Caso de teste: Login no site com falha', ()=> {
    cy.visit('https://the-internet.herokuapp.com/login')   
    cy.get('#username').type("loginErrado")
    cy.get('#password').type("SenhaErrada")
    cy.get('.fa').click()
    cy.get('#flash').should('contain.text', 'Your username is invalid!')
  })

})

function testeTeclado(){
  for(let i = 0; i < 10; i++){
    cy.get('#target').type(i)
    cy.get('#result').should('contain.text', 'You entered: '+ i)  
  }
}