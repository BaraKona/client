<template>
    <!-- Novum -->
    <section class = "novum">
        <div class = "novum-text">
            <h1> Novum </h1>
            <h2> What can we do for you ?</h2>
            <P> Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totarn rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                quia dolor sit amet, consectetur, adipiscl velit, sed quia non numquam
                eius modi tempora incidunt u </P>
        </div>
        <a href="login" target="_blank" class = joinbutton> Join </a>
            <div class = ccard1> </div>
            <div class = ccard2> </div>
            <div class = ccard3> </div>
            <div class = ccard4> </div>
            <div class = ccard5> </div>
    </section>
</template>




<style scoped>
    .novum{
    font-family: Arial, sans-serif;
    font-weight: bold;
    height: 150vh;
    position: relative;
    display:grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(5, 1fr);
    margin-top: -8%;
    margin-bottom: -5%;
}

.novum-text{
    grid-column: 4/8;
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
    grid-column: 5/7;
    text-align: center;
    padding-top: 20px;
    text-decoration: none;
    display: inline-block;
    border-radius: 20px;
    color: white;
    background-color: #FF498F;
    width:50%;
    height: 20%;
    margin-top: 15%;
    margin-left: 25%;
    font-weight:bold;
    font-size: 20px;
}

a.joinbutton:hover, a.joinbutton:active {
    background-color: #f82c7a;
  }


/* Need to fix this. Not ideal for maintainability*/
.ccard1{
    grid-column: 5/7;
    grid-row: 4;
    height: 112%;
    width: 100%;
    background-color: white;
    border-radius: 10px;
    -webkit-box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.473);
    -moz-box-shadow: 0 0 5px 2px rgb(0, 0, 0);
    box-shadow: 0 0 20px 7px rgba(0, 0, 0, 0.08);
    width: 200px;
    margin-left: 23%;
    
}
.ccard2{
    grid-column: 6 / 9;
    grid-row: 4;
    height: 112%;
    width: 100%;
    background-color: white;
    border-radius: 10px;
    -webkit-box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.473);
    -moz-box-shadow: 0 0 5px 2px rgb(0, 0, 0);
    box-shadow: 0 0 20px 7px rgba(0, 0, 0, 0.08);
    width: 200px;
    margin-left: 25%;
}
.ccard3{
    grid-column: 7/ 11;
    grid-row: 4;
    height: 112%;
    width: 100%;
    background-color: white;
    border-radius: 10px;
    -webkit-box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.473);
    -moz-box-shadow: 0 0 5px 2px rgb(0, 0, 0);
    box-shadow: 0 0 20px 7px rgba(0, 0, 0, 0.08);
    width: 200px;
    margin-left: 25%;
}
.ccard4{
    grid-column: 4 / 7;
    grid-row: 4;
    height: 112%;
    width: 100%;
    background-color: white;
    border-radius: 10px;
    -webkit-box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.473);
    -moz-box-shadow: 0 0 5px 2px rgb(0, 0, 0);
    box-shadow: 0 0 20px 7px rgba(0, 0, 0, 0.08);
    width: 200px;
    margin-left: 5%;
}

.ccard5{
    grid-column: 3 / 6;
    grid-row: 4;
    height: 112%;
    width: 100%;
    background-color: white;
    border-radius: 10px;
    -webkit-box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.473);
    -moz-box-shadow: 0 0 5px 2px rgb(0, 0, 0);
    box-shadow: 0 0 20px 7px rgba(0, 0, 0, 0.08);
    width: 200px;
    margin-left: -5%;
} 
</style>