/// <reference types="cypress" />
import GitHubHomePage from '/Users/ralsilwadi/Desktop/cypress-projects/cypress_project03/Pages/GitHubHomePage.js';
import GitHubLoginPage from '/Users/ralsilwadi/Desktop/cypress-projects/cypress_project03/Pages/GitHubLoginPage.js';

const gitHubHomePage = new GitHubHomePage()
const gitHubLoginPage = new GitHubLoginPage()


describe('GitHub', () => {

  beforeEach(() => {
    cy.visit('https://github.com/')
  });

  it.only('TASK-1: Validate the GitHub Home Page Logo and Header Menu Items', () => {
    /**
     * 1. Go to https://github.com/ 
       2. Validate that the logo is displayed
       3. Validate that the header menu items are displayed with their expected texts
          Product
          Solutions
          Open Source
          Pricing
 
     */
      cy.get('.mr-lg-3 > .octicon')
  });

  it('TASK-2: Validate the GitHub Home Page Search and Signing Header Items', () => {
    /**
     * 1. Go to https://github.com/
       2. Validate that the search input is displayed with the placeholder "Search or jump to…"
       3. Validate that the sign in button is displayed with the text "Sign in"
       4. Validate that the sign up button is displayed with the text "Sign up"

     */
  });

  it('TASK-3: Validate the GitHub Login Page Sign in Form', () => {
    /**
     * 1. Go to https://github.com/
2.  Click on "Sign in" button
3.  Validate that the header logo is displayed
4.  Validate that the form header is displayed with the text "Sign in to GitHub"
5.  Validate that the username or email address label is displayed with the text "Username or email address"
6.  Validate that the username or email address input is displayed and enabled
7.  Validate that the password label is displayed with the text "Password"
8.  Validate that the password input is displayed and enabled
9.  Validate that the forgot password link is displayed with the text "Forgot password?"
10. Validate that the sign in with a passkey button is displayed with the text "Sign in with a passkey"
11. Validate that the create an account link is displayed with the text "Create an account"
12. Validate that the sign in button is displayed with the text "Sign in"

     */
  });

  it('TASK-4: Validate the GitHub Login Page Footer Links ', () => {
    /**
     * 1. Go to https://github.com/
2.  Click on "Sign in" button
3.  Validate that there are 6 links are displayed in the footer
4.  Validate that the footer links are displayed with their expected texts
Terms
Privacy
Docs
Contact GitHub Support
Manage cookies
Do not share my personal information

     */
  });
   
  it('TASK-5: Validate the GitHub Login Page Invalid Login Attempt ',() =>{
    /**
     * 
     */
  })


});