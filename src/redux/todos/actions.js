const todoActions = {
  TODO_FETCH_LIST: 'TODO_FETCH_LIST',
  RECEIVE_TODO_FETCH_LIST: 'RECEIVE_TODO_FETCH_LIST',
  ERROR_TODO_FETCH_LIST: 'ERROR_TODO_FETCH_LIST',
  ADD_TODO: 'ADD_TODO',
  RECEIVE_ADD_TODO: 'RECEIVE_ADD_TODO',
  ERROR_ADD_TODO: 'ERROR_ADD_TODO',
  UPDATE_TODO: 'UPDATE_TODO',
  RECEIVE_UPDATE_TODO: 'RECEIVE_UPDATE_TODO',
  ERROR_UPDATE_TODO: 'ERROR_UPDATE_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  RECEIVE_REMOVE_TODO: 'RECEIVE_REMOVE_TODO',
  ERROR_REMOVE_TODO: 'ERROR_REMOVE_TODO',

  todoFetchList: payload => ({
    type: todoActions.TODO_FETCH_LIST,
    payload,
  }),
  receiveTodoFetchList: payload => ({
    type: todoActions.RECEIVE_TODO_FETCH_LIST,
    payload,
  }),
  errorTodoFetchList: error => ({
    type: todoActions.ERROR_TODO_FETCH_LIST,
    error,
  }),
  addTodo: payload => ({
    type: todoActions.ADD_TODO,
    payload,
  }),
  receiveAddTodo: payload => ({
    type: todoActions.RECEIVE_ADD_TODO,
    data: payload.data,
  }),
  ErrorAddTodo: error => ({
    type: todoActions.ERROR_ADD_TODO,
    error,
  }),
  updateTodo: payload => ({
    type: todoActions.UPDATE_TODO,
    payload,
  }),
  receiveUpdateTodo: payload => ({
    type: todoActions.RECEIVE_UPDATE_TODO,
    payload,
  }),
  errorUpdateTodo: payload => ({
    type: todoActions.ERROR_UPDATE_TODO,
    payload,
  }),
  removeTodo: payload => ({
    type: todoActions.REMOVE_TODO,
    payload,
  }),
  receiveRemoveTodo: payload => ({
    type: todoActions.RECEIVE_REMOVE_TODO,
    payload,
  }),
  errorRemoveTodo: payload => ({
    type: todoActions.ERROR_REMOVE_TODO,
    payload,
  }),
};

export default todoActions;
