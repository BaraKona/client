<template>
        <!-- News -->
    <div class = "gliderbackground">
    <div class = "news">
        <h3> NEWS </h3>
        <h4> Our Latest posts</h4>
    <div class="glider-contain">
        <div class="glider">
        <div class = "figure">
            <h1> News Title </h1>
            <h2> 14. 04 . 21</h2>
            <p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi n
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                adipiscl velit, sed quia non numquam eius modi tempora incidunt u</p>
        </div>
        <div class = "figure">
            <h1> News Title </h1>
            <h2> 14. 04 . 21</h2>
            <p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi n
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                adipiscl velit, sed quia non numquam eius modi tempora incidunt u</p>
        </div>
        <div class = "figure">
            <h1> News Title </h1>
            <h2> 14. 04 . 21</h2>
            <p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi n
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                adipiscl velit, sed quia non numquam eius modi tempora incidunt u</p>
        </div>
        <!--<div class = "figure">
            <h1> News Title </h1>
            <h2> 14. 04 . 21</h2>
            <p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi n
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                adipiscl velit, sed quia non numquam eius modi tempora incidunt u</p>
        </div>
        <div class = "figure">
            <h1> News Title </h1>
            <h2> 14. 04 . 21</h2>
            <p> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi n
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                adipiscl velit, sed quia non numquam eius modi tempora incidunt u</p>
        </div> -->
        <!--<button aria-label="Previous" class="glider-prev">«</button>
        <button aria-label="Next" class="glider-next">»</button>-->
      </div>
    </div>
    </div>
    </div>
</template>

<style scoped>
.news{
    background: #120040;
    color: white;
}

 .news h3{
    padding-top: 150px;
    text-align: center;
    font-size: 30px;
    font-weight: lighter;
 }
 
 .news h4{
    padding-top: 10px;
    font-size: 38px;
    text-align: center;
    padding-bottom: 50px;
 }
 
 .glider-contain{
    position: relative;
    background: #120040;
    color: white;
    height: 55vh;
 }
 
.figure{
    background: white;
    color: black;
    display: inline-block;
    margin: 40px;
    padding: 50px;
    height: 250px;
    padding-right: 80px;
    border-radius: 10px;
    max-height: 350px;
    max-width: 400px;
    
 }

.figure h1 {
    padding-bottom: 10px;
    margin-bottom: 15px;
    font-weight:lighter;
    border-bottom: 3px solid #120040;
    margin-right: 180px;
}

.figure h2{
    margin-bottom: 10px;
    font-weight:lighter;
}

@media  screen and (max-width: 1200px) {
    .figure {
        display: none;
    }
}
.glider,.glider-contain{margin:0 auto;position:relative}.glider,.glider-track{transform:translateZ(0)}.glider-dot,.glider-next,.glider-prev{border:0;padding:0;user-select:none;outline:0}.glider-contain{width:100%}.glider{overflow-y:hidden;-webkit-overflow-scrolling:touch;-ms-overflow-style:none}.glider-track{width:100%;margin:0;padding:0;display:flex;z-index:1}.glider.draggable{user-select:none;cursor:-webkit-grab;cursor:grab}.glider.draggable .glider-slide img{user-select:none;pointer-events:none}.glider.drag{cursor:-webkit-grabbing;cursor:grabbing}.glider-slide{user-select:none;justify-content:center;align-content:center;width:100%;min-width:150px}.glider-slide img{max-width:100%}.glider::-webkit-scrollbar{opacity:0;height:0}.glider-next,.glider-prev{position:absolute;background:0 0;z-index:2;font-size:40px;text-decoration:none;left:-23px;top:30%;cursor:pointer;color:#666;opacity:1;line-height:1;transition:opacity .5s cubic-bezier(.17,.67,.83,.67),color .5s cubic-bezier(.17,.67,.83,.67)}.glider-next:focus,.glider-next:hover,.glider-prev:focus,.glider-prev:hover{color:#ccc}.glider-next{right:-23px;left:auto}.glider-next.disabled,.glider-prev.disabled{opacity:.25;color:#666;cursor:default}.glider-hide{opacity:0}.glider-dots{user-select:none;display:flex;flex-wrap:wrap;justify-content:center;margin:0 auto;padding:0}.glider-dot{display:block;cursor:pointer;color:#ccc;border-radius:999px;background:#ccc;width:12px;height:12px;margin:7px}.glider-dot:focus,.glider-dot:hover{background:#ddd}.glider-dot.active{background:#a89cc8}@media(max-width:36em){.glider::-webkit-scrollbar{opacity:1;-webkit-appearance:none;width:7px;height:3px}.glider::-webkit-scrollbar-thumb{opacity:1;border-radius:99px;background-color:rgba(156,156,156,.25);-webkit-box-shadow:0 0 1px rgba(255,255,255,.25);box-shadow:0 0 1px rgba(255,255,255,.25)}}

</style>