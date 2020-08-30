import axios from "axios";

var CONSTANTS = {
  BASE_URL: "https://app.ticketmaster.com/discovery/v2/",
  EVENTS: "events.json?",
  API_KEY: "tjMDGlCJtylMdisqoo3nbkjA4TjoAQH3",
  GET_EVENTS: "events/",
  SIZE: "&size=200",
};

export async function getEvents(keyword) {
  return axios.get(
    `${CONSTANTS.BASE_URL}${CONSTANTS.EVENTS}apikey=${CONSTANTS.API_KEY}&keyword=${keyword}${CONSTANTS.SIZE}`
  );
}

export async function getEventDetail(eventID) {
  return axios.get(
    `${CONSTANTS.BASE_URL}${CONSTANTS.GET_EVENTS}${eventID}.json?apikey=${CONSTANTS.API_KEY}`
  );
}
