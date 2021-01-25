<template>
  <div>
    <Navbar :user="user" />
    <main class="page">
      <nuxt />
    </main>
  </div>
</template>

<script>
import Navbar from '../components/Navbar';
import { mapState } from 'vuex';

export default {
  components: {
    Navbar,
  },

  computed: {
    ...mapState(['user']),
  }
}
</script>

<style lang="scss">
@import '@/assets/style.scss';
</style>
