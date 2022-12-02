/// <reference types="cypress" />

const or = require("../../locators.json")
export default class  HomePageElements{

customerLoginButton(){
   // return  cy.get(or.customerLoginButton)
    return  cy.get(or.homepage.customerLoginBtn)

   
  //  return  cy.get('div:nth-of-type(2) > .btn.btn-lg.btn-primary')
}


bankManagerLoginButton(){
   // return  cy.get('div:nth-of-type(2) > .btn.btn-lg.btn-primary')
   return cy.get(or.homepage.bankManagerLoginBtn)
}

}