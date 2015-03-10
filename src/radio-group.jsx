// Derived from https://github.com/chenglou/react-radio-group
var React = require('react');
var PropTypes = React.PropTypes;

var RadioGroup = React.createClass({
  propTypes: {
    checkedIndex: PropTypes.number.isRequired
  },
  componentDidMount: function() {
    this.setRadioNames();
    this.setCheckedRadio();
  },

  componentDidUpdate: function() {
    this.setRadioNames();
    this.setCheckedRadio();
  },

  render: function() {
    return (
      <div onChange={this.props.onChange}>
        {this.props.children}
      </div>
    );
  },

  setRadioNames: function() {
    // stay DRY and don 't put the same `name` on all radios manually. Put it on
    // the tag and it'll be done here
    var $radios = this.getRadios();
    for (var i = 0, length = $radios.length; i < length; i++) {
      $radios[i].setAttribute('name', this.props.name);
    }
  },

  getRadios: function() {
    return this.getDOMNode().querySelectorAll('input[type="radio"]');
  },

  setCheckedRadio: function() {
    if (this.props.checkedIndex >= 0) {
      var $radios = this.getRadios();
      $radios[this.props.checkedIndex].checked = true
    }
  },

  getCheckedValue: function() {
    var $radios = this.getRadios();
    var i = this.getCheckedIndex()
    if (i) {
      return $radios[i].value;
    }
    return null;
  },
  getCheckedIndex: function() {
    var $radios = this.getRadios();

    for (var i = 0, length = $radios.length; i < length; i++) {
      if ($radios[i].checked) {
        return i;
      }
    }
    return null;
  }
});

module.exports = RadioGroup;
