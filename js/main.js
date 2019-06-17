() => {
  const { TodoApp, TodoAppContainer } = window.App;
  const all_attrs = {
    title: 'TodoList',
    userName: 'gsx'
  };
  ReactDOM.render(
    <div>
      <TodoAppContainer {...all_attrs} />
    </div>,
    document.getElementById('hello')
  )
}();