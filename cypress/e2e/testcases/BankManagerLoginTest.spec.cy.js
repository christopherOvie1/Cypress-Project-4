/// <reference types="cypress" />

import HomePageActions from '../../pageObjects/pageActions/HomePageActions'

describe('login as bank manager',()=>{

    const homePage = new HomePageActions()

    beforeEach(()=>{
homePage.navigateToURL()
        
    })

it('validate title of page',()=>{
    homePage.validateTitle().should('eq','Protractor practice website - Banking App')

})

it('verifylogin as bank manager', ()=>{
    homePage.loginAsBankManager()
})

})