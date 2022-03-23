export default {
  addItem(state, payload) {
    state.todos.push(payload.task);
  },
  deleteItem(state, payload) {
    state.todos.splice(payload.index, 1);
  },
  deleteAll(state) {
    state.todos = [];
  },
  rightAll(state) {
    state.todosRight = state.todosRight.concat(state.todosLeft);
    state.todosLeft = [];
  },
  leftAll(state) {
    state.todosLeft = state.todosLeft.concat(state.todosRight);
    state.todosRight = [];
  },
  rightItem(state, payload) {
    state.todosRight.push(state.todosLeft[payload]);
    state.todosLeft = state.todosLeft.filter(
      (item) => item !== state.todosLeft[payload]
    );
  },
  leftItem(state, payload) {
    state.todosLeft.push(state.todosRight[payload]);
    state.todosRight = state.todosRight.filter(
      (item) => item !== state.todosRight[payload]
    );
  },
  upItem(state, payload) {
    if (payload.status == true) {
      if (payload.index != 0) {
        var temp1 = state.todosLeft[payload.index];
        state.todosLeft[payload.index] = state.todosLeft[payload.index - 1];
        state.todosLeft[payload.index - 1] = temp1;
      } else {
        var temp2 = state.todosLeft[payload.index];
        state.todosLeft[payload.index] =
          state.todosLeft[state.todosLeft.length - 1];
        state.todosLeft[state.todosLeft.length - 1] = temp2;
      }
    } else {
      if (payload.index != 0) {
        var temp3 = state.todosRight[payload.index];
        state.todosRight[payload.index] = state.todosRight[payload.index - 1];
        state.todosRight[payload.index - 1] = temp3;
      } else {
        var temp4 = state.todosRight[payload.index];
        state.todosRight[payload.index] =
          state.todosRight[state.todosRight.length - 1];
        state.todosRight[state.todosRight.length - 1] = temp4;
      }
    }
    location.reload();
  },
  downItem(state, payload) {
    if (payload.status == true) {
      if (payload.index != state.todosLeft.length - 1) {
        var temp1 = state.todosLeft[payload.index];
        state.todosLeft[payload.index] = state.todosLeft[payload.index + 1];
        state.todosLeft[payload.index + 1] = temp1;
      } else {
        var temp2 = state.todosLeft[payload.index];
        state.todosLeft[payload.index] = state.todosLeft[0];
        state.todosLeft[0] = temp2;
      }
    } else {
      if (payload.index != state.todosRight.length - 1) {
        var temp3 = state.todosRight[payload.index];
        state.todosRight[payload.index] = state.todosRight[payload.index + 1];
        state.todosRight[payload.index + 1] = temp3;
      } else {
        var temp4 = state.todosRight[payload.index];
        state.todosRight[payload.index] = state.todosRight[0];
        state.todosRight[0] = temp4;
      }
    }
    location.reload();
  },
  checkItem(state, payload) {
    state.todos[payload].status = !state.todos[payload].status;
    // state.todos.sort(function(a, b) {
    //     return a.status > b.status ? 1 : a.status < b.status ? -1 : 0;
    // });
    // state.todos.sort(function(a, b) {
    //     return a.status == 0 && b.status == 0 && a.deadline < b.deadline ?
    //         -1 :
    //         a.status == 0 && b.status == 0 && a.deadline > b.deadline ?
    //         1 :
    //         0;
    // });
    // state.todos.sort(function(a, b) {
    //     return a.status == 1 && b.status == 1 && a.deadline < b.deadline ?
    //         -1 :
    //         a.status == 1 && b.status == 1 && a.deadline > b.deadline ?
    //         1 :
    //         0;
    // });
  },
};
