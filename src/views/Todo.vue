<template>
  <div class="bodya">
    <div class="container">
      <div class="d-flex align-center flex-column">
        <div class="heading">
          <img
            class="heading__img"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg"
          />
          <h1 class="heading__title">To-Do List</h1>
        </div>
        <todo-list-input />
        <todo-list-items />
      </div>
    </div>
  </div>
</template>

<script>
//
import TodoListInput from "../components/Todolist/TodoListInput.vue";
import TodoListItems from "../components/Todolist/TodoListItems.vue";
export default {
  components: {
    TodoListInput,
    TodoListItems,
  },
  sorting() {
    this.data.sort(function (a, b) {
      return a.status > b.status ? 1 : a.status < b.status ? -1 : 0;
    });
    this.data.sort(function (a, b) {
      return a.status == 0 && b.status == 0 && a.deadline < b.deadline
        ? -1
        : a.status == 0 && b.status == 0 && a.deadline > b.deadline
        ? 1
        : 0;
    });
    this.data.sort(function (a, b) {
      return a.status == 1 && b.status == 1 && a.deadline < b.deadline
        ? -1
        : a.status == 1 && b.status == 1 && a.deadline > b.deadline
        ? 1
        : 0;
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Gochi+Hand");
.bodya {
  background-color: #000000;
  min-height: 70vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: hsl(198, 1%, 29%);
  font-family: "Gochi Hand", cursive;
  text-align: center;
  font-size: 130%;
}
.container {
  margin: 2vh;
  width: 200%;
  height: auto;
  min-height: 96vh;
  max-width: 1500px;
  min-width: 800px;
  background: #f1f5f8;
  background-image: radial-gradient(#bfc0c1 7.2%, transparent 0);
  background-size: 25px 25px;
  border-radius: 20px;
  box-shadow: 4px 3px 7px 2px #00000040;
  box-sizing: border-box;
}
.heading {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}
.heading__title {
  transform: rotate(2deg);
  padding: 0.2rem 1.2rem;
  border-radius: 20% 5% 20% 5%/5% 20% 25% 20%;
  background-color: hsla(166, 100%, 50%, 0.7);
  font-size: 1.5rem;
}
::-webkit-scrollbar {
  display: none;
}
</style>
