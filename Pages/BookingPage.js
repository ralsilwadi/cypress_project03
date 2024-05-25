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

  getDepartDate(format) {
    const monthAbv = {
      '1': 'Jan',
      '2': 'Feb',
      '3': 'Mar',
      '4': 'Apr',
      '5': 'May',
      '6': 'Jun',
      '7': 'Jul',
      '8': 'Aug',
      '9': 'Sep',
      '10': 'Oct',
      '11': 'Nov',
      '12': 'Dec'
    };
    const weekAbv = {
      '0': 'Sun',
      '1': 'Mon',
      '2': 'Tue',
      '3': 'Wed',
      '4': 'Thu',
      '5': 'Fri',
      '6': 'Sat',
    };
    const today = new Date();

    today.setDate(today.getDate() + 7);
    const dofw = String(today.getDay())
    const dd = String(today.getDate()).padStart(2, "0"); 
    const mm = String(today.getMonth() + 1).padStart(2, "0"); 
    const mm2 = Number(today.getMonth() + 1); 
    const yyyy = today.getFullYear(); 

    return format ? `${mm}/${dd}/${yyyy}` : `${weekAbv[dofw]} ${monthAbv[mm2]} ${dd} ${yyyy}`;
  }

  getReturnDate(format) {
    const monthAbv = {
      '1': 'Jan',
      '2': 'Feb',
      '3': 'Mar',
      '4': 'Apr',
      '5': 'May',
      '6': 'Jun',
      '7': 'Jul',
      '8': 'Aug',
      '9': 'Sep',
      '10': 'Oct',
      '11': 'Nov',
      '12': 'Dec'
    };
    const weekAbv = {
      '0': 'Sun',
      '1': 'Mon',
      '2': 'Tue',
      '3': 'Wed',
      '4': 'Thu',
      '5': 'Fri',
      '6': 'Sat',
    };
    const today = new Date();

    today.setMonth(today.getMonth() + 1);
    const dofw = String(today.getDay())
    const dd = String(today.getDate()).padStart(2, "0"); 
    const mm = String(today.getMonth() + 1).padStart(2, "0"); 
    const mm2 = Number(today.getMonth() + 1); 
    const yyyy = today.getFullYear(); 

    return format ? `${mm}/${dd}/${yyyy}` : `${weekAbv[dofw]} ${monthAbv[mm2]} ${dd} ${yyyy}`;
  }

  /* Methods */
  clickBook() {
    this.getBookButton().click();
  }

  clickOneWay() {
    this.getOneWay().children().first().click();
  }

  clickRoundTrip() {
    this.getRoundTrip().children().first().click();
  }

  clickRadioButton(index) {
    this.getSpecificRadioButton(index).children().first().click();
  }

  selectSpecificDropdown(index, choice) {
    this.getSpecificDropdown(index).select(choice);
  }

  typeDepartDate() {
    this.getSpecificDatePicker(0).clear().type(`${this.getDepartDate(true)}{enter}`);
  }

  typeReturnDate() {
    this.getSpecificDatePicker(1).clear().type(`${this.getReturnDate(true)}{enter}`);
  }

  setPassengers(passengers) {
    passengers.forEach((passenger, index) => {
      const dropdownIndex = 4 + index;
      this.selectSpecificDropdown(dropdownIndex, passenger);
    });
  }
}

export default BookingPage;
