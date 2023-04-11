import Link from "next/link";
import { FC } from "react";

type optionLink = {
    value: string;
    title: string;
}

type DrodDownLinksProps = {
    placeholderTitle: string;
    links: optionLink[];
}

const DropDownLinks:FC<DrodDownLinksProps> = ({ placeholderTitle, links }) => {
    return (
        <select className="h-6 text-base bg-transparent" defaultValue="">
            <option className="bg-black text-white" value="" disabled selected>{placeholderTitle}</option>
            <option value="business" className="text-base">Business</option>
            <option value="entertainment" className="text-base">Entertainment</option>
        </select>
    )
};

export default DropDownLinks;