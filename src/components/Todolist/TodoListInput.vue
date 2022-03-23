<template>
  <form class="TodoListInput d-flex justify-space-between align-center">
    <v-text-field
      label="Task Name"
      class="mr-4"
      v-model="taskdata"
      style="width: 200px"
      :rules="[rules.required]"
    ></v-text-field>
    <v-text-field
      label="Time (HH:MM)"
      class="mr-4"
      v-model="tasktime"
      style="width: 150px"
      :rules="[rules.required, rules.timeMatch]"
      hint="Format HH:MM"
    ></v-text-field>
    <v-text-field
      label="DD/MM/YYYY"
      class="mr-4"
      v-model="taskdate"
      style="width: 150px"
      hint="Format DD/MM/YYYY"
      :rules="[rules.required, rules.dateMatch]"
    ></v-text-field>
    <v-btn @click="addItem()" class="btn"><span>Create new task</span></v-btn>
  </form>
</template>
<script>
export default {
  data() {
    return {
      taskdata: "",
      tasktime: "",
      taskdate: "",
    };
  },
  computed: {
    rules() {
      function checkDate(strDate) {
        var comp = strDate.split("/");
        var d = parseInt(comp[0], 10);
        var m = parseInt(comp[1], 10);
        var y = parseInt(comp[2], 10);
        var date = new Date(y, m - 1, d);
        if (
          date.getFullYear() == y &&
          date.getMonth() + 1 == m &&
          date.getDate() == d
        ) {
          return true;
        }
        return false;
      }
      function checkTime(strTime) {
        if (strTime.indexOf(":") == -1) return false;
        var time = strTime.split(":");
        var h = parseInt(time[0], 10);
        var m = parseInt(time[1], 10);
        if (h > 24 || m > 60) return false;
        return true;
      }
      return {
        required: (value) => !!value || "required",
        timeMatch: (value) => checkTime(value) == true || "Dont match",
        dateMatch: (value) => checkDate(value) == true || "Dont match",
      };
    },
  },
  methods: {
    async addItem() {
      function getStringTime(tasktime, taskdate) {
        var time = tasktime.split(":");
        var h = parseInt(time[0], 10);
        var m = parseInt(time[1], 10);
        var mm;
        var hour;
        var comp = taskdate.split("/");
        var d = parseInt(comp[0], 10);
        var mo = parseInt(comp[1], 10);
        var y = parseInt(comp[2], 10);
        var dd;
        var mon;
        if (d < 10) dd = "0" + d;
        else dd = d;
        if (mo < 10) mon = "0" + mo;
        else mon = mo;
        if (h < 10) hour = "0" + h;
        else hour = h;
        if (m < 10) mm = "0" + m;
        else mm = m;
        return hour + ":" + mm + " " + dd + "/" + mon + "/" + y;
      }
      var task = {
        name: this.taskdata,
        deadline: getStringTime(this.tasktime, this.taskdate),
        status: 0,
      };
      await this.$store.dispatch("todosStore/addItem", { task });
    },
  },
};
</script>

<style>
.btn {
  padding: 0;
  border: none;
  transform: rotate(4deg);
  transform-origin: center;
  font-family: "Gochi Hand", cursive;
  text-decoration: none;
  padding-bottom: 3px;
  border-radius: 5px;
  box-shadow: 0 2px 0 hsl(198, 1%, 29%);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background-color: hsla(166, 100%, 50%, 0.7);
}
.btn span {
  display: block;
  padding: 0.5px 1px;
  border-radius: 5px;
  border: 2px solid hsl(198, 1%, 29%);
  color: black;
}
.btn:active,
.btn:focus {
  transform: translateY(4px);
}
</style>
