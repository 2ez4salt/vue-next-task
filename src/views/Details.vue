<template>
  <div class="container">
    <Loading v-if="!status"></Loading>
    <div v-if="status" class="jumbotron">
      <h1 class="display-4">{{ eventDetails?.name }}</h1>
      <hr class="my-5" />
      <p style="overflow-wrap: break-word" class="lead">
        {{
          eventDetails.description || eventDetails.info
            ? eventDetails.description || eventDetails.info
            : "No Description"
        }}
      </p>
      <hr class="my-4" />
      <img style="width: 100%" class="img-fluid" :src="imgUrl" />
      <hr class="my-5" />
      <div
        v-if="!eventDetails.priceRanges"
        class="alert alert-danger"
        role="alert"
      >
        No prices found.
      </div>
      <div class="card-deck">
        <div
          v-for="price in eventDetails.priceRanges"
          :key="price.id"
          class="card mb-4 box-shadow"
        >
          <div class="card-header cc_cursor">
            <h4 class="my-0 font-weight-normal cc_cursor">{{ price.type }}</h4>
          </div>
          <div class="card-body">
            <h2 class="card-title pricing-card-title cc_cursor">
              {{ price.min }} {{ price.currency }}
              <small class="text-muted">min</small>
              <br />
              {{ price.max }} {{ price.currency }}
              <small class="text-muted">max</small>
            </h2>
          </div>
        </div>
      </div>

      <hr class="my-4" />
      <img
        v-if="seatMapUrl"
        style="width: 100%"
        class="img-fluid"
        :src="seatMapUrl"
      />
      <h4 v-if="!seatMapUrl">No seatmap information.</h4>
    </div>
  </div>
</template>
<script>
import { getEventDetail } from "../services";
import Loading from "./../components/Loading.vue";

export default {
  name: "Details",
  props: {
    eventID: String,
  },
  components: {
    Loading,
  },
  data: function () {
    return {
      eventDetails: [],
      result: [],
      imgUrl: String,
      seatMapUrl: "",
      status: 0,
    };
  },
  async beforeMount() {
    this.status = 0;
    this.result = await getEventDetail(this.eventID);
    if (this.result.data) {
      this.eventDetails = this.result.data;
      console.log(this.eventDetails);
      if (this.eventDetails.images) {
        this.imgUrl = this.eventDetails.images[0].url;
      }
      if (this.eventDetails.seatmap) {
        this.seatMapUrl = this.eventDetails.seatmap.staticUrl;
      } else {
        this.seatMapUrl = "";
      }
    }
    this.status = 1;
  },

  methods: {},
};
</script>
