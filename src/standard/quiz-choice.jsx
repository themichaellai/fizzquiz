var React = require('react');
var PropTypes = React.PropTypes;

var QuizChoice = React.createClass({displayName: 'QuizChoice',
  propTypes: {
    name: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    questionNum: PropTypes.number.isRequired,
    choiceNum: PropTypes.number.isRequired
  },
  render: function() {
    var id = 'choice' + this.props.questionNum + '.' + this.props.choiceNum
    return (
      <div className="quiz-choice">
        <input
          type="radio"
          id={id}
          name={this.props.name}
          value={this.props.value}
        />
        <label htmlFor={id}>{this.props.label}</label>
      </div>
    );
  }
});

module.exports = QuizChoice;
