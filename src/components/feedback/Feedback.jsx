// import PropTypes from 'prop-types';
import Statistics from './statistics/Statistics.jsx';
import styles from './Feedback.module.css';
import React, { Component } from 'react';

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    goodIncrement = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1,
            }
        });
    };

    neutralIncrement = () => {
        this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1,
            }
        });
    };

    badIncrement = () => {
        this.setState((prevState) => {
            return {
                bad: prevState.bad + 1,
            }
        });
    };

    countTotalFeedback = () => {
        return (this.state.good + this.state.neutral + this.state.bad);
    };

    countPositiveFeedbackPercentage = () => {
        return (this.state.good * 100 / (this.state.good + this.state.neutral + this.state.bad));
    };
    
    render() {
        const { good, neutral, bad } = this.state;
        return (
            <div>
                <p className={styles.feedback_title}>Please leave feedback</p>
                <ul className={styles.feedback_btnList}>
                    <li className={styles.feedback_btnList__item}>
                        <button type="button" className={styles.feedback_btn} onClick={this.goodIncrement}>Good</button>
                    </li>

                    <li className={styles.feedback_btnList__item}>
                        <button type="button" className={styles.feedback_btn} onClick={this.neutralIncrement}>Neutral</button>
                    </li>

                    <li className={styles.feedback_btnList__item}>
                        <button type="button" className={styles.feedback_btn} onClick={this.badIncrement}>Bad</button>
                    </li>
                </ul>
                <p className={styles.feedback_title}>Statistics</p>
                {(good || neutral || bad) ? (
                    <Statistics
                        pervState={this.state}
                        cbTotal={this.countTotalFeedback()}
                        cbPos={this.countPositiveFeedbackPercentage()}
                    />
                ) : null}
            </div>
        );
    };
};

export default Feedback;