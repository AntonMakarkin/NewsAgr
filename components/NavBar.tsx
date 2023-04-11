import Link from "next/link";
import { FC, useState } from "react";
import { useRouter } from "next/router";
import DropDownLinks from "./DropDownLinks";

const NavBar:FC = () => {
    const [link, setLink] = useState();
    const router = useRouter();
    console.log(router.pathname)
    return (
        <header className="max-sm:px-2 px-10 py-4 flex items-center bg-black text-white text-3xl">
            <h2 className="mr-4">NewsAggr</h2>
            <nav className="flex items-center">
                    <Link className="text-white text-base ml-4 mr-4 block" href="/">Breaking</Link>
                    <Link className="text-white text-base ml-4 mr-8 block" href="/search">Search</Link>
                    <DropDownLinks/>
            </nav>
        </header>
    )
};

export default NavBar;