import React, { Component } from "react";
import { Content } from "./AppStyled";
import FeedbackOptions from "./components/FeedBackOption/FeedBackOption";
import Notification from "./components/Notification/Notification";
import Section from "./components/Section/Section";
import Statistic from "./components/Statistic/Statistic";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, item) => (total += item), 0);

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  handleOnClickButton = (buttonName) =>
    this.setState({ [buttonName]: this.state[buttonName] + 1 });

  render() {
    const total = this.countTotalFeedback();
    const { good, bad, neutral } = this.state;

    return (
      <Content>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleOnClickButton}
          />
        </Section>
        <Section title="Statictics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Content>
    );
  }
}
