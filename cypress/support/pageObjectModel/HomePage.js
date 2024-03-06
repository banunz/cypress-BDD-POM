
import '@testing-library/cypress/add-commands'

class HomePage{

    formFill(){
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        // cy.get('input[name="name"]:nth-child(2)').type("Banu");
        // cy.get('input[name="email"]').type("email");
        // cy.findByLabelText("Check me out if you Love IceCreams!").check();
        // cy.findByLabelText("Employed").check();
        // cy.findAllByPlaceholderText("Password").type('Banu')
        // cy.findByLabelText("Gender").select("Female")
        // cy.findByRole("button",{name:'Submit'}).click();
        // cy.contains("Success! The Form has been submitted successfully!.");
    }

}
export default HomePage;