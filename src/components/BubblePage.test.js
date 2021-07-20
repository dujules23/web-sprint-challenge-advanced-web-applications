import React from 'react';
import MutationObserver from 'mutationobserver-shim';

import { render, screen, waitFor} from "@testing-library/react";
import BubblePage from './BubblePage';

import mockFetchColorService from "../services/fetchColorService"
// remember to add this when mocking
jest.mock("../services/fetchColorService")
test("Renders without errors", ()=> {
    // Arrange
    
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
    render(<BubblePage />)
    
    
   
    // Act
    


    // Assert
    await waitFor(() => {
      // expect(colors.getByLabel(/g/i).toHaveLength(2))
      const color2 = screen.getByText(/limegreen/i)
      const color1 = screen.getByText(/aliceblue/i)
      expect(color1).toBeInTheDocument()
      expect(color2).toBeInTheDocument()
     
    })
    screen.debug()
});