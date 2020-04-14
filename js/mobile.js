// função para abrir e fechar o menu
window.onload = function(){
    document.querySelector(".m-mobile").addEventListener("click", function(){
        if(document.querySelector(".menu .menu-nav ul ").style.display == "block"){
            document.querySelector(".menu .menu-nav ul").style.display = "none";
        }else {
            document.querySelector(".menu .menu-nav ul").style.display = "block";

        }
    });
}

//função está sendo chamada na tag a, para fechar o menu ao ser clicado
function FecharMenu(){
    var $menu =   document.querySelector(".menu .menu-nav ul");

    if ($menu.style.display == "block"){
        $menu.style.display = "none";
    }
}
