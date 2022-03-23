export default {
  addItem(context, payload) {
    context.commit("addItem", payload);
  },
  checkItem(context, payload) {
    context.commit("checkItem", payload.index);
  },
  deleteItem(context, payload) {
    context.commit("deleteItem", payload.index);
  },
  deleteAll(context, payload) {
    context.commit("deleteAll", payload);
  },
  rightAll(context, payload) {
    context.commit("rightAll", payload);
  },
  leftAll(context, payload) {
    context.commit("leftAll", payload);
  },
  upItem(context, payload) {
    context.commit("upItem", payload.data);
  },
  downItem(context, payload) {
    context.commit("downItem", payload.data);
  },
  rightItem(context, payload) {
    context.commit("rightItem", payload.index);
  },
  leftItem(context, payload) {
    context.commit("leftItem", payload.index);
  },
};
