export default class todoListPage {
    gitHubLink(){
        return cy.get('.pull-right > li > a')
    }
    inputTask(){
        return cy.get('input[data-test="new-todo"]')
    }
};

