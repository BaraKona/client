<template>
    <!-- Dashboard background-->
    <section class = "background">
            <div class = "circle1"></div>
            <div class = "circle2"></div>
            <div class = "circle3"></div>
            <div class = "circle4"></div>
    </section>

</template>

<style scoped>
.background{
    display: grid;
    /*grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);*/
    height: 110%;
    width: 100%;
    position: absolute;
    background-color: rgb(255, 255, 255);
    -webkit-filter: blur(45px);
    filter: blur(45px);
}

.circle2{
    position:absolute;
    background-color: #5e8eb6ee;
    /*grid-column: 1 / 3;
    grid-row: 1/4;*/
    border-radius: 50%;
    width: 32%;
    height: 61%;
    top: -10%;
    left: 1%;
}

.circle1{
    position:absolute;
    background-color: #ae5bb5ec;
    border-radius: 50%;
    width: 35%;
    height: 60%;
    top: 8%;
    left: -25%;
}

.circle4{
    position:absolute;
    background-color: #f093c3dc;
    border-radius: 50%;
    width: 35%;
    height: 60%;
    top: 28%;
    left: 85%;
}

.circle3{
    position:absolute;
    background-color: #f0b074;
    border-radius: 50%;
    width: 32%;
    height: 60%;
    top: 55%;
    left: 70%;
}
</style>