Feature: Testando API.

Background:  Executa antes de cada teste 
    * def url_base = https: 'https://gorest.co.in/'
    
Scenario: Teste inicial padrão da API.
    Given url url_base
    When method get
    Then status 200 

Scenario: Testando tipo, primeiro do array, depois dos elementos do array.
    Given url url_base
    And path '/public/v2/users'
    When method get
    Then status 200 
    And match $ == '#[]'
    And match each $ contains {email: '#string', id: '#number'}

Scenario: Testando se os usuarios possuem nomes com mais de 5 caracteres.
    Given url url_base
    And path '/public/v2/users'
    When method get
    Then status 200 
    And match each $ contains {name: "#string? _.length >= 5"}

Scenario: Testando url invalida. 
    Given url url_base
    And path '/users/cart'
    When method get
    Then status 404

Scenario: criando um novo usuario. 
    Given header Authorization = 'Bearer eb3720edc0add1e427a4ffc5289b3fe9c2636e674a05dac8327a663e3a5af501'
    Given url url_base
    And path '/public/v2/users/1910'
    When method delete
    Then status 204
