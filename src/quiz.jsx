var React = require('react');
var StandardQuiz = require('./standard/quiz.jsx');

var Quiz = React.createClass({displayName: 'Quiz',
  getInitialState: function() {
    return {
      quizType: 'standard',
      questions: [
        {
          title: 'This is a question',
          correctAnswer: 1,
          answerDescription: 'Choice 2 is the logical correct choice, duh',
          choices: [
            {
              label: 'Choice 1',
            },
            {
              label: 'Choice 2',
            }
          ]
        },
        {
          title: 'This is another question',
          correctAnswer: 0,
          answerDescription: 'Choice 1 is the logical correct choice, duh',
          choices: [
            {
              label: 'Choice 1',
            },
            {
              label: 'Choice 2',
            }
          ]
        }
      ]
    };
  },
  quizTypes: {
    standard: StandardQuiz
  },
  render: function() {
    var QuizType = this.quizTypes[this.state.quizType];
    if (QuizType === undefined) {
      return (
        <h1>Invalid quiz type!</h1>
      );
    } else {
      return (
        <QuizType
          questions={this.state.questions}
        />
      );
    }
  }
});

module.exports = Quiz;
