import styles from '@/styles/pages/home/Home.module.css';
import ConfirmationModal from '@/components/ui/ConfirmationModal';
import { useState } from 'react';

function Home() {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <div className="pageBody">
      <h2 className="pageTitle">
        What's next ?!
      </h2>

      <button className='regularItem strongRedBg regularText' onClick={() => setModalVisible(true)}>
        Confirmation
      </button>

      <ConfirmationModal visible={modalVisible} confirmationText={"Êtes vous sûr de vouloir gagner 1 million d'euros ?"} confirmationButtonText={"Oui je suis sûr"} cancelButtonText={"Non je préfère un chocolat"} confirmationFunction={()=> setModalVisible(false)} closeModal={() => setModalVisible(false)}/>

    </div>
  );
}

export default Home;
