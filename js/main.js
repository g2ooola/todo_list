const { createStore, combineReducers, applyMiddleware } = Redux;
const { Provider } = ReactRedux;
const { TodoAppContainer, reducers } = window.App;

const thunkMiddleware = ({ dispatch, getState }) => {
  return (next) => (action) => {
    // 1. 判斷 action 是否為 thunk function，是的話執行它，並將 dispatch 函數傳進去
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
    // 2. 如果 action 不是 thunk，將 action 交給下一個 middleware
    return next(action);
  };
};

// 1. 將 reducers 集合物件轉換成一個 reducer 函數
const composedReducer = combineReducers(reducers);
// 2. 使用 reducer 函數，建立 Store 實例，Store 會將改變狀態邏輯委託給 reducer 實作
const store = createStore(
  composedReducer,
  applyMiddleware(thunkMiddleware)
);

// 3. 將原本 index.html 中的程式移來這裡，記得移除原本的
ReactDOM.render(
  <Provider store={store}>
    <TodoAppContainer />
  </Provider>,
  document.getElementById('app')
);