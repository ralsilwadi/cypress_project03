/// <reference types="cypress"/>
import BookingPage from "../../Pages/BookingPage";

const bookingPage = new BookingPage();

describe("Book Your Trip Form Tests", () => {
  beforeEach(() => {
    cy.clickCard("Project - Booking Function");
  });

  const threeToFive = [
    {
      description: "Validate the booking for 1 passenger and one way",
      radio: 0,
      cabinClass: [0, "Business"],
      from: [1, "Illinois"],
      to: [2, "Florida"],
      passengerNum: [3, '1'],
      passengers: ['Senior (65+)'],
    },
    {
      description: "Validate the booking for 1 passenger and round trip",
      radio: 1,
      cabinClass: [0, "First"],
      from: [1, "California"],
      to: [2, "Illinois"],
      passengerNum: [3, '1'],
      passengers: ['Adult (16-64)'],
    },
    {
      description: "Validate the booking for 2 passengers and one way",
      radio: 0,
      cabinClass: [0, "Premium Economy"],
      from: [1, "New York"],
      to: [2, "Texas"],
      passengerNum: [3, '2'],
      passengers: ['Adult (16-64)', 'Child (2-11)'],
    },
  ];

  const validateVisibility = () => {
    bookingPage.getLabels().each(($el) => {
      cy.wrap($el).should("be.visible");
    });
    bookingPage.getDropdowns().each(($el) => {
      cy.wrap($el).should("be.visible");
    });
    bookingPage.getDatePickers().each(($el) => {
      cy.wrap($el).should("be.visible");
    });
  };

  const validateDefaultValues = () => {
    bookingPage.getSpecificDropdown(3).should("have.value", "1");
    bookingPage.getSpecificDropdown(4).should("have.value", "Adult (16-64)");
  };

  it("Test Case 01 - Validate the default Book your trip form", () => {
    bookingPage.getOneWay().should("be.visible").children().should("be.checked");
    bookingPage.getRoundTrip().should("be.visible").children().should("not.be.checked");

    validateVisibility();

    validateDefaultValues();

    bookingPage.getBookButton().should("be.visible").and("be.enabled");
  });

  it("Test Case 02 - Validate the Book your trip form when Round trip is selected", () => {
    bookingPage.clickRoundTrip();
    bookingPage.getOneWay().children().should("not.be.checked");

    validateVisibility();

    validateDefaultValues();

    bookingPage.getBookButton().should("be.visible").and("be.enabled");
  });

  threeToFive.forEach((test, index) => {
    it(`Test Case 0${index + 3} - ${test.description}`, () => {
      bookingPage.clickRadioButton(test.radio);
      bookingPage.selectSpecificDropdown(...test.cabinClass);
      bookingPage.selectSpecificDropdown(...test.from);
      bookingPage.selectSpecificDropdown(...test.to);
      bookingPage.selectSpecificDropdown(...test.passengerNum);
      bookingPage.setPassengers(test.passengers)
      bookingPage.clickBook()
    });
  });
});
