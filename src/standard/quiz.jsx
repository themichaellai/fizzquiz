var React = require('react');
var PropTypes = React.PropTypes;
var QuizQuestion = require('./quiz-question.jsx');

var Quiz = React.createClass({displayName: 'Quiz',
  propTypes: {
    questions: PropTypes.array.isRequired
  },
  render: function() {
    var _that = this;
    var questions = this.props.questions.map(function(q, i) {
      return (
        <QuizQuestion
          key={i}
          title={q.title}
          questionNum={i}
          choices={q.choices}
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
  }
});

module.exports = Quiz;
