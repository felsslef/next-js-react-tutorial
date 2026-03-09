export default function Header(){
    return(
        <header style={styles.container}>
            <h1>logo</h1>
            <nav>
                <ul style={styles.nav}>
                    <li>home</li>
                    <li>sobre</li>
                    <li>FAQ</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>
    )
}

const styles = {
    container: {
        backgroundColor: "#fff",
        color: "#000",
        display: "flex",
        justifyContent: "space-between",
        padding: 20
    },
    nav: {
        display: "flex",
        listStyleType: "none",
        gap: 20,
        alignItems: "center"
    }
}