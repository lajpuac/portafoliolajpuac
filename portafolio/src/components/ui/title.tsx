import React from "react";

interface TitlePros {
    title: string;
}

const Title = ({title}: TitlePros) => {
	return <h1 className="text-3xl font-light text-white my-6">{title}</h1>;
}
export default Title;