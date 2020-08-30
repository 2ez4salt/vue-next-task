<template>
  <div class="container">
    <img
      @click="deneme()"
      alt="Vue logo"
      src="https://tarfin.com/img/logo.svg"
    />
    <br />
    <br />
    <div class="input-group flex-nowrap">
      <input
        v-model="input"
        type="text"
        class="form-control"
        placeholder="Keyword"
      />
    </div>
    <button
      :disabled="input.length === 0"
      style="margin: 20px"
      @click="searchEvent(input)"
      class="btn btn-primary"
    >
      Search
    </button>
    <br />
    <Table v-if="!state" :events="events" />
    <Loading v-if="state" />
    <div v-if="status" class="alert alert-danger" role="alert">
      Nothing Found!
    </div>
  </div>
</template>

<script>
import Table from "./../components/Table.vue";
import Loading from "./../components/Loading.vue";

import axios from "axios";
import { getEvents } from "./../services";

export default {
  name: "Home",
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
  methods: {
    async searchEvent(input) {
      this.state = 1;
      this.status = 0;
      this.result = await getEvents(input);
      if (this.result.data._embedded) {
        this.events = this.result.data._embedded.events;
      } else {
        this.events = [];
        this.status = 1;
      }
      this.state = 0;
    },
  },
};
</script>
