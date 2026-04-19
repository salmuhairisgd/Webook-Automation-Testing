Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})
describe('login into webook', () => {   // npx cypress open//
  beforeEach(() => {
        cy.visit('https://webook.com/ar')  // ar للعربيه en للانجليزية 
        cy.contains(/رفض الكل الغير ضروري|Reject all non-essential/i).click()
        cy.get('[data-testid="header_nav_login_button"]').first().click()
    })
   it('Login with valid credentials', () => {
    const userEmail = Cypress.env('email');
    const userPassword = Cypress.env('password');
    cy.get('input[name="email"]').type('userEmail')
    cy.get('input[name="password"]').type('userPassword') // او احط .type('Password123{enter}')//
    cy.get('[data-testid="auth_login_submit_button"]').click()
   // cy.url().should('not.include', '/login')
   // cy.get('SA').should('be.visible')

  })
   it('Login with wrong password', () => {
    const userEmail = Cypress.env('email');
    cy.get('input[name="email"]').type('userEmail')
    cy.get('input[name="password"]').type('QWgf@wf123123') 
    cy.get('[data-testid="auth_login_submit_button"]').click()
    cy.get('.text-error').should('be.visible')
   })
    it('Login with wrong email with @', () => {
    const userPassword = Cypress.env('password');
    cy.get('input[name="email"]').type('salmargg@gmail.com')
    cy.get('input[name="password"]').type('userPassword') 
    cy.get('[data-testid="auth_login_submit_button"]').click()
    cy.get('.text-error').should('be.visible')
   })
   it('Login with invalid credentials', () => {
    cy.get('input[name="email"]').type('salm661@gmail.com')
    cy.get('input[name="password"]').type('QWgf@12424523') 
    cy.get('[data-testid="auth_login_submit_button"]').click()
    cy.get('body').contains(/غير صحيحة|Something went wrong/i, { timeout: 10000 }).should('be.visible')
    cy.get('.text-error').should('be.visible')
   })
   it('Login email without @', () => {
    const userPassword = Cypress.env('password');
    cy.get('input[name="email"]').type('salm61gmail.com')
    cy.get('input[name="password"]').type('userPassword') 
    cy.get('[data-testid="auth_login_submit_button"]').click()
    cy.get('input[name="email"]').then(($input) => {
            const message = $input[0].validationMessage;
            expect(message).to.include("Please include an '@'");
   })
})
it('Login with empty fields', () => {
        cy.get('input[name="email"]').should('have.value', '')
        cy.get('input[name="password"]').should('have.value', '')
        cy.get('[data-testid="auth_login_submit_button"]').click()
    })
it('Reset password with registered email', () => {
   const userEmail = Cypress.env('email');
   cy.get('[data-testid="auth_reset_password"]').click()
   cy.get('input[name="email"]').type('userEmail')
   cy.get('[data-testid="auth_send_reset_password_code_button"]').click() 

   })
   it('Reset password with unregistered email', () => {
   cy.get('[data-testid="auth_reset_password"]').click()
   cy.get('input[name="email"]').type('sal2fef@gmail.com')
   cy.get('[data-testid="auth_send_reset_password_code_button"]').click() 
   cy.get('.text-error').should('be.visible')

   })
it('Reset password with invalid email format', () => {
   cy.get('[data-testid="auth_reset_password"]').click()
   cy.get('input[name="email"]').type('sal5661gmail.com')
   cy.get('[data-testid="auth_send_reset_password_code_button"]').click() 
   cy.get('input[name="email"]').then(($input) => {
            const message = $input[0].validationMessage;
            expect(message).to.include("Please include an '@'");

   })
   }) 
   it('New user registration with valid credentials', () => {
   cy.get('[data-testid="auth_signup_button"]').click()
   cy.get('input[name="first_name"]').type('salma')
   cy.get('input[name="last_name"]').type('qwqw')
   cy.get('input[name="email"]').type('salmage@gmail.com')
   cy.get('input[name="confirm_email"]').type('salmage@gmail.com')
   cy.get('input[name="password"]').type('dsefhbt@123123')
   cy.get('input[name="mobile"]').type('586314965')
   cy.get('[data-testid="auth_terms_checkbox"]').click()
   cy.get('[data-testid="auth_third_party_checkbox"]').click()
   cy.get('[data-testid="auth_signup_submit_button"]').click() 
  })
  it('A new user registers with already registered email', () => {
   const userEmail = Cypress.env('email');
   cy.get('[data-testid="auth_signup_button"]').click()
   cy.get('input[name="first_name"]').type('salma')
   cy.get('input[name="last_name"]').type('qwqw')
   cy.get('input[name="email"]').type('userEmail')
   cy.get('input[name="confirm_email"]').type('userEmail')
   cy.get('input[name="password"]').type('WQwq@123123')
   cy.get('input[name="mobile"]').type('592325022')
   cy.get('[data-testid="auth_terms_checkbox"]').click()
   cy.get('[data-testid="auth_third_party_checkbox"]').click()
   cy.get('[data-testid="auth_signup_submit_button"]').click() 
   cy.get('.text-error').should('be.visible')
  })
  it('A new user registers with email without @', () => {
   cy.get('[data-testid="auth_signup_button"]').click()
   cy.get('input[name="first_name"]').type('salma')
   cy.get('input[name="last_name"]').type('qwqw')
   cy.get('input[name="email"]').type('safg12345661@gmail.com')
   cy.get('input[name="confirm_email"]').type('safg12345661@gmail.com')
   cy.get('input[name="password"]').type('WQwq@123123')
   cy.get('input[name="mobile"]').type('592325022')
   cy.get('[data-testid="auth_terms_checkbox"]').click()
   cy.get('[data-testid="auth_third_party_checkbox"]').click()
   cy.get('[data-testid="auth_signup_submit_button"]').click() 
   cy.contains('تحقق من البريد الإلكتروني').should('be.visible')
  })
  it('A new user registers with password that does not match the conditions', () => {
   cy.get('[data-testid="auth_signup_button"]').click()
   cy.get('input[name="first_name"]').type('salma')
   cy.get('input[name="last_name"]').type('qwqw')
   cy.get('input[name="email"]').type('safg12345661@gmail.com')
   cy.get('input[name="confirm_email"]').type('safg12345661@gmail.com')
   cy.get('input[name="password"]').type('qw22123')
   cy.get('input[name="mobile"]').type('592325022')
   cy.get('[data-testid="auth_terms_checkbox"]').click()
   cy.get('[data-testid="auth_third_party_checkbox"]').click()
   cy.get('[data-testid="auth_signup_submit_button"]').click() 
   cy.contains('كلمة المرور غير مطابقة للشروط').should('be.visible')
  })
  it('A new user register with incomplete mobile number', () => {
   cy.get('[data-testid="auth_signup_button"]').click()
   cy.get('input[name="first_name"]').type('salma')
   cy.get('input[name="last_name"]').type('qwqw')
   cy.get('input[name="email"]').type('safg12345661@gmail.com')
   cy.get('input[name="confirm_email"]').type('safg12345661@gmail.com')
   cy.get('input[name="password"]').type('qw21142123')
   cy.get('input[name="mobile"]').type('59232502')
   cy.get('[data-testid="auth_terms_checkbox"]').click()
   cy.get('[data-testid="auth_third_party_checkbox"]').click()
   cy.get('[data-testid="auth_signup_submit_button"]').click() 
   cy.contains('رقم الجوال غير صحيح').should('be.visible')
  })
  it('New user does not agree to the Terms and Conditions', () => {
   cy.get('[data-testid="auth_signup_button"]').click()
   cy.get('input[name="first_name"]').type('salma')
   cy.get('input[name="last_name"]').type('qwqw')
   cy.get('input[name="email"]').type('safg12345661@gmail.com')
   cy.get('input[name="confirm_email"]').type('safg12345661@gmail.com')
   cy.get('input[name="password"]').type('qw21142123')
   cy.get('input[name="mobile"]').type('592325022')
   cy.get('[data-testid="auth_signup_submit_button"]').click() 
   cy.contains('مطلوب').should('be.visible') 
  })
  it('A new user does not write his firs name ', () => {
   cy.get('[data-testid="auth_signup_button"]').click()
   cy.get('input[name="last_name"]').type('qwqw')
   cy.get('input[name="email"]').type('safg12345661@gmail.com')
   cy.get('input[name="confirm_email"]').type('safg12345661@gmail.com')
   cy.get('input[name="password"]').type('qw21142123')
   cy.get('input[name="mobile"]').type('592325022')
   cy.get('[data-testid="auth_terms_checkbox"]').click()
   cy.get('[data-testid="auth_third_party_checkbox"]').click()
   cy.get('[data-testid="auth_signup_submit_button"]').click() 
   cy.contains('مطلوب').should('be.visible') 
  })
   it('A new user does not write his last name ', () => {
   cy.get('[data-testid="auth_signup_button"]').click()
   cy.get('input[name="first_name"]').type('salma')
   cy.get('input[name="email"]').type('safg12345661@gmail.com')
   cy.get('input[name="confirm_email"]').type('safg12345661@gmail.com')
   cy.get('input[name="password"]').type('qw21142123')
   cy.get('input[name="mobile"]').type('592325022')
   cy.get('[data-testid="auth_terms_checkbox"]').click()
   cy.get('[data-testid="auth_third_party_checkbox"]').click()
   cy.get('[data-testid="auth_signup_submit_button"]').click() 
    cy.contains('مطلوب').should('be.visible') 
  })
  })