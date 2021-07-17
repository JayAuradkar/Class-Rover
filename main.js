image_array = ["mars.jpg","mars1.jpg","mars2.jpg","mars3.jpg"]
var randomnumber = Math.floor(Math.random()*4)
var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d")
rover_width = 200;
rover_height = 200;
rover_x = 354;
rover_y = 354;
background_image = image_array[randomnumber]
rover_image = "rover.png"
function add(){
 bg_img_add = new Image()
 bg_img_add.onload = upload_background;
 bg_img_add.src = background_image;
 rover_img_add = new Image()
 rover_img_add.onload = upload_rover;
 rover_img_add.src = rover_image;
}
function upload_background(){
    ctx.drawImage(bg_img_add,0,0,1100,1100)
}
function upload_rover(){
    ctx.drawImage(rover_img_add,rover_x,rover_y,rover_width,rover_height)
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypressed = e.keyCode;
    console.log (keypressed);
    if(keypressed == "37"){
        left()
    }
    if(keypressed == "38"){
        up()
    }
    if(keypressed == "40"){
        down()
    }
    if(keypressed == "39"){
        right()
    }
    if(e.shiftKey == true && keypressed == "38"){
        fastup()
    }
}
function left(){
    if (rover_x > 0){
        rover_x = rover_x - 10;
        upload_background()
        upload_rover()
    }
}
function right(){
        if (rover_x < 1100){
            rover_x = rover_x + 10;
            upload_background()
            upload_rover()
        }
}
function up(){
    if (rover_y > 0){
        rover_y = rover_y - 10;
        upload_background()
        upload_rover()
    }
}
function down(){
    if (rover_y < 1100){
        rover_y = rover_y + 10;
        upload_background()
        upload_rover()
    
    }
}
function fastup(){
    if (rover_y > 0){
        rover_y = rover_y - 20;
        upload_background()
        upload_rover()
    }
}    

