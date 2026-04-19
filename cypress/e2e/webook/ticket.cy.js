describe('buy a ticket', () => {// npx cypress open//
   beforeEach(() => {
        cy.visit('https://webook.com/ar')  // ar للعربيه en للانجليزية 
        cy.viewport(1280, 720)
        cy.contains(/رفض الكل الغير ضروري|reject all non-essential/i).click()
        cy.get('[data-testid="header_nav_login_button"]').first().click()
        const userEmail = cy.env('email');
        const userPassword = cy.env('password');
        cy.get('input[name="email"]').type('userEmail')
        cy.get('input[name="password"]').type('userPassword') // او احط .type('Password123{enter}')//
        cy.get('[data-testid="auth_login_submit_button"]').click()
        cy.get('header', { timeout: 20000 }).should('be.visible');
    })
   it('Book a ticket', () => {
    cy.contains('بوليڤارد وورلد').click({ timeout: 800000 }).should('be.visible')
    cy.contains('بوليڤارد وورلد').should('be.visible')
    cy.get('[data-testid="zone_entry_button"]').click()
    cy.contains('الأحد').should('be.visible').click()
    cy.get('[data-testid="ticketing-calendar-timeslot-button-0"]').click()
    cy.contains('Weekday Entry').should('be.visible').click()
    cy.get('[data-testid="qty-increment-btn-68e23c08ec39636d7a02f936"]').click()
    cy.get('[data-testid="ticketing_tickets_go_to_summary_button"]').click()
    cy.get('[data-testid="ticketing_summary_resell_terms_checkbox"]').click()
    cy.contains('الدفع بواسطة').should('be.visible').click()

  })
  it('Book a ticket via resell', () => {
  cy.contains('a', 'منصة إعادة البيع').should('be.visible') .then(($link) => { $link.attr('target', '_self'); //معنى _self: "يا متصفح، افتح هذا الرابط في نفس النافذة التي أعمل عليها الآن ولا تفتح تبويباً جديداً
   }) .click();
   cy.contains('استكشف الفعاليات').click({ force: true });
   cy.get('body').should('contain', 'نتيجة');
   cy.get('main').then(($main) => { if ($main.find('img').length > 0) { cy.log('تم العثور على فعاليات متاحة');
   cy.get('a').filter('[href*="/tickets"]').first().click();
   cy.log('انتقلنا لصفحة اختيار التذاكر بنجاح');  } 
   else {cy.log('المنصة فارغة حالياً من التذاكر');
   cy.contains('لا توجد فعاليات').should('be.visible');  }
    });
});
})