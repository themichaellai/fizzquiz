var React = require('react/addons');
var cx = React.addons.classSet;
var PropTypes = React.PropTypes;
var QuizChoice = require('./quiz-choice.jsx');
var RadioGroup = require('../radio-group.jsx');
var _ = require('underscore');

var QuizQuestion = React.createClass({displayName: 'QuizQuestion',
  getInitialState: function() {
    return {
      answerChoice: -1
    };
  },
  propTypes: {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    choices: PropTypes.array,
    questionNum: PropTypes.number.isRequired,
    correctAnswer: PropTypes.number.isRequired,
    answerDescription: PropTypes.string
  },
  render: function() {
    var _that = this;
    var choices = this.props.choices.map(function(a, i) {
      return (
        <QuizChoice
          key={i}
          name={a.label}
          label={a.label}
          value={a.label}
        />
      );
    });
    var answerDialogueClasses = cx({
      'quiz-question-answer': true,
      'answer-correct': this.props.correctAnswer === this.state.answerChoice,
      'answer-incorrect': this.props.correctAnswer !== this.state.answerChoice
    });
    var answerDialogue = (
      <div className={answerDialogueClasses}>
        <h2>The correct answer is: {this.props.choices[this.props.correctAnswer].label}</h2>
        <p>{this.props.answerDescription}</p>
      </div>
    );
    return (
      <div className="quiz-question">
        <h1>{this.props.title}</h1>
        <RadioGroup
          name="question"
          ref="question"
          onChange={this.handleChange}
          checkedIndex={this.state.answerChoice}
        >
          {choices}
        </RadioGroup>
        {this.answered()? answerDialogue : null }
      </div>
    );
  },
  answered: function() {
    return this.state.answerChoice >= 0;
  },
  handleChange: function(e) {
    var selectedIndex = this.refs.question.getCheckedIndex();
    this.setState({
      answerChoice: selectedIndex
    });
  }
});

module.exports = QuizQuestion;
