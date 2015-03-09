var React = require('react/addons');
var update = React.addons.update;
var QuizQuestion = require('./quiz-question.jsx');

var Quiz = React.createClass({displayName: 'Quiz',
  getInitialState: function() {
    return {
      questions: [
        {
          title: 'This is a question',
          choices: [
            {
              label: 'Choice 1',
              value: false
            },
            {
              label: 'Choice 2',
              value: false
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
