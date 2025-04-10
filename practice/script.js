function loadImage(src) {
    return new Promise((resolve,reject)=>{
        let img = new Image;

        img.onload=function(){
            resolve(img);
        };
        img.onerror=function(){
            reject(new Error("failed to load the image"+src));
            

        }
        img.src=src;
    })

};


let imageConatiner=document.getElementById("imageContainer");

let imageUrl= [ "./images/Bullb.jpeg","./images/Dice.jpeg","./images/Elephant.jpeg"]

Promise.all(imageUrl.map(loadImage)).then(image=>{image.forEach(image=>imageConatiner.appendChild(image));})
.catch(error=>console.log(error))