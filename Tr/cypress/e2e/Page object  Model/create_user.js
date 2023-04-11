// import {getRandomInt} from '../../support/RandomNumber/random'
export class Create_User{

     getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

    Click_FavoritesTab(){
        // cy.get('#favoritesTab').click()
        cy.get(':nth-child(6) > .p-ripple').click()
        cy.wait(5000)
    }

    Click_Admin_tab(){
        cy.xpath('(//*[@id="menuButtonTile"])[1]').click()
    }

    Click_User_Managment(){
        cy.get(':nth-child(2) > menu-button > .button > .button__bottom > .fa').click()
        cy.wait(5000)
    }

    Click_Add_User(){
        cy.get('.flex > .ng-star-inserted').click()
    }

    Enter_Business_Email(){
        // cy.get(':nth-child(1) > :nth-child(2) > .p-inputtext').type(data.users['Business Email']+getRandomInt(999)+'_auto'+'@business.com')
        cy.get(':nth-child(1) > :nth-child(2) > .p-inputtext').type(data.users['Business_Email']+getRandomInt(705)+'@business.com')
    }

    Enter_First_Name(){
        
        cy.get('#first').type(data.users['First Name']+getRandomInt(9999)) 

    }

    Enter_Last_Name(){
        cy.get('#last').type(data.users['Last Name']+getRandomInt(9999))
    }

    Enter_Display_Name(){
        cy.get('#display').type(data.users['Display Name']+getRandomInt(500)+'_A')
    }

    Select_BASF_Ref_Role(){
          //click role
          cy.get(':nth-child(5) > :nth-child(2) > .p-inputwrapper > .p-multiselect > .p-multiselect-trigger > .p-multiselect-trigger-icon').click()
          // select role basf rep
          cy.get(':nth-child(7) > .p-ripple > .p-checkbox > .p-checkbox-box').click()
          //normal click
          cy.get('tbody > :nth-child(5) > :nth-child(1)').click()
    }

    Select_Country(){
        cy.get('#address-form-country-dropdown > .p-dropdown > .p-dropdown-label').click()
        
        cy.xpath('/html/body/app-root/main/admin/generic-user-creation/div/div/div/div/user-creation/form/table/tbody/tr[6]/td[2]/p-dropdown/div/div[3]/div[2]/ul/p-dropdownitem[232]/li').click()
  
    }

    Enter_Business_Address_street1(){
        cy.get(':nth-child(7) > :nth-child(2) > .p-inputtext').type('29115 Spoon Ave')
    }

    Enter_City(){
        cy.get(':nth-child(9) > :nth-child(2)').type('Madison Heights')
    }

    Enter_Postal_Code(){
        cy.get(':nth-child(10) > :nth-child(2) > .p-inputtext').type('48071')  
    }

    Select_State(){
        cy.get(':nth-child(11) > :nth-child(2) > .p-inputwrapper > .p-dropdown > .p-dropdown-trigger').click()
        cy.xpath('/html/body/app-root/main/admin/generic-user-creation/div/div/div/div/user-creation/form/table/tbody/tr[11]/td[2]/p-dropdown/div/div[3]/div[2]/ul/p-dropdownitem[29]/li').click()


    }

    Select_Time_Zone(){
        cy.get(':nth-child(13) > :nth-child(2) > .p-element > .p-dropdown > .p-dropdown-trigger').click()
        cy.xpath('/html/body/app-root/main/admin/generic-user-creation/div/div/div/div/user-creation/form/table/tbody/tr[13]/td[2]/p-dropdown/div/div[3]/div/ul/p-dropdownitem[1]/li').click()
    }

    Select_Preferred_Language(){
        cy.get(':nth-child(16) > :nth-child(2) > .p-element > .p-dropdown > .p-dropdown-trigger').click()
        cy.xpath('/html/body/div[4]/div[2]/ul/p-dropdownitem[8]').click()
    }

    Click_Submit(){
        cy.get('.overlay__btn > .p-element').click()
        cy.wait(500)
        
    }

    Click_Home_Tab(){
        cy.wait(500)
        cy.xpath('/html/body/app-root/header/bread-crumb/div/span[1]/a').click({force: true})
        cy.wait(500)
    }

}