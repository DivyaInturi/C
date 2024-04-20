const button = document.querySelector("button");

const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

function hexColor(){
    let colour = '';
    for (let i=1; i<=6; i++){
        let ele = Math.floor(Math.random() * 15);
        colour += arr[ele]; 
    }
    //console.log(colour);
    let rgb = colour
    return colour;
}

/*function rgbColor(hexcode){
    const r = parseInt(hexcode.slice(1, 3), 16);
    const g = parseInt(hexcode.slice(3, 5), 16);
    const b = parseInt(hexcode.slice(5, 7), 16);
    console.log(r,g,b)
    return { r, g, b };
}
rgbColor();*/

const hexToRgb = hex => hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`).substring(1).match(/.{2}/g).map(x => parseInt(x, 16));


button.addEventListener("click", () => {
    hexcode = hexColor();
    hex_code = '#' + hexcode.toString(16);
    rgbcode = hexToRgb(hex_code);
    rgb_code = `rgb(${rgbcode})`
    document.getElementById("hexColor").innerText = hex_code;
    document.getElementById("color").style.background = hex_code;
    document.getElementById("rgbColor").innerHTML = rgb_code;
})

    
