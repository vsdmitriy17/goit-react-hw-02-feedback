import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

export default function Statistics({ pervState, cbTotal, cbPos }) {
    const { good, neutral, bad } = pervState;
    return (
        <div>
            <p>Good: <span>{good}</span></p>
            <p>Neutral: <span>{neutral}</span></p>
            <p>Bad: <span>{bad}</span></p>
            <p>Total: <span>{cbTotal}</span></p>
            <p>Positive feedback: <span>{cbPos}</span></p>
        </div>
    );
}

// Statistics.propTypes = {
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     isOnline: PropTypes.bool.isRequired,
// }