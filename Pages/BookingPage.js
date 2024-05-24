/// <reference types="cypress"/>
class BookingPage {
  /* Locators */
  getRadioButtons() {
    return cy.get(".radio");
  }

  getSpecificRadioButton(index) {
    return this.getRadioButtons().eq(index);
  }

  getOneWay() {
    return this.getRadioButtons().eq(0);
  }

  getRoundTrip() {
    return this.getRadioButtons().eq(1);
  }

  getLabels() {
    return cy.get(".label");
  }

  getSpecificLabel(index) {
    return this.getLabels().eq(index);
  }

  getDropdowns() {
    return cy.get(".select select");
  }

  getSpecificDropdown(index) {
    return this.getDropdowns().eq(index);
  }

  getDatePickers() {
    return cy.get(".react-datepicker__input-container > input");
  }

  getSpecificDatePicker(index) {
    return this.getDatePickers().eq(index);
  }

  getBookButton() {
    return cy.get(".Button_c_button__TmkRS");
  }

  getLabelsDropsAndDates() {
    return cy.get(
      ".react-datepicker__input-container > input, .select select, .label"
    );
  }

  /* Methods */
  clickBook() {
    this.getBookButton().click();
  }

  clickOneWay() {
    this.getOneWay().children().click();
  }

  clickRoundTrip() {
    this.getRoundTrip().children().click();
  }

  clickRadioButton(index) {
    this.getSpecificRadioButton(index).children().click();
  }

  selectSpecificDropdown(index, choice) {
    this.getSpecificDropdown(index).select(choice);
  }

  setPassengers(passengers) {
    passengers.forEach((passenger, index) => {
      const dropdownIndex = 4 + index;
      this.selectSpecificDropdown(dropdownIndex, passenger);
    });
  }
}

export default BookingPage;
