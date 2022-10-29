// import clsx from "clsx";
import React, { FC } from "react";

// declare type size = "sm" | "md" | "lg";

// interface IList {
// 	size: size;
// 	classes: string;
// 	variant: string;
// }

export const List: FC = (props: any) => {
	const { label } = props;

	return (
		<div
			className={
				" text-lg font-medium rounded-lg shadow-lg  text-center" + ` ${props.classes} `
			}
		>
			List - {label}
		</div>
	);
};
