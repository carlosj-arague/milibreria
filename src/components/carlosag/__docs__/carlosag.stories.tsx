import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; //importamos el componente Example
const meta: Meta<typeof Example> = {
 title: "CarlosAG",
 component: Example,
};
export default meta;
type Story = StoryObj<typeof Example>;
export const Primary: Story = {
 args: {
  text: "Password",
  disabled: false,
 },
};
export const Secondary: Story = {
 args: {
 text: "Password",
 disabled: true,
 },
}; 