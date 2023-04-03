import Link from "next/link";
import { FC } from "react";

const NavBar:FC = () => {
    return (
        <header className="flex">
            NewsAggr
            <nav>
                <ul className="flex">
                    <li>
                        <Link href="/">Breaking</Link>
                    </li>
                    <li>
                        <Link href="/search">Search</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default NavBar;