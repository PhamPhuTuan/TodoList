import todosActions from "./todosActions";
import todosGetters from "./todosGetters";
import todosMutations from "./todosMutations";

export default {
  namespaced: true,
  state: () => ({
    header: [
      { text: "Task", value: "Task", all: 0 },
      { text: "Deadline", value: "Deadline", all: 0 },
      { text: "Status", value: "Status", all: 0 },
      { text: "Done", value: "Done", all: 0 },
      { text: "Remove", value: "Remove", all: 1 },
    ],
    todosLeft: [
      {
        name: "Codea",
        deadline: "08:00 19/01/2022",
        status: 0,
      },
      {
        name: "Codeb",
        deadline: "08:00 20/01/2022",
        status: 0,
      },
      {
        name: "Codec",
        deadline: "08:00 15/01/2022",
        status: 1,
      },
      {
        name: "Coded",
        deadline: "08:00 23/01/2022",
        status: 1,
      },
    ],
    todosRight: [
      {
        name: "Codee",
        deadline: "08:00 19/01/2022",
        status: 0,
      },
      {
        name: "Codef",
        deadline: "08:00 20/01/2022",
        status: 0,
      },
      {
        name: "Codeg",
        deadline: "08:00 15/01/2022",
        status: 1,
      },
      {
        name: "Codeh",
        deadline: "08:00 23/01/2022",
        status: 1,
      },
    ],
  }),
  getters: todosGetters,
  mutations: todosMutations,
  actions: todosActions,
};
