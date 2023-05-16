<template>

<div id="app">
  <router-view/>
  <Footer />
  <h1>Hello App!</h1>
  <p>
    <router-link to="/home" tag="button">Login</router-link>
  </p>
  <router-view>
  </router-view>
</div>
</template>

<script>
import Footer from "@/components/FooterView.vue"

export default {
  components: {
    FooterView
  }
}
</script>