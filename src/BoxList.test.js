import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";


describe("BoxList Component", () => {
   
    it("renders without crashing", function(){
        render(<BoxList />);
    });
    
    it("matches snapshot", function(){
        const { asFragment } = render(<BoxList />);
        expect(asFragment()).toMatchSnapshot();
    });

    it("should add new box", function(){
        const { queryByText, getByLabel } = render(<BoxList />);
        const input = getByLabel('Background Color:');
        const btn = queryByText('Add Color Box');

        expect(queryByText("Background Color: Blue")).not.toBeInTheDocument();
        fireEvent.change(input, {target: {value: "Blue"}});
        fireEvent.click(btn);

    })
    
});



