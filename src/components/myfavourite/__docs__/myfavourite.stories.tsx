import type { Meta, StoryObj } from "@storybook/react";
import Example from "./example"; //importamos el componente Example
const meta: Meta<typeof Example> = {
 title: "MyFavourite",
 component: Example,
};
export default meta;
type Story = StoryObj<typeof Example>;
export const Primary: Story = {
 args: {
    color:"error",
    disabled:false,
    onClick: () => alert("MyFavourite Primary"),
 },
};
export const Secondary: Story = {
 args: {
    color:"secondary",
    disabled:true,
    onClick: () => alert("MyFavourite Secondary"),
 },
}; 