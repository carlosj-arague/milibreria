import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyFavouriteBorder from "../myfavouriteborder";
describe("MyFavouriteBorder component", () => {
    it("El botón se debería renderizar correctamente", () => {
        render(<MyFavouriteBorder color="error" />);
        const myfavouriteb = screen.getByRole("MyFavouriteBorder");
        expect(myfavouriteb).toBeInTheDocument();
    });
});
