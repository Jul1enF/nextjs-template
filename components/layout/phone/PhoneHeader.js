import styles from "@/styles/layout/phone/PhoneHeader.module.css"


export default function PhoneHeader () {

    return (
        <div className={styles.body} >
            <h1 className={styles.headerTitle}>
                App Name
            </h1>
        </div>
    )
}