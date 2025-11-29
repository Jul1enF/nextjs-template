import styles from "@/styles/layout/Header.module.css"
import Link from "next/link"

export default function Header() {

    return (
        <div className={styles.mainContainer} fixed-header="true">
            <Link href={'/'} style={{textDecoration : "none"}}>
                <h1 className={styles.headerTitle}>
                    App Name
                </h1>
            </Link>
        </div>
    )
}