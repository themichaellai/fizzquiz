var React = require('react');
var PropTypes = React.PropTypes;
var QuizChoice = require('./quiz-choice.jsx');

var QuizQuestion = React.createClass({displayName: 'QuizQuestion',
  propTypes: {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    choices: PropTypes.array,
    questionNum: PropTypes.number.isRequired,
    changeChoiceValue: PropTypes.func.isRequired
  },
  render: function() {
    var _that = this;
    var choices = this.props.choices.map(function(a, i) {
      return (
        <QuizChoice
          key={i}
          name={a.label}
          label={a.label}
          value={a.value}
          choiceNum={i}
          questionNum={_that.props.questionNum}
          changeChoiceValue={_that.props.changeChoiceValue}
        />
      );
    });
    return (
      <div className="quiz-question">
        <h1>{this.props.title}</h1>
        <div className="quiz-question">
          {choices}
        </div>
      </div>
    );
  },
  changeValue: function() {
  }
});

module.exports = QuizQuestion;
