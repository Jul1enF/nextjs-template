import styles from "@/styles/ui/ConfirmationModal.module.css"
import useLockBodyScroll from "@/hooks/useLockBodyScroll";


export default function ConfirmationModal({ visible, confirmationText, warningText, confirmationButtonText, cancelButtonText, confirmationFunction, closeModal }) {

    // Stop the scroll of the body of the page when scrolling in the menu
    useLockBodyScroll(visible);

    return (
        <>
            <div className={visible ? styles.activeOverlay : styles.disabledOverlay} onClick={closeModal}>
                <div className={`card darkGreyBg ${visible ? styles.visibleModal : styles.hiddenModal}`} onClick={(e) => e.stopPropagation()} >

                    <h3 className={styles.confirmationText}>
                        {confirmationText}
                    </h3>

                    <div className={`line ${styles.thisLine}`} />

                    <p className="warning" style={!warningText ? { height: 0, marginTop: 0 } : {}}>
                        {warningText}
                    </p>

                    <button type="button" className="regularItem brightRedBg regularText" onClick={confirmationFunction}>{confirmationButtonText}</button>

                    <button type="button" className="regularItem brightRedBg regularText" onClick={closeModal}>{cancelButtonText}</button>

                </div>

            </div>
        </>
    )
}