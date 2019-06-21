class TodoHeader extends React.Component {
  render() {
    const {userName, todoNum, title} = this.props;
    return <div>
      <div>{title}</div>
      <div>Hi, <span>{userName}</span>, there are {todoNum} thing(s) you have to do. </div>
    </div>;
  }
}

window.App.TodoHeader = TodoHeader;