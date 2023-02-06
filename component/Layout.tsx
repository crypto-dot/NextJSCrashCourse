import styles from "../styles/Layout.module.css";
import { ReactNode } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
const Layout = (props: { children: ReactNode }) => {
    return (
        <>
            <Navbar />
            <Header />
            <div>
                <main className={styles.main}>
                    <h1>Hello</h1>
                    {props.children}
                </main>
            </div>
        </>
    )
}

export default Layout