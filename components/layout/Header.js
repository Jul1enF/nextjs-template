import styles from "@/styles/layout/Header.module.css"

export default function Header() {

    return (
        <div className={styles.mainContainer} >
            <h1 className={styles.headerTitle}>
                App Name
            </h1>
        </div>
    )
}