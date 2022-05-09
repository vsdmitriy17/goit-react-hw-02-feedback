import styles from './App.module.css';
import Feedback from './components/feedback/Feedback.jsx';

export default function App() {
  return (
    <div className={styles.container}>
      <Feedback />
    </div>
  );
}
