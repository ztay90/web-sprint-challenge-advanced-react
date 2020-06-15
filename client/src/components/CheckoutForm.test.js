import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

  test("form header renders", () => {
    const { getByLabelText, getByText, findAllByText } = render(<CheckoutForm />);
  });

  test("form shows success message on submit with form details", () => {
    const { getByLabelText, getByText, findAllByText } = render(<CheckoutForm />);
    const firstNameInput = getByLabelText(/First Name/i);
    const lastNameInput = getByLabelText(/Last Name/i);
    const addressInput = getByLabelText(/Address/i);
  
    fireEvent.change(firstNameInput, {
      target: { name: "firstName", value: "zacahary" }
    });
    fireEvent.change(lastNameInput, {
      target: { name: "lastName", value: "taylor" }
    });
    fireEvent.change(addressInput, {
      target: { name: "address", value: "4968 bertie cir" }
    });
  });