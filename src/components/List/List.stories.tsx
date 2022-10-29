import { ComponentMeta, ComponentStory } from "@storybook/react";

import List from ".";

export default {
	component: List,
	title: "Alex/List",
	argTypes: {
		backgroundColor: { control: "color" },
		size: { control: "select", options: ["sm", "md", "lg"] },
		variant: { control: "select", options: ["bg-red-500", "bg-green-500", "bg-yello-500"] },
	},
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const DefaultList = Template.bind({});
DefaultList.args = {
	primary: true,
	label: "Default List",
	classes: "yellow",
};
