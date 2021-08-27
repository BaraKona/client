<template>
    <!-- Novum -->
    <section class = "novum">
        <div class = "novum-text">
            <h1> Novum </h1>
            <h2> What can we do for you ?</h2>
            <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totarn rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                quia dolor sit amet, consectetur, adipiscl velit, sed quia non numquam
                eius modi tempora incidunt u </p>
        </div>
        <a href="login" target="_blank" class = joinbutton> Join </a>
        <div class = "ccard1" v-for = "(crypto, index) in crypto" v-bind:item ="crypto" v-bind:index = "index" v-bind:key ="crypto._id"> 
            <div class = "cryptoindex">
               <p> Avg </p>
               <p1>+{{ crypto.text }}% <br></p1>
               <p1>+{{ crypto.text }}% <br></p1>
               <p1>+{{ crypto.text }}%</p1>
               <p>cap</p>
               <p1>+{{ crypto.text }}%</p1>
               <p>Data</p>
               <p1>+{{ crypto.text }}%</p1>
           </div>
            <h1>Stacks</h1>
            <h2 class = "text"> ${{ crypto.text }}</h2>
        </div>
            
       <div class = "ccard2" v-for = "(crypto, index) in crypto" v-bind:item ="crypto" v-bind:index = "index" v-bind:key ="crypto._id"> 
           <div class = "cryptoindex">
               <p> Avg </p>
               <p1>+{{ crypto.text }}% <br></p1>
               <p1>+{{ crypto.text }}% <br></p1>
               <p1>+{{ crypto.text }}%</p1>
               <p>cap</p>
               <p1>+{{ crypto.text }}%</p1>
               <p>Data</p>
               <p1>+{{ crypto.text }}%</p1>
           </div>
           <h1>Stacks</h1>
           <h2 class = "text"> ${{ crypto.text }}</h2>
      </div>

       <div class = "ccard3" v-for = "(crypto, index) in crypto" v-bind:item ="crypto" v-bind:index = "index" v-bind:key ="crypto._id"> 
           <div class = "cryptoindex">
               <p> Avg </p>
               <p1>+{{ crypto.text }}% <br></p1>
               <p1>+{{ crypto.text }}% <br></p1>
               <p1>+{{ crypto.text }}%</p1>
               <p>cap</p>
               <p1>+{{ crypto.text }}%</p1>
               <p>Data</p>
               <p1>+{{ crypto.text }}%</p1>
           </div>
           <h1>Stacks</h1>
           <h2 class = "text"> ${{ crypto.text }}</h2>
      </div>

       <div class = "ccard4" v-for = "(crypto, index) in crypto" v-bind:item ="crypto" v-bind:index = "index" v-bind:key ="crypto._id"> 
           <div class = "cryptoindex">
               <p> Avg </p>
               <p1>+{{ crypto.text }}% <br></p1>
               <p1>+{{ crypto.text }}% <br></p1>
               <p1>+{{ crypto.text }}%</p1>
               <p>cap</p>
               <p1>+{{ crypto.text }}%</p1>
               <p>Data</p>
               <p1>+{{ crypto.text }}%</p1>
           </div>
           <h1>Stacks</h1>
           <h2 class = "text"> ${{ crypto.text }}</h2>
      </div>

       <div class = "ccard5" v-for = "(crypto, index) in crypto" v-bind:item ="crypto" v-bind:index = "index" v-bind:key ="crypto._id">
           <div class = "cryptoindex">
               <p> Avg </p>
               <p1>+{{ crypto.text }}% <br></p1>
               <p1>+{{ crypto.text }}% <br></p1>
               <p1>+{{ crypto.text }}%</p1>
               <p>cap</p>
               <p1>+{{ crypto.text }}%</p1>
               <p>Data</p>
               <p1>+{{ crypto.text }}%</p1>
                
           </div>
           <h1>Stacks</h1>
           <h2 class = "text"> ${{ crypto.text }}</h2>
      </div>
      
            

      
    </section>
</template>

<script>
import CryptoService from '../CryptoService';
export default {
  name: 'CryptoComponent',
  data(){
    return {
      crypto: [],
      error: '', 
      text: ''
    }
  },
  async created(){
    try {
      this.crypto = await CryptoService.getCrypto();
    } catch(err){
      this.error = err.message;
    }
  },
  methods: {
    async createCrypto() {
      await CryptoService.insertCrypto(this.text);
      this.crypto = await CryptoService.getCrypto();
    }
  }
};
</script>


<style scoped>
    .novum{
    font-family: Arial, sans-serif;
    font-weight: bold;
    height: 150vh;
    width:auto;
    position: relative;
    display:grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: repeat(5, 1fr);
    margin-top: -8%;
    margin-bottom: -5%;
}

.novum-text{
    grid-column: 4/9;
    grid-row: 2;
    text-align: center;
}

.novum-text h1{
    font-size: 35px;
    font-weight: 100;
}
.novum-text h2{
    font-size: 40px;
    padding-top: 10px;
}
.novum-text p {
    letter-spacing: 1px;
    padding-top: 50px;
    font-size: 20px;
    font-weight: 200;
    line-height: 25px;
}

.joinbutton{
    grid-row: 3;
    grid-column: 6;
    text-align: center;
    align-items: center;
    padding-top: 20px;
    text-decoration: none;
    display: inline-block;
    border-radius: 20px;
    color: white;
    background-color: #FF498F;
    width:150px;
    height: 50px;
    margin-top: 50px;
    margin-left: 50px;
    font-weight:bold;
    font-size: 20px;
}

a.joinbutton:hover, a.joinbutton:active {
    background-color: #f82c7a;
  }


.cryptoindex{
    position: absolute;
    width: 60px;
    height: 200px;
    background-color: rgb(255, 255, 255);
    margin-left: 150px;
    border-radius: 10px;
    -webkit-box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.473);
    -moz-box-shadow: 0 0 5px 2px rgb(0, 0, 0);
    box-shadow: 0 0 5px 7px rgba(0, 0, 0, 0.08);
    display: none; 
    font-size: 12px;
    text-align: center;
}
.ccard1:hover .cryptoindex{
    display: block; 
}
.ccard2:hover .cryptoindex{
    display: block; 
}
.ccard3:hover .cryptoindex{
    display: block; 
}
.ccard4:hover .cryptoindex{
    display: block; 
}
.ccard5:hover .cryptoindex{
    display: block; 
}
/* Need to fix this. Not ideal for maintainability*/
.ccard1 h1{
    font-size: 15px;
    padding-top: 50px;
    padding-left:40px;
}
.ccard1 h2{
    font-size: 40px;
    font-weight: lighter;
    padding-left:40px;
}
.ccard1{
    grid-column: 6;
    grid-row: 4;
    height: 300px;
    /*background-color: white;*/
    background-image: linear-gradient(to bottom right, rgb(177, 86, 185), rgb(233, 233, 89));
    border-radius: 10px;
    -webkit-box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.473);
    -moz-box-shadow: 0 0 5px 2px rgb(0, 0, 0);
    box-shadow: 0 0 20px 7px rgba(0, 0, 0, 0.08);
    width: 200px;
    margin: 10px;
}
.ccard2 h1{
    font-size: 15px;
    padding-top: 50px;
    padding-left:40px;
}
.ccard2 h2{
    font-size: 40px;
    font-weight: lighter;
    padding-left:40px;
}
.ccard2{
    grid-column: 7;
    grid-row: 4;
    height: 300px;
    /*background-color: white;*/
    background-image: linear-gradient(to bottom right, rgb(177, 86, 185), rgb(233, 233, 89));
    border-radius: 10px;
    -webkit-box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.473);
    -moz-box-shadow: 0 0 5px 2px rgb(0, 0, 0);
    box-shadow: 0 0 20px 7px rgba(0, 0, 0, 0.08);
    width: 200px;
    margin: 10px;
}


.ccard3 h1{
    font-size: 15px;
    padding-top: 50px;
    padding-left:40px;
}
.ccard3 h2{
    font-size: 40px;
    font-weight: lighter;
    padding-left:40px;
}
.ccard3{
    grid-column: 8;
    grid-row: 4;
    height: 300px;
    /*background-color: white;*/
    background-image: linear-gradient(to bottom right, rgb(183, 197, 61), rgb(233, 171, 89));
    border-radius: 10px;
    -webkit-box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.473);
    -moz-box-shadow: 0 0 5px 2px rgb(0, 0, 0);
    box-shadow: 0 0 20px 7px rgba(0, 0, 0, 0.08);
    width: 200px;
    margin: 10px;
}

.ccard4 h1{
    font-size: 15px;
    padding-top: 50px;
    padding-left:40px;
}
.ccard4 h2{
    font-size: 40px;
    font-weight: lighter;
    padding-left:40px;
}
.ccard4{
    grid-column: 5;
    grid-row: 4;
    height: 300px;
    /*background-color: white;*/
    background-image: linear-gradient(to bottom right, rgb(185, 86, 99), rgb(89, 228, 233));
    border-radius: 10px;
    -webkit-box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.473);
    -moz-box-shadow: 0 0 5px 2px rgb(0, 0, 0);
    box-shadow: 0 0 20px 7px rgba(0, 0, 0, 0.08);
    width: 200px;
    margin: 10px;
}

.ccard5 h1{
    font-size: 15px;
    padding-top: 50px;
    padding-left:40px;
}
.ccard5 h2{
    font-size: 40px;
    font-weight: lighter;
    padding-left:40px;
}
.ccard5{
    grid-column: 4;
    grid-row: 4;
    height: 300px;
    /*background-color: white;*/
    background-image: linear-gradient(to bottom right, rgb(109, 185, 86), rgb(89, 163, 233));
    border-radius: 10px;
    -webkit-box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.473);
    -moz-box-shadow: 0 0 5px 2px rgb(0, 0, 0);
    box-shadow: 0 0 20px 7px rgba(0, 0, 0, 0.08);
    width: 200px;
    margin: 10px;
} 

@media screen and (max-width: 1100px){
    .joinbutton{
        margin-left: -50px;
        margin-top: -5px;
    }
    .ccard3{
        grid-column: 6;
        grid-row:5;
    }
}
@media screen and (max-width: 880px){
    .joinbutton{
        margin: 0;
        margin-left: 50px;
    }
    .ccard2{
        grid-column: 4;
        grid-row:5;
    }
    .joinbutton{
        grid-column: 5;
    }
}

@media screen and (max-width: 600px){
    .joinbutton{
        margin:0;
        margin-left: -50px;
    }
    .novum{
        height: 160vh;
    }
    .ccard1{
        grid-column: 5;
        grid-row:5;
    }
    .ccard3{
        display:none;
    }
    .joinbutton{
        grid-column: 5;
    }
}
</style>