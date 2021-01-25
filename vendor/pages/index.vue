<template>
  <div class="container">
    <div class="page__heading">
      <h1 class="page__title">
        your attendees
      </h1>
      <button class="page__button" @click="guessNationalities()">
        <b-spinner small v-if="loading"></b-spinner>
        <flag-icon v-if="!loading"/>
        <span class="page__button-text">
          guess nationalities
        </span>
        <arrowRight-icon v-if="!loading"/>
      </button>
    </div>

    <div class="page__data">
      <b-table
        ref="table"
        class="mb-5"
        striped
        hover
        responsive
        :items="data"
        :per-page="perPage"
        :current-page="currentPage"
        :fields="fields" />

        <b-pagination
          v-model="currentPage"
          :total-rows="data.length"
          pills
           align="center"
          :per-page="perPage" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  /**
   * Async data is used to fetch a list of countries with their emoji
   */
  async asyncData({ store }) {
    const countries = await store.dispatch('api/getResource', {
      route: 'https://unpkg.com/country-flag-emoji-json@1.0.2/json/flag-emojis-by-code.json',
    });

    return  { countries };
  },

  computed: {
    ...mapState(['attendees']),

    data() {
      return this.attendees.map((attendee) => {
        attendee.nationality = '';
        return attendee;
      });
    },

    pageStart() {
      return (this.currentPage - 1) * this.perPage;
    },

    length() {
      return this.pageStart + this.perPage
    }
  },

  data() {
    return {
      fields: [
        'name', 'email', 'gender', 'nationality'
      ],
      perPage: 10,
      currentPage: 1,
      loading: false
    };
  },

  methods: {
    /**
     * Get all the names of attendees currently displayed
     * and create the query string
     * @returns {string} Names of displayed attendees
     */
    getAttendeeNames() {
      let queryString = `?name[]=`;
      for (let i = this.pageStart; i < this.length; i += 1) {
        if (i === this.pageStart) {
          queryString += `${this.data[i].name}`;
        } else queryString += `&name=${this.data[i].name}`;
      }
      return queryString
    },

    /**
     * Using nationalize.io API guess the attendees
     * nationality using their names
     */
    async guessNationalities() {
      const queryString = this.getAttendeeNames();
      this.loading = true;
      const res = await this.$store.dispatch('api/getResource', {
        route: `https://api.nationalize.io/${queryString}`,
      });
      this.loading = false;
      this.setNationalities(res);
    },

    /**
     * Set the nationalities of each displayed user
     * @param {array}
     */
    setNationalities(list) {
      let country = '';
      for (let i = this.pageStart, j = 0; i < this.length; i += 1, j += 1) {
        if (list[j].country.length > 0) {
          country = this.countries[list[j].country[0].country_id];
          this.data[i].nationality = `${country.emoji} ${country.name}`;
        }
        else this.data[i].nationality = 'No guess country';
      }
      // refresh the table data
      this.$refs.table.refresh();
    }
  }
};
</script>

<style>
</style>
