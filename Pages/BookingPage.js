class BookingPage {

  /* Locators */
  getRadioButtons() {
    return cy.get('.radio')
  }

  getSpecificRadioButton(index) {
    return cy.get('.radio').eq(index)
  }

  getOneWay() {
    return cy.get('.radio').eq(0)
  }

  getRoundTrip() {
    return cy.get('.radio').eq(1)
  }

  getLabels() {
    return cy.get('.label')
  }

  getSpecificLabel(index) {
    return cy.get('.label').eq(index)
  }

  getDropdowns() {
    return cy.get('.select select')
  }

  getSpecificDropdown(index) {
    return cy.get('.select select').eq(index)
  }

  getDatePickers() {
    return cy.get('.react-datepicker__input-container > input')
  }

  getSpecificDatePicker(index) {
    return cy.get('.react-datepicker__input-container > input').eq(index)
  }

  getBookButton() {
    return cy.get('.Button_c_button__TmkRS')
  }

  getLabelsDropsAndDates() {
    return cy.get('.react-datepicker__input-container > input, .select select, .label')
  }


  /* Methods */
  clickBook() {
    this.getBookButton().realClick()
  }

  clickOneWay() {
    this.getOneWay().children().realClick()
  }
  
  clickRoundTrip() {
    this.getRoundTrip().children().realClick()
  }


}

export default BookingPage