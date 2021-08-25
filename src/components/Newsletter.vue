<template>
    <!--Newsletter-->
    <section class = "newsletter">
        <div class = "nwhiteline"></div>
        <h1> Novum insights newsletter </h1>
        <h2> Subscribe to our Newsletter </h2>
        <input type="text" id = "email" name="email" class= "inputEmail" placeholder = "Enter your work email" v-model="text" pattern="^[a-zA-Z0-9]+@domain\.[a-zA-z]+$" required minlength="5">
        <input type="submit" class = "submit" value = "START NOW" v-on:click = "createPost">
    </section>
</template>


<script>
import PostService from '../PostService';
export default {
  name: 'PostComponent',
  data(){
    return {
      text: ''
    }
  },
  async created(){
    try {
      this.posts = await PostService.getPosts();
    } catch(err){
      this.error = err.message;
    }
  },
  methods: {
    async createPost() {
      await PostService.insertPost(this.text);
      this.posts = await PostService.getPosts();
    }
  }
};
</script>
<style scoped>
    .newsletter{
    font-family: Arial, sans-serif;
    font-weight: bold;
    height: 90vh;
    position: relative;
    display:grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(5, 1fr);
    text-align: center;
}

.nwhiteline{
    position: absolute;
    width: 100%;
    height: 250px;
    background-color: rgb(255, 255, 255);
    top: -200px;
}
.newsletter h1{
    font-weight: lighter;
    font-size: 30px;
    grid-column: 3 / 6;
    grid-row: 3;
}
.newsletter h2{
    font-size: 40px;
    padding-top: 50px;
    grid-column: 3 / 6;
    grid-row: 3;
}
.inputEmail{
    margin-top: 50px;
    background-color:rgb(240, 240, 240);
    grid-column: 3 / 6;
    grid-row: 4;
    border-radius: 10px;
    -webkit-box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.473);
    -moz-box-shadow: 0 0 5px 2px rgb(0, 0, 0);
    box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.144);
    border: 0px;
    font-size: 20px;
    height: 45px;
    padding: 20px;
}

.submit{
    color: white;
    background-color: #FF498F;
    margin-top: 60px;
    grid-column: 5;
    grid-row: 4;
    height:60px;
    width: 145px;
    border: 0px;
    border-radius: 10px;
    margin-left: 115px;
}

</style>