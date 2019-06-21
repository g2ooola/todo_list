const { createStore, combineReducers, applyMiddleware } = Redux;
const { Provider } = ReactRedux;
const { TodoAppContainer, reducers } = window.App;

const thunkMiddleware = ({ dispatch, getState }) => {
  return (next) => (action) => {
    // input 是 function (thunk function)，以 { dispatch, getState } 為參數執行它
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
    // 到這邊會是一般的 action, pass 給下一個 middleware
    return next(action);
  };
};

// 1. 將 reducers 正規化
const composedReducer = combineReducers(reducers);
// use reducer & middleware to create store
const store = createStore(
  composedReducer,
  applyMiddleware(thunkMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <TodoAppContainer />
  </Provider>,
  document.getElementById('app')
);