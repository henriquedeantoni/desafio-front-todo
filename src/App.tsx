import { FC } from "react";
import { Link } from 'react-router-dom';
import everestLogo from "/everest-logo.svg";
import styles from './App.module.css';

const App: FC = () => (
  <div className={styles.everestApp}>
    <img className={styles.everestAppLogo} src={everestLogo} alt="Everest logo" />
    <h1 className={styles.everestAppTitle}>TODO App Challenge</h1>
    <Link to="/todos">
      <button>Enter Here</button>
    </Link>
    <p className={styles.everestAppDocs}>Read the instructions to get started!</p>
  </div>
);

export default App;
