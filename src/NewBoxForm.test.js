import React from "react";
import NewBoxForm from "./NewBoxForm";
import { render, fireEvent } from "@testing-library/react";

describe("New Box Form", function(){

    it('renders without crashing', function(){
        render(<NewBoxForm />);
    })

    it('matches snapshot', function() {
        const { asFragment } = render(<NewBoxForm />);
        expect(asFragment()).toMatchSnapshot();
    })

   
});