var React = require('react/addons');
var update = React.addons.update;
var QuizQuestion = require('./quiz-question.jsx');

var Quiz = React.createClass({displayName: 'Quiz',
  getInitialState: function() {
    return {
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
        }
      ]
    };
  },
  render: function() {
    var _that = this;
    var questions = this.state.questions.map(function(q, i) {
      return (
        <QuizQuestion
          key={i}
          title={q.title}
          questionNum={i}
          choices={q.choices}
          changeChoiceValue={_that.changeChoiceValue}
          correctAnswer={q.correctAnswer}
          answerDescription={q.answerDescription}
        />
      );
    });
    return (
      <div className="quiz">
        {questions}
      </div>
    );
  },
  changeChoiceValue: function(qi, ci, newVal) {
    // there must be a better way to do this
    var cUpdateCommand = {};
    cUpdateCommand[ci] = {
      value: {$set: newVal}
    };
    var qUpdateCommand = {};
    qUpdateCommand[qi] = {
      choices: cUpdateCommand
    };
    var newState = update(this.state, {
      questions: qUpdateCommand
    });
    this.setState(newState);
  }
});

module.exports = Quiz;
