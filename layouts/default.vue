<template>
  <v-app dark>
    <AppBar />
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import AppBar from '@/components/Global/AppBar'
import Footer from '@/components/Global/Footer'
export default {
  components: {
    AppBar,
    Footer
  }
}
</script>
