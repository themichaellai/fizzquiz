var React = require('react');
var PropTypes = React.PropTypes;

var QuizChoice = React.createClass({displayName: 'QuizChoice',
  propTypes: {
    name: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.bool,
    choiceNum: PropTypes.number.isRequired,
    questionNum: PropTypes.number.isRequired,
    changeChoiceValue: PropTypes.func.isRequired
  },
  render: function() {
    return (
      <div className="quiz-choice">
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <input
          type="checkbox"
          id={this.props.name}
          name={this.props.name}
          checked={this.props.value}
          onChange={this.changeValue}
        />
      </div>
    );
  },
  changeValue: function() {
    this.props.changeChoiceValue(
      this.props.questionNum, this.props.choiceNum,
      !this.props.value);
  }
});

module.exports = QuizChoice;
