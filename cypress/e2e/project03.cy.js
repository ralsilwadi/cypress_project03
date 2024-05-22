/// <reference types="cypress"/>
import BookingPage from "../../Pages/BookingPage";

const bookingPage = new BookingPage();

describe("Book Your Trip Form Tests", () => {
  beforeEach(() => {
    cy.clickCard("Project - Booking Function");
  });

  const threeToFive = [ // 3 objects within an array to use .forEach function on test cases 3-5
    {
      description: "Validate the booking for 1 passenger and one way",
      radio: 0,
      cabinClass: "Business",
      from: "Illinois",
      to: "Florida",
      passengerNum: '1',
      passengerOne: 'Senior (65+)',
    },
    {
      description: "Validate the booking for 1 passenger and round trip",
      radio: 1,
      cabinClass: "First",
      from: "California",
      to: "Illinois",
      passengerNum: '1',
      passengerOne: 'Adult (16-64)',
    },
    {
      description: "Validate the booking for 2 passengers and one way",
      radio: 0,
      cabinClass: "Premium Economy",
      from: "New York",
      to: "Texas",
      passengerNum: '2',
      passengerOne: 'Adult (16-64)',
      passengerTwo: 'Child (2-11)',
      
    },

  ];

  it("Test Case 01 - Validate the default Book your trip form", () => {
    // Validate radio buttons
    bookingPage
      .getOneWay()
      .should("be.visible")
      .children()
      .should("be.checked");
    bookingPage
      .getRoundTrip()
      .should("be.visible")
      .children()
      .should("not.be.checked");

    // Validate visibility of labels, dropdowns, and date pickers
    bookingPage.getLabels().each(($el) => {
      cy.wrap($el).should("be.visible");
    });
    bookingPage.getDropdowns().each(($el) => {
      cy.wrap($el).should("be.visible");
    });
    bookingPage.getDatePickers().each(($el) => {
      cy.wrap($el).should("be.visible");
    });

    // Validate default values of dropdowns
    bookingPage.getDropdowns().eq(3).should("have.value", "1");
    bookingPage.getDropdowns().eq(4).should("have.value", "Adult (16-64)");

    // Validate book button
    bookingPage.getBookButton().should("be.visible").and("be.enabled");
  });

  it("Test Case 02 - Validate the Book your trip form when Round trip is selected", () => {
    bookingPage.clickRoundTrip();
    bookingPage.getOneWay().children().should("not.be.checked");

    // Validate visibility of labels, dropdowns, and date pickers
    bookingPage.getLabelsDropsAndDates().each(($el) => {
      cy.wrap($el).should("be.visible");
    });

    // Validate default values of dropdowns
    bookingPage.getSpecificDropdown(3).should("have.value", "1");
    bookingPage.getSpecificDropdown(4).should("have.value", "Adult (16-64)");

    // Validate book button
    bookingPage.getBookButton().should("be.visible").and("be.enabled");
  });

  threeToFive.forEach((test, index) => {
    it(`Test Case 0${index + 3} - ${test.description}`, () => {

    });
  });

  // it("Test Case 03 - Validate the booking for 1 passenger and one way", () => {

  // });

  // it("Test Case 04 - Validate the booking for 1 passenger and round trip", () => {});

  // it("Test Case 05 - Validate the booking for 2 passengers and one way", () => {});
});
