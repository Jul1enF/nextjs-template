import styles from '@/styles/pages/home/Home.module.css';

function Home() {
  return (
    <div className={styles.body}>
        <h2 className="pageTitle">
          What's next ?!
        </h2>
        <div style={{minHeight : 2000, width : "100%", backgroundColor : "red"}}/>
    </div>
  );
}

export default Home;
