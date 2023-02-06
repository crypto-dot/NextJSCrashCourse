import headerStyles from "../styles/Header.module.css"

const Header = () => {
    return (
        <div className={headerStyles.container}>
            <h1 className="title">
                <span>WebDev</span> News
            </h1>
            <p>Keep Up To Date With The Latest News</p>
        </div >
    )
}

export default Header