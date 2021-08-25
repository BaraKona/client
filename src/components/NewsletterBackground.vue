<template>
    <!-- Newsletter background-->
    <section class = "nbackground">
        <div class = "ncircle1"></div>
        <div class = "ncircle2"></div>
        <div class = "ncircle3"></div>
        <div class = "ncircle4"></div>
    </section>
</template>


<style scoped>

.nbackground{
    z-index: -1;
    display: grid;
    /*grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);*/
    height: 48vh;
    width: 100%;
    position: absolute;
    background-color: rgb(255, 255, 255);
    -webkit-filter: blur(45px);
    filter: blur(45px);
}
.ncircle2{
    position:absolute;
    background-color: #5e8eb6ee;
    /*grid-column: 1 / 3;
    grid-row: 1/4;*/
    border-radius: 50%;
    width: 650px;
    height: 650px;
    top: -10%;
    left: 1%;
}

.ncircle1{
    position:absolute;
    background-color: #ae5bb5ec;
    border-radius: 50%;
    width: 650px;
    height: 650px;
    top: 8%;
    left: -25%;
}

.ncircle4{
    position:absolute;
    background-color: #f093c3dc;
    border-radius: 50%;
    width: 650px;
    height: 650px;
    top: 28%;
    left: 85%;
}

.ncircle3{
    position:absolute;
    background-color: #f0b074;
    border-radius: 50%;
    width: 650px;
    height: 650px;
    top: 55%;
    left: 70%;
}

</style>