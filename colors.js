const getcolor=()=>{
    //hex code
    const randomnumber =Math.floor( Math.random()*16777215);
    const randomCode= "#" + randomnumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText= randomCode;
}
//event call
document.getElementById("btn").addEventListener(
    "click",
    getcolor
)
//initial call
getcolor();