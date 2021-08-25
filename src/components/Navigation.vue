<template>
    <!-- Navigation bar -->
    <div class = "navbar">
        <div class="container flex">
            <h1>
                <span class = "text1"> Novum </span>
                <span class = "text2">Insights</span>
            </h1>
            <nav>
                <ul>
                    <li><a href="index.html">Dashboard</a></li>
                    <li><a href="Categories">Categories</a></li>
                    <li><a href="Items">Items</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="login" class = "login">Login</a></li>
                </ul>
            </nav>
        </div>
    </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    box-sizing: border-box;
    margin: 0;
    padding:0;
  }

body{
    font-family: Arial, sans-serif;
    overflow-x: hidden;
    overflow-y: auto;
} 

/* Navbar */
.navbar {
    background: none;
    background-color: transparent;
    color: #fff;
    height: 80px;
    text-transform: uppercase;
    position: absolute;
    z-index: 2;
    width: 100%;
  }
  
  .navbar ul {
    display: flex;
  }
  .navbar h1 {
    color : rgb(255, 255, 255, 0.8);
  }
  
  .navbar a {
    text-decoration: none;
    color: #000000;
    padding: 14px 40px;
    margin: 0 5px;
    display: inline-block;
    font-size: 18px;
  }

  .navbar a:link, a:visited {
    padding: 18px 20px;
  }
  .navbar a:hover, a:active {
    text-decoration:underline;
    /*font-weight: bold;*/
  }
  .navbar a.login {
    border-radius: 15px;
  }

  .navbar a.login:link, a.login:visited {
    background-color: #FF498F;
    color:white;
    padding: 16px 50px;
    margin-left: 50px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
  }
  
  .navbar a.login:hover, a.login:active {
    padding-bottom: 20px;
    padding-top: 20px;
    background-color: #f82c7a;
  }
  /*.navbar a:hover {
    color: #2b2b2b;
  } */
  
  .navbar .flex {
    justify-content: space-between;
  }

  .container {
    max-width: 1820px;
    margin: 35px auto;
    overflow: auto;
    padding: 0 35px;
  }
  
  .flex {
    display: flex;
    align-items: center;
    height: 100%;
  }


  /* Tablets and under */
@media (max-width: 768px) {
    .grid,
    .stats .grid {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr;
    }
  
  }
  
  /* Mobile */
  @media (max-width: 800px) {
    .navbar {
      height: 110px;
    }
  
    .navbar .flex {
      flex-direction: column;
    }
  
    .navbar ul {
      padding: 10px;
      background-color: rgba(0, 0, 0, 0.1);
      text-align: center;
    }
  
  }
</style>
