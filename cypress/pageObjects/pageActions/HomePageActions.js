/// <reference types="cypress" />

import HomePageElements from '../pageElements/HomePageElements'

export default class  HomePageActions{


    constructor (){
        globalThis.element= new HomePageElements()
    }

navigateToURL(){
    cy.visit('/')
}


validateTitle(){
    return cy.title()
}


loginAsBankManager(){
element.bankManagerLoginButton().click()

}

loginAsCustomer(){
    element.customerLoginButton().click()
}
}