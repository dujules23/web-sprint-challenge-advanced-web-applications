import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen} from "@testing-library/react";
import BubblePage from './BubblePage';

import mockFetchColorService from "../services/fetchColorService"

test("Renders without errors", ()=> {
    // Arrange
    render(<BubblePage />)
     
});

test("Renders appropriate number of colors passed in through mock", async ()=> {
    //Keep in mind that our service is called on mount for this component.
    mockFetchColorService.mockResolvedValueOnce({
        data: [
          {
            color: "aliceblue",
            code: {
              hex: "#f0f8ff",
            },
            id: 1,
          },
          {
            color: "limegreen",
            code: {
              hex: "#99ddbc",
            },
            id: 2,
          },
        ]
    });

    const colors = screen.getByByLabelText("svg")

    // Act
    


    // Assert
    await waitFor(() => {
      expect(screen)
    })

});