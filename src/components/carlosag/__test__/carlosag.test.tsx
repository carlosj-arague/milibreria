import React from "react";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import CarlosAG from "../carlosag"; // importo mi componente CarlosAG
describe("CarlosAG component", () => {
    it("El botón se debería renderizar correctamente", () => {
        render(<CarlosAG text='Password'/>);
        const pwsdEval = screen.getByRole("CarlosAG");
        expect(pwsdEval).toBeInTheDocument();
    });
});
