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

  /**
   * Calculates and returns a formatted date string.
   * @param {string} departOrReturn - Specifies "depart" or "return" to calculate the date.
   * @param {boolean} format - Specifies whether to return the date in MM/DD/YYYY format.
   * @returns {string} The formatted date string.
   */
  getDate(departOrReturn, format) {
    const monthAbv = {
      1: "Jan",
      2: "Feb",
      3: "Mar",
      4: "Apr",
      5: "May",
      6: "Jun",
      7: "Jul",
      8: "Aug",
      9: "Sep",
      10: "Oct",
      11: "Nov",
      12: "Dec",
    };
  
    const weekAbv = {
      0: "Sun",
      1: "Mon",
      2: "Tue",
      3: "Wed",
      4: "Thu",
      5: "Fri",
      6: "Sat",
    };
  
    const today = new Date();
  
    if (departOrReturn === "depart") {
      today.setDate(today.getDate() + 7);
    } else if (departOrReturn === "return") {
      today.setMonth(today.getMonth() + 1);
    }
  
    const dayOfWeek = String(today.getDay());
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const mm2 = Number(today.getMonth() + 1);
    const yyyy = today.getFullYear();
  
    if (format) {
      return `${mm}/${dd}/${yyyy}`;
    } else {
      return `${weekAbv[dayOfWeek]} ${monthAbv[mm2]} ${dd} ${yyyy}`;
    }
  }

  /* Methods */

  /**
   * Clicks the booking button.
   */
  clickBook() {
    this.getBookButton().click();
  }

  /**
   * Clicks the "One Way" radio button.
   */
  clickOneWay() {
    this.getOneWay().children().first().click();
  }

  /**
   * Clicks the "Round Trip" radio button.
   */
  clickRoundTrip() {
    this.getRoundTrip().children().first().click();
  }

  /**
   * Clicks a specific radio button by index.
   * @param {number} index - The index of the radio button to click.
   */
  clickRadioButton(index) {
    this.getSpecificRadioButton(index).children().first().click();
  }

  /**
   * Selects an option in a specific dropdown.
   * @param {number} index - The index of the dropdown.
   * @param {string} choice - The choice to select.
   */
  selectSpecificDropdown(index, choice) {
    this.getSpecificDropdown(index).select(choice);
  }

  /**
   * Types a departure date (7 days from today) in the departure date picker.
   */
  typeDepartDate() {
    this.getSpecificDatePicker(0)
      .clear()
      .type(`${this.getDate("depart", true)}{enter}`);
  }

  /**
   * Types a return date (1 month from today) in the return date picker.
   */
  typeReturnDate() {
    this.getSpecificDatePicker(1)
      .clear()
      .type(`${this.getDate("return", true)}{enter}`);
  }

  /**
   * Sets the number of passengers in the respective dropdowns.
   * @param {string[]} passengers - Array of passenger counts (e.g., ["1", "0", "0"]).
   */
  setPassengers(passengers) {
    passengers.forEach((passenger, index) => {
      const dropdownIndex = 4 + index;
      this.selectSpecificDropdown(dropdownIndex, passenger);
    });
  }
}

export default BookingPage;
