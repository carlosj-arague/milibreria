import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import MyFavourite from "../myfavourite";
describe("MyFavourite component", () => {
    it("El botón se debería renderizar correctamente", () => {
        render(<MyFavourite color="error" />);
        const myfavourite = screen.getByRole("MyFavourite");
        expect(myfavourite).toBeInTheDocument();
    });
});
