import styles from '@/styles/pages/home/Home.module.css';
import ConfirmationModal from '../ui/ConfirmationModal';
import { useState } from 'react';

function Home() {
  const [modalVisible, setModalVisible]=useState(false)
  const confirmationFunction = () => {
    setModalVisible(false)
    console.log("Modal closed !!")
  }

  return (
    <div className={styles.body}>
        <h2 className="pageTitle">
          What's next ?!
        </h2>

        <button onClick={()=>console.log("CLICK FIRST BUTTON")}>CLICK ME</button>

        <p style={{ fontSize : 23, marginBlock : 0}}>hbqsjdhbqjsbdhjqb sdhqbs bqsjhd bqhs dhqsdh qhs dhjq s vqhsdv hqjsvdjhqvsdjhqvsjhd qjhsdv jhqsv djhqvs dhjqbsdjhbqsjhdb qjhsdb qjhsb djhqbs djhqbsdhbq sjhdb qhjsbdjhqsb djhqbsdjhqb sdjhbqshdbqhjsdbqhjs bdjhqs bdhqbs djhbq sjhdb qsjhdbqjhsdbnsd  kjsndfj sdkjf nskjdf nsjkdn fjksdn fjksn djns dj fnsdkjf nsjkd nfsjkd nkjsdn fjksnd fjksn djkfns dkjfnsdjk nsjd fnkjsd nfkjs dnjksn dfjsn dfjsn dkjsd njnd skjj nsdjnfj sdnjkfn sdkjfnsdjsd f  ksdn jdn fjkns dfn</p>

        <button onClick={()=>setModalVisible(!modalVisible)}>MODAL</button>

        <div style={{minWidth : 200, minHeight : 3000, backgroundColor : "red"}}></div>

        <ConfirmationModal visible={modalVisible} confirmationText="Êtes vous sûr de vouloir donner dix mille euros à des gens qui n'en ont pas besoin ?" confirmationButtonText={"Oui je suis sûr"} cancelButtonText={"Non, annuler"} confirmationFunction={confirmationFunction} closeModal={()=>setModalVisible(false)}  />
    </div>
  );
}

export default Home;
