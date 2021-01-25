<template>
  <b-dropdown no-caret>
    <template class="navbar__profile" #button-content>
      <div class="navbar__profile-pic" :style="{'background-image': `url(${user.image})`}">
      </div>
      <p class="navbar__profile-name">
        {{ user.name }}
      </p>
    </template>
    <b-dropdown-item
      v-for="option in links"
      :key="option.id"
      :href="option.route"
    >
      {{ option.name }}
    </b-dropdown-item>
  </b-dropdown>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default() {
        return {
          name: '',
          image: '',
        }
      }
    },

    links: {
      type: Array,
      default() {
        return [
          {
            id: 1,
            name: 'Your Profile',
            route: '#'
          },
          {
            id: 2,
            name: 'Events',
            route: '#'
          },
          {
            id: 3,
            name: 'Help',
            route: '#'
          },
          {
            id: 4,
            name: 'Logout',
            route: '#'
          },
        ]
      }
    }
  }
}
</script>

<style>

</style>
