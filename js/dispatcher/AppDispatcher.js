// const dispatcher = new Flux.Dispatcher();

// // 1. 在 Store 中，可以使用 register() 註冊 callback
// dispatcher.register((action) => {
//   // 根據 action.type 做不同的事情，例如更新 Store 中的資料狀態
//   switch (action.type) {
//     case 'CREATE_TODO': break;
//     case 'UPDATE_TODO': break;
//     case 'DELETE_TODO': break;
//     case 'TOGGLE_TODO': break;
//   }
// });

// // 2. 在 Action Creator 中，可以使用 dispatch() 傳遞 action：
// //    Dispatcher 會將 action 廣播給所有註冊的 callback function（就是上方 register() 中的參數）
// const createTodoActionCreator = (title) => {
//   const action = {
//     type: 'CREATE_TODO',
//     title
//   };
//   dispatcher.dispatch(action);
// }

window.App.AppDispatcher = new Flux.Dispatcher();