<template>
  <div v-if="events.length !== 0" class="alert alert-success" role="alert">
    Found {{ events.length }} events!
  </div>
  <div class="table-responsive">
    <table
      v-if="events.length !== 0"
      id="dtBasicExample"
      class="table table-striped table-bordered table-sm"
      cellspacing="0"
      width="100%"
    >
      <thead>
        <tr>
          <th @click="sort()" class="th-sm">Name</th>
          <th class="th-sm">ID</th>
          <th class="th-sm">Locale</th>
          <th class="th-sm">Details</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event in events.slice(count - 10, count)" :key="event.id">
          <td class="center">{{ event.name }}</td>
          <td class="center">{{ event.id }}</td>
          <td class="center">{{ event.locale }}</td>
          <td>
            <router-link
              :to="{ name: 'details', params: { eventID: event.id } }"
            >
              <button style="margin: 10px" class="btn btn-danger">
                Go Details
              </button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <button
    :disabled="count == 10"
    v-if="events.length != 0"
    @click="prev()"
    style="margin: 10px"
    class="btn btn-secondary"
  >
    Previous
  </button>
  <button
    :disabled="count >= this.events.length"
    v-if="events.length !== 0"
    @click="next()"
    style="margin: 10px"
    class="btn btn-secondary"
  >
    Next
  </button>
</template>

<style scoped>
.center {
  vertical-align: middle;
}
</style>

<script>
export default {
  name: "Table",
  props: {
    events: Array,
    msg: String,
  },
  data() {
    return {
      count: 10,
    };
  },
  methods: {
    next() {
      this.count += 10;
    },
    prev() {
      this.count -= 10;
    },
  },
  mounted() {
    console.log(this.events);
    this.events.sort(function (a, b) {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
  },
};
</script>
