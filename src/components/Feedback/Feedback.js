import React, { Component } from "react";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementGood = () => {
    this.setState((prevState) => {
      return { good: prevState.good + 1 };
    });
  };
  incrementNeutral = () => {
    this.setState((prevState) => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  incrementBad = () => {
    this.setState((prevState) => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    let total = Object.values(this.state).reduce((acc, i) => acc + i);

    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let countPositive = Math.floor(
      (this.state.good / this.countTotalFeedback()) * 100
    );

    return countPositive;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave Feedback">
          <FeedbackOptions
            options={["Good", "Neutral", "Bad"]}
            onLeaveFeedback={[
              this.incrementGood,
              this.incrementNeutral,
              this.incrementBad,
            ]}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
