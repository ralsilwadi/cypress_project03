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
      fromAbv: 'IL',
      to: [2, "Florida"],
      toAbv: 'FL',
      passengerNum: [3, "1"],
      passengers: ["Senior (65+)"],
    },
    {
      description: "Validate the booking for 1 passenger and round trip",
      radio: 1,
      cabinClass: [0, "First"],
      from: [1, "California"],
      fromAbv: 'CA',
      to: [2, "Illinois"],
      toAbv: 'IL',
      passengerNum: [3, "1"],
      passengers: ["Adult (16-64)"],
    },
    {
      description: "Validate the booking for 2 passengers and one way",
      radio: 0,
      cabinClass: [0, "Premium Economy"],
      from: [1, "New York"],
      fromAbv: 'NY',
      to: [2, "Texas"],
      toAbv: 'TX',
      passengerNum: [3, "2"],
      passengers: ["Adult (16-64)", "Child (2-11)"],
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
      bookingPage.typeDepartDate()
      if (test.radio === 1) bookingPage.typeReturnDate()
      bookingPage.selectSpecificDropdown(...test.passengerNum);
      bookingPage.setPassengers(test.passengers);
      bookingPage.clickBook();
      
      cy.contains('DEPART').should('be.visible')
      cy.contains(`${test.fromAbv} to ${test.toAbv}`).should('be.visible')
      cy.contains(bookingPage.getDate('depart' , false)).should('be.visible')
      cy.contains(`Number of Passengers: ${test.passengerNum[1]}`).should('be.visible')
      test.passengers.forEach((passenger, index) => {
        cy.contains(`Passenger ${index + 1}: ${passenger}`).should('be.visible')
      })
      cy.contains(`Cabin class: ${test.cabinClass[1]}`).should('be.visible')
      
      if (test.radio === 1) {
        cy.contains('RETURN').should('be.visible')
        cy.contains(`${test.toAbv} to ${test.fromAbv}`).should('be.visible')
        cy.contains(bookingPage.getDate('return', false)).should('be.visible')
      }
    });
  });
});
