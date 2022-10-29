import { ComponentMeta, ComponentStory } from "@storybook/react";

import ListItem from ".";

export default {
	component: ListItem,
	title: "Alex/ListItem",
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} />;

export const DefaultListItem = Template.bind({});
DefaultListItem.args = {
	primary: true,
	label: "Default ListItem",
	className: "",
};
