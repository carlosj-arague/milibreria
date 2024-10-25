import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; //importamos el componente Example
const meta: Meta<typeof Example> = {
 title: "MyButton",
 component: Example,
};
export default meta;
type Story = StoryObj<typeof Example>;
export const Primary: Story = {
 args: {
  text: "Button primary",
  txtcolor: 'red',
  bgcolor: 'black',
  borderColor:'pink',
  borderWidth:"10px",
  disabled: false,
  size: "small",
  onClick: () => alert("Button Primary"),
  bghover: "red",
  texthover: "black"
 },
};
export const Secondary: Story = {
 args: {
  text: "Button secondary",
  txtcolor: 'pink',
  bgcolor: 'white',
  borderColor:'blue',
  borderWidth:"10px",
  disabled: false,
  size: "small",
  onClick: () => alert("Button secondary"),
  bghover: "yellow",
  texthover: "blue"
 },
}; 