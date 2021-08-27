<template>
     <!--Community-->
    <section class = "community">
        
            <h1> Lorem</h1>
            <h2> Lorem Ipsum </h2>
       
            <div class = comcard1>
                <h3> Join our Community</h3>
                <h4> Membership includes access to private Discord and early news</h4>
                <a href="membership" target="_blank" class = mbutton> Membership </a>
                <div class = mbshadow></div>
            </div>
            <div class = comcard2>
                <h3> Join our Community</h3>
                <h4> Membership includes access to private Discord and early news</h4>
                <a href="membership" target="_blank" class = mbutton> Membership </a>
                <div class = mbshadow></div>
            </div>
            <div class = comcard3>
                <h3> Join our Community</h3>
                <h4> Membership includes access to private Discord and early news</h4>
                <a href="membership" target="_blank" class = mbutton> Membership </a>
                <div class = mbshadow></div>
            </div>
        
    </section>

</template>


<style scoped>
    .community{
    position:relative;
    height: 85vh;
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    column-gap: 5%;
    row-gap: 5%;
    margin: 150px;
    text-align: center;
}

.community h1 {
    grid-column: 2;
    grid-row:1;
    align-items: center;
    font-weight:100;
    font-size: 30px;
} 
.community h2{
    grid-column: 2;
    grid-row:1;
    align-items: center;
    padding-top: 40px;
    font-size: 40px;
}

.community h3{
    font-size: 40px;
    font-weight: lighter;
    border-bottom: 3px solid #120040;
    margin: 60px;
    padding-bottom: 10px;
}

.community h4{
    margin: 60px 60px 0  60px;
    font-size: 18px;
    font-weight: lighter;
}

.comcard1{
    grid-column: 1;
    grid-row: 2;
    border-radius: 10px;
    -webkit-box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.473);
    -moz-box-shadow: 0 0 5px 2px rgb(0, 0, 0);
    box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.144);
    min-height: 420px;
    min-width: 480px;
}

.comcard2{
    grid-column: 2;
    grid-row: 2;
    border-radius: 10px;
    -webkit-box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.473);
    -moz-box-shadow: 0 0 5px 2px rgb(0, 0, 0);
    box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.144);
    min-height: 420px;
    min-width: 480px;
}

.comcard3{
    grid-column: 3;
    grid-row: 2;
    border-radius: 10px;
    -webkit-box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.473);
    -moz-box-shadow: 0 0 5px 2px rgb(0, 0, 0);
    box-shadow: 0 0 30px 10px rgba(0, 0, 0, 0.144);
    min-height: 420px;
    min-width: 480px;
}


a.mbutton:link, a.mbutton:visited {
    width: 280px;
    height: 70px;
    background-color:  #120040;
    color: white;
    padding-top: 25px;
    text-align: center;
    text-decoration: none;
    font-weight: bolder;
    display: inline-block;
    border-radius: 20px;
    /*border-width: 2.5px;
    border-style: solid;
    border-color: black; */
    font-size: 30px;
    margin-left: 10px;
    margin-top: 50px;
}

.mbshadow{
    background-color: none;
    border-width: 2.5px;
    border-style: solid;
    border-color: black;
    height: 85px;
    width: 280px;
    border-radius: 20px;
    margin-left: 100px;
    position:absolute;
    top: 455px;
    z-index: 0;
}

a.mbutton:hover, a.mbutton:active{
    background-color: #FF9C5F;
    margin-left: 0px;
    margin-top: 41px;
    z-index: 3;
    height:65px;
    width:285px;
}

@media screen and (max-width: 1650px){
    .community{
        height: 182vh;
        grid-gap: 20px;
        margin-bottom:0px;
    }
    .comcard1{
        grid-column: 2;
        grid-row: 4;
    }
    .mbshadow{
        display:none;
    }
    .comcard3{
        grid-column: 2;
        grid-row: 3;
    }
    .mbshadow{
        display:none;
    }
}

@media screen and (max-width: 700px){
    .community{
        margin: 0px;
    }


}
</style>