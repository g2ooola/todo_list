class InputField extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleKeyDown(e){
    const [KEY_CODE_ENTER, KEY_CODE_ESC] = [13, 27]

    const { submitFun, cancleFun } = this.props;
    const { value } = e.target;

    switch(e.keyCode) {
      case KEY_CODE_ENTER:
        if(value.trim()) {
          submitFun && submitFun(value)
        }
        e.target.value = '';
        break;
      case KEY_CODE_ESC:
        cancleFun && cancleFun()
      default:
        break;
    }

  }

  render () {
    const {
      defaultValue, placeholder, submitFun, cancleFun, ...others
    } = this.props

    return <div>
      <input
        type="text"
        name="new_item"
        placeholder={placeholder}
        defaultValue={defaultValue}
        onKeyDown={this.handleKeyDown}
        {...others}
      />
    </div>;
  }
}

InputField.propTypes = {
  defaultValue:   React.PropTypes.string,
  placeholder:    React.PropTypes.string,
  submitFun:      React.PropTypes.func,
  cancleFun:      React.PropTypes.func
};

InputField.defaultProps = {
  defaultValue: '',
  placeholder: 'input new item here'
};

window.App.InputField = InputField;