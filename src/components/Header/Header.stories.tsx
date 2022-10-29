import { ComponentMeta, ComponentStory } from "@storybook/react";

import Header from ".";

export default {
	title: "Alex/Header",
	component: Header,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const DefaultHeader = Template.bind({});
DefaultHeader.args = {
	primary: true,
	label: "Default Header",
};
