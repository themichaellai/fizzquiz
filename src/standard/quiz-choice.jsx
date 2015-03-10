var React = require('react');
var PropTypes = React.PropTypes;

var QuizChoice = React.createClass({displayName: 'QuizChoice',
  propTypes: {
    name: PropTypes.string,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  },
  render: function() {
    return (
      <div className="quiz-choice">
        <input
          type="radio"
          id={this.props.name}
          name={this.props.name}
          value={this.props.value}
        />
        <label htmlFor={this.props.name}>{this.props.label}</label>
      </div>
    );
  }
});

module.exports = QuizChoice;
