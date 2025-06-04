/**
 * Suite= conjunto de pruebas
 * Test= prueba individual
 * 
 * Describe= agrupa pruebas
 * It = define una prueba
 * 
 * Test it
 * Suite = describe
 */
import todoListPage from '../page/todoListPage';

describe('Mi primer test', () => { //Suite
    const todoList = new todoListPage();
    it('Primer Test', () => { //Test
        cy.visit('https://example.cypress.io/todo');
        todoList.inputTask().type('Mi primer tarea');
        cy.wait(5000);
        todoList.gitHubLink().click();
        cy.wait(5000);
    });
    it.skip('Segundo Test', () => { //Test   
    });
    
    it('Tercer Test', () => { //Test
    });
});
