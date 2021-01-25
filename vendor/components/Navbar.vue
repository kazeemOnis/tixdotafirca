<template>
  <nav class="navbar">
    <div class="navbar__logo">
      <a href="/">
        <img src="/img/logo.svg" alt="Tix logo">
      </a>
    </div>

    <profile-dropdown :user="user" />
  </nav>
</template>

<script>
import ProfileDropdown from './widgets/ProfileDropdown'
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
  },

  components: {
    ProfileDropdown,
  }
}
</script>

<style>

</style>
