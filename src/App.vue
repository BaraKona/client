<template>
  <div id="app">
    <!--<PostComponent />-->
    <Navigation />
    <Dashboardbackground />
    <Dashboard />
    <Novum />
    <News />
    <Community />
    <NewsletterBackground />
    <Newsletter/>
    <Footer />
  </div>
</template>

<script>
//import PostComponent from './components/PostComponent.vue'
import Navigation from './components/Navigation.vue'
import Dashboardbackground from './components/Dashboard-background.vue'
import Dashboard from './components/Dashboard.vue'
import Novum from './components/Novum.vue'
import News from './components/News'
import Community from './components/Community'
import NewsletterBackground from './components/NewsletterBackground.vue'
import Newsletter from './components/Newsletter.vue'
import Footer from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    //PostComponent,
    Navigation,
    Dashboardbackground,
    Dashboard,
    Novum, 
    News,
    Community,
    NewsletterBackground,
    Newsletter,
    Footer
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  box-sizing: border-box;
}
body{
    font-family: Arial, sans-serif;
    overflow-x: hidden;
    overflow-y: auto;
    margin: 0;
    padding:0;
} 
</style>
