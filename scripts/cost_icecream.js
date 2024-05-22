"use strict";

window.onload = init;

function init() {

    let submitorder_ele = document.getElementById("submitorder");
    submitorder_ele.onclick = onSubmitOrderClicked;

    noextras();

    let cup_ele = document.getElementById("cup");
    cup_ele.onclick = displayextras;

    let cone_ele = document.getElementById("cone");
    cone_ele.onclick = noextras;

    let submitorder_btn = document.getElementsById("submitorder");
    submitorder_btn.onclick = onSubmitOrderClicked;
}

function displayextras() {
    let extrafs = document.getElementById("extrafs");
    extrafs.style.display = 'block';
}

function noextras() {

    let extrafs = document.getElementById("extrafs");
    extrafs.style.display = 'none';

}
function onSubmitOrderClicked(){

    let fs_ele = document.getElementById("fs");
    let tcpara_ele = document.getElementById("tcpara");

    if(tcpara_ele)
        fs_ele.removeChild(tcpara_ele);

    let nscoops_ele = document.getElementById("nscoops");
    let num_scoops = nscoops_ele.value;

    let base_price = 2.25;
    let extras = 0.0;
    let total = 0.0;

    let cone_ele = document.getElementById("cone");
    if(cone_ele.checked)
        extras = 0;
        

    let cup_ele = document.getElementById("cup");
    if(cup_ele.checked){
        let sprinkles_ele = document.getElementById("sprinkles");
        if(sprinkles_ele.checked)
            extras = extras + 0.50;
        
        let whippedcream_ele = document.getElementById("whippedcream");
        if(whippedcream_ele.checked)
            extras = extras + 0.25;

        let hotfudge_ele = document.getElementById("hotfudge");
        if(hotfudge_ele.checked)
            extras = extras + 1.25;

        let cherry_ele = document.getElementById("cherry");
        if(cherry_ele.checked)
            extras = extras + 0.25;

        
    }

    total = base_price + ((num_scoops - 1) * 1.25) + extras;

    let pmsg = " ";
    pmsg = `Base price: $ ${base_price}` + `<br>` +
        `Extra scoops: $ ${(num_scoops - 1) * 1.25}` + `<br>` +
        `Toppings: $ ${extras}` + `<br>` +
        `Total due: $ ${total.toFixed(2)}`;
    let p_ele = document.createElement("p");
    p_ele.innerHTML = pmsg;
    p_ele.style.textAlign = "center";
    p_ele.id = "tcpara";

    
    fs_ele.appendChild(p_ele);



}