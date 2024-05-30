import React from "react";

interface TitlePros {
    title: string;
}

const Title = ({title}: TitlePros) => {
	return <h1 className="text-3xl font-light text-white my-10">{title}</h1>;
}
export default Title;