var transition=document.querySelector(".search-location");

function myFunction(){

    transition.classList.toggle("addtransition");
    var contAin=document.querySelector(".contain");
    contAin.classList.toggle("main");

}

function secondfunction(){
    transition.classList.toggle("retain");


}

 Item=document.querySelectorAll(".item");
var quick=document.querySelector(".quiq-veiw");
for(item of Item){
    item.addEventListener('click', (e) =>{
        e.quick.classList.toggle("quick");
    })
}
    
