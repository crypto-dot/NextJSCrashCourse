import NavStyles from "../styles/Navbar.module.css";
import Link from "next/link";
const Navbar = () => {
    return (
        <nav className={NavStyles.nav}>
            <ul className={NavStyles.ul}>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar