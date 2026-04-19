describe('search in webook', () => { // npx cypress open//
  beforeEach(() => {
        cy.visit('https://webook.com/ar')  // ar للعربيه en للانجليزية 
        cy.viewport(1280, 720)
        cy.contains(/رفض الكل الغير ضروري|reject all non-essential/i).click()
    })
   it('Search by event name', () => {
    cy.get('[data-testid="home_search_input"]').type('القدية{enter}')
    cy.contains('نتيجة البحث لـ "القدية"').should('be.visible')
  })
   it('Search with non-existing event', () => {
    cy.get('[data-testid="home_search_input"]').type('سلمى{enter}')
    cy.contains('عذراً، لم نتمكن من العثور على ما تبحث عنه.').should('be.visible')
  })
   it('Filter by date', () => {
    cy.get('[data-testid="home_search_input"]').type('سيارة{enter}')
    cy.contains('نتيجة البحث لـ "سيارة"').should('be.visible')
    cy.contains('اليوم').click()
  })
   it('Filter by price range t0 325', () => {
    cy.get('[data-testid="home_search_input"]').type('سيارة{enter}')
    cy.contains('نتيجة البحث لـ "سيارة"').should('be.visible')
    cy.get('span[aria-label="Maximum"]') .focus() .type('{rightarrow}'.repeat(2335), { delay: 0 });
  });
   it('Filter by category', () => {
    cy.get('[data-testid="home_search_input"]').type('سيارة{enter}')
    cy.contains('نتيجة البحث لـ "سيارة"').should('be.visible')
    cy.contains('الرياضة').click()
  })
   it('Filter by area', () => {
    cy.get('[data-testid="home_search_input"]').type('سيارة{enter}')
    cy.contains('نتيجة البحث لـ "سيارة"').should('be.visible')
    cy.contains('بوليفارد سيتي').click()
  })
  it('Filter by area', () => {
    cy.get('[data-testid="home_search_input"]').type('سيارة{enter}')
    cy.contains('نتيجة البحث لـ "سيارة"').should('be.visible')
    cy.contains('الرياضة').click()
    cy.contains('بوليفارد سيتي').click()
    cy.contains('تصفية الكل').click()
  })
})