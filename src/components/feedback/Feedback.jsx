import styles from './Feedback.module.css';
import PropTypes from 'prop-types';

export default function Feedback({ onLeaveFeedback })  {
    
        return (
                <ul className={styles.feedback_btnList}>
                    <li className={styles.feedback_btnList__item}>
                        <button type="button" className={styles.feedback_btn} onClick={onLeaveFeedback}>Good</button>
                    </li>

                    <li className={styles.feedback_btnList__item}>
                        <button type="button" className={styles.feedback_btn} onClick={onLeaveFeedback}>Neutral</button>
                    </li>

                    <li className={styles.feedback_btnList__item}>
                        <button type="button" className={styles.feedback_btn} onClick={onLeaveFeedback}>Bad</button>
                    </li>
                </ul>
        );
};

Feedback.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
}