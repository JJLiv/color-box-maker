import React from "react";
import Box from "./Box";
import { render } from "@testing-library/react";


describe("Box Component", function(){

    it('renders without crashing', function(){
        render(<Box />);
    });

    it("matches snapshot", function(){
        const { asFragment } = render(<box />);
        expect(asFragment()).toMatchSnapshot();
    })
});