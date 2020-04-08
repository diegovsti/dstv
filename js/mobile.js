
$click = document.getElementsByTagName("a"); // tirar isso depois


window.onload = function(){
    document.querySelector(".m-mobile").addEventListener("click", function(){
        if(document.querySelector(".menu .menu-nav ul ").style.display == "block"){
            document.querySelector(".menu .menu-nav ul").style.display = "none";
        }else {
            document.querySelector(".menu .menu-nav ul").style.display = "block";

        }
    });
}

// Eliminar essa função
$click.addEventListener("click", function(){
    if(document.querySelector(".menu .menu-nav ul").style.display == "block"){
        document.querySelector(".menu .menu-nav ul").style.display = "none";
    };
})
