<template>
  <div class="justify-space-between todoitem">
    <table class="tab">
      <!-- <tr class="header">
        <th v-for="item in getHeader" :key="item.name" class="header-item">
          {{ item.text }}
          <v-icon big @click="deleteAll()" :color="'red'">
            {{ item.all ? "mdi-delete" : `` }}
          </v-icon>
        </th>
      </tr> -->
      <tr v-for="(item, index) in getTodosLeft" :key="index" class="body">
        <v-card elevation="3" @click="a(index)">
          <td class="body-item">{{ item.name }}</td>
          <td class="body-item">{{ item.deadline }}</td>
          <td class="body-item">
            <v-chip :color="item.status ? 'green' : 'lime darken-4'" dark>
              {{ item.status ? "Done" : "In Progress" }}
            </v-chip>
          </td>
          <td class="body-item">
            <v-icon
              big
              @click="checkItem(index)"
              :color="item.status ? 'green' : 'red'"
            >
              {{ item.status ? `mdi-check` : `mdi-cancel` }}
            </v-icon>
          </td>
          <td class="body-item">
            <v-icon big @click="deleteItem(index)" :color="'red'">
              mdi-delete
            </v-icon>
          </td>
        </v-card>
      </tr>
    </table>

    <div class="d-flex flex-column middle">
      <v-btn @click="upItem"
        ><v-icon style="color: black">mdi-chevron-up</v-icon></v-btn
      >
      <v-btn @click="downItem"
        ><v-icon style="color: black">mdi-chevron-down</v-icon></v-btn
      >
      <v-btn @click="rightAll"
        ><v-icon style="color: black">mdi-chevron-double-right</v-icon></v-btn
      >
      <v-btn @click="rightItem"
        ><v-icon style="color: black">mdi-chevron-right</v-icon></v-btn
      >
      <v-btn @click="leftAll"
        ><v-icon style="color: black">mdi-chevron-double-left</v-icon></v-btn
      >
      <v-btn @click="leftItem"
        ><v-icon style="color: black">mdi-chevron-left</v-icon></v-btn
      >
      <v-btn><v-icon style="color: black">mdi-close-thick</v-icon></v-btn>
    </div>

    <table class="tab">
      <!-- <tr class="header">
        <th v-for="item in getHeader" :key="item.name" class="header-item">
          {{ item.text }}
          <v-icon big @click="deleteAll()" :color="'red'">
            {{ item.all ? "mdi-delete" : `` }}
          </v-icon>
        </th>
      </tr> -->
      <tr v-for="(item, index) in getTodosRight" :key="index" class="body">
        <v-card elevation="3" @click="a2(index)">
          <td class="body-item">{{ item.name }}</td>
          <td class="body-item">{{ item.deadline }}</td>
          <td class="body-item">
            <v-chip :color="item.status ? 'green' : 'lime darken-4'" dark>
              {{ item.status ? "Done" : "In Progress" }}
            </v-chip>
          </td>
          <td class="body-item">
            <v-icon
              big
              @click="checkItem(index)"
              :color="item.status ? 'green' : 'red'"
            >
              {{ item.status ? `mdi-check` : `mdi-cancel` }}
            </v-icon>
          </td>
          <td class="body-item">
            <v-icon big @click="deleteItem(index)" :color="'red'">
              mdi-delete
            </v-icon>
          </td>
        </v-card>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  watch: {
    activeItem: 0,
    isLeft: true,
  },
  computed: {
    ...mapGetters("todosStore", [
      "getTodosLeft",
      "getTodosRight",
      "getHeader",
      "getActive",
    ]),
  },
  methods: {
    a(index) {
      this.activeItem = index;
      this.isLeft = true;
    },
    a2(index) {
      this.activeItem = index;
      this.isLeft = false;
    },
    async checkItem(index) {
      await this.$store.dispatch("todosStore/checkItem", { index });
    },
    async deleteItem(index) {
      await this.$store.dispatch("todosStore/deleteItem", { index });
    },
    async deleteAll() {
      await this.$store.dispatch("todosStore/deleteAll", {});
    },
    async rightAll() {
      console.log(this.activeItem);
      await this.$store.dispatch("todosStore/rightAll", {});
    },
    async leftAll() {
      await this.$store.dispatch("todosStore/leftAll", {});
    },
    async downItem() {
      var data = {
        index: this.activeItem,
        status: this.isLeft,
      };
      await this.$store.dispatch("todosStore/downItem", { data });
    },
    async upItem() {
      var data = {
        index: this.activeItem,
        status: this.isLeft,
      };
      await this.$store.dispatch("todosStore/upItem", { data });
    },
    async rightItem() {
      var index = this.activeItem;
      await this.$store.dispatch("todosStore/rightItem", { index });
    },
    async leftItem() {
      var index = this.activeItem;
      await this.$store.dispatch("todosStore/leftItem", { index });
    },
  },
};
</script>

<style lang="scss" scoped>
.todoitem {
  width: 100%;
  display: flex;
  flex-direction: row;
  .middle {
    .v-btn {
      margin-top: 5px;
    }
  }
}

.tab {
  width: 40%;
}

.body {
  width: 100%;
  display: flex;
  .v-card {
    width: 100%;
    display: flex;
  }
}

.body-item {
  width: 20%;
  height: auto;
  min-height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
</style>