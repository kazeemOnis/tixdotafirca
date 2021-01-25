import Vue from 'vue';1
import 'vue-material-design-icons/styles.css';
import flag from 'vue-material-design-icons/Flag.vue';
import arrowRight from 'vue-material-design-icons/ArrowRight.vue';

export default function materialIcons () {
  Vue.component('flag-icon', flag)
  Vue.component('arrowRight-icon', arrowRight)
}
