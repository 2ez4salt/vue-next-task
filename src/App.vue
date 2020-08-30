<template>
  <router-view />
</template>

<script>
import Table from "./components/Table.vue";
import Loading from "./components/Loading.vue";

import axios from "axios";
import { getEvents } from "./services";

export default {
  name: "App",
  data: function () {
    return {
      input: "",
      result: [],
      events: [],
      status: 0,
      state: 0,
    };
  },
  components: {
    Table,
    Loading,
  },

  setup() {
    console.log("hello app");
  },
};
</script>
