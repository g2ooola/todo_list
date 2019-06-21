const { InputField } = window.App;

class TodoItem extends React.Component {
  constructor(props, context) {
    super(props, context)

    const {editable=false} = this.props

    this.state               = {editable}
    this.triggerEditMode     = this.triggerEditMode.bind(this)
    this.triggerViewMode     = this.triggerViewMode.bind(this)
    this.handleCheckedChange = this.handleCheckedChange.bind(this)
    this.handleEditTitle     = this.handleEditTitle.bind(this)
    this.handleDelete        = this.handleDelete.bind(this)
  }

  triggerEditMode() {
    this.setState({ editable: true });
  }

  triggerViewMode() {
    this.setState({ editable: false });
  }

  handleCheckedChange() {
    const {id, toggleItemFun, completed} = this.props;
    toggleItemFun && toggleItemFun(id, !completed)
  }

  handleEditTitle(newTitle) {
    const {id, editItemFun} = this.props;
    editItemFun && editItemFun(id, newTitle)
    this.triggerViewMode()
  }

  handleDelete() {
    const {deleteItemFun, id} = this.props;
    deleteItemFun && deleteItemFun(id)
  }

  render () {
    return this.state.editable ? this.renderEditMode() : this.renderViewMode()
  }

  renderViewMode () {
    const {title, id, completed } = this.props;

    return <li id={id}>
      <input type="checkbox" checked={completed} name="listItemCheck" onChange={this.handleCheckedChange} />
      <span onClick={ this.triggerEditMode } >{title}</span>
      <a href="#" onClick={ this.handleDelete } >X</a>
    </li>;
  }

  renderEditMode () {
    const {title, id} = this.props;
    return <li id={id} >
      <InputField
        autoFocus
        defaultValue = {title}
        onBlur = {this.triggerViewMode}
        submitFun = {this.handleEditTitle}
        cancleFun = {this.triggerViewMode}
      />
    </li>
  }
}
TodoItem.propTypes = {
  id: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool,
  toggleItemFun: React.PropTypes.func,
  editItemFun: React.PropTypes.func,
  deleteItemFun: React.PropTypes.func
};

TodoItem.defaultProps = {
  title: 'My Todo List',
  completed: false
};

window.App.TodoItem = TodoItem;