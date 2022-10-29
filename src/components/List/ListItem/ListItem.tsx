import React, { FC } from "react";

export const ListItem: FC = (props: any) => {
	const { backgroundColor } = props;

	console.log(props);
	return <div className={props.className}>ListItem</div>;
};
