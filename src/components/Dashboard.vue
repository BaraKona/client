<template>
    <!-- Dashboard -->
    <section class = "dashboard">
        <div class= "dashboard-text">
            <h1> Emerging Tokens </h1>
            <p> We find interesting tokens before everyone else ! </p>
        </div>
        <a href="dashboard" target="_blank" class = "dbutton" >Dashboard</a>
        <div class = buttonshadow></div>
        <div class = "dcard">
            <div class = "card-text">  
                <h1> Stacks</h1>
                <p1>Protocol <br></p1>
                <p1>@Stocks// Stacks Network</p1>
                <p> Lorem ipsum sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                    totarn rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi </p>
                <h2> £154.80 </h2>

            </div>
        </div> 
        <div class = "whiteline"></div>
    </section>
</template>


<style scoped>

.dashboard{
    font-family: Arial, sans-serif;
    font-weight: bold;
    height: 110vh;
    position: relative;
    display:grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(5, 1fr);
}

.dcard{
    grid-column: 7 / 9;
    grid-row: 2 / 6;
    background-color: white;
    border-radius: 40px;
    -webkit-box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.473);
    -moz-box-shadow: 0 0 5px 2px rgb(0, 0, 0);
    box-shadow: 0 0 20px 7px rgba(0, 0, 0, 0.08);
    margin-bottom: 70px;
    min-width: 400px;
}
.card-text{
    padding:30px;
}
.card-text h1{
    padding-top: 70px;
    margin-bottom: -2px;
    font-size: 20px;
    font-weight:lighter;
}
.card-text p{
    font-weight: lighter;
}
.card-text p1{
    font-size: 12px;
    font-weight: lighter;
}
.card-text h2{
    border-bottom: 1px solid #1a1a1a;
    padding-bottom: 20px;
    
}

.dashboard-text{
    grid-column: 2/5;
    grid-row: 4;
    color: rgb(23, 0, 59);
    line-height: 400%;
    padding-left: 10%;
    margin-right: -10%;
    font-weight: bold;
    max-height: 600px;
    min-width: 300px;
}

.dashboard-text p{
    font-size: 45.7px;
}

.dashboard-text h1{
    font-size: 30px;   
    font-weight: 500;
}
.dbutton{
    margin-top: 3%;
    background: transparent;
    /*box-shadow: 5px 10px #FF9C5F;*/
}

a.dbutton:link, a.dbutton:visited {
    width: 320px;
    height: 70px;
    background-color: #FF9C5F;;
    color: white;
    padding-top: 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 20px;
    /*border-width: 2.5px;
    border-style: solid;
    border-color: black; */
    font-size: 30px;
    grid-column: 2 / 5;
    grid-row: 5;
    margin-left: 10%;
    margin-top: 1%;
    
  }
.buttonshadow{
    background-color: none;
    grid-column: 2 / 5;
    grid-row: 5;
    border-width: 2.5px;
    border-style: solid;
    border-color: black;
    height: 90px;
    width: 315px;
    border-radius: 20px;
    margin-left: 9%;
    min-width: 315px;
    
}
a.dbutton:hover, a.dbutton:active{
    background-color: rgb(23, 0, 59);
    margin-top: 0%;
    margin-left: 9%;;
}

.whiteline{
    position: absolute;
    width: 100%;
    height: 23%;
    background-color: white;
    top: 100%;
}

@media (max-width: 1000px) {
    
    .dashboard{
        height: 150vh;
        text-align: center;
        max-height: 1500px;
    }
    .dcard{
        grid-column: 4 / 8;
        grid-row: 3 / 6;
    }
    .dashboard-text{
        grid-column: 2 / 9;
        grid-row:2;
        
    }
    a.dbutton:link, a.dbutton:visited, .buttonshadow{
        display: none;
    }

  }
  @media (max-width: 700px) {
    
    .dcard{
        grid-column: 3 / 7;
        grid-row: 3 / 6;
    }
    

  }
   @media (max-width: 600px) {
    
    .dcard{
        grid-column: 2 / 8;
        grid-row: 3 / 6;
    }
    

  }
</style>