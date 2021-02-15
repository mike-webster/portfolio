window.onload = function(){
    var menuIconOpen = document.getElementsByClassName("open")[0];
    var menuIconClose = document.getElementsByClassName("close")[0];
    var menuItems = document.getElementsByClassName("menu");
    
    menuIconClose.style.display = "none";
    
    menuIconOpen.onclick = function() {
        this.style.display = "none";
        menuIconClose.style.display = "block";
        menuDisplay("show", menuItems);
    };
    
    menuIconClose.onclick = function() {
        this.style.display = "none";
        menuIconOpen.style.display = "block";
        menuDisplay("hide", menuItems);
    };

    var btn = document.getElementById("submit");
    btn.addEventListener("click", function(){
        clearValidation();

        var title = document.getElementById("title").value;
        var msg = document.getElementById("message").value;

        var errors = [];

        if (title.trim().length < 1) {
            errors.push("Please include a title!");
        }

        if (msg.trim().length < 1) {
            errors.push("Please include a message!");
        }

        if (errors.length > 0) {
            var container = document.getElementById("validationContainer");
            for (var i = 0; i < errors.length; i++) {
                container.innerHTML += "<div class='error text-center'>" + errors[i] + "</div>";
            }
            container.classList.remove("hide");
            return
        }
        window.open('mailto:email@mikewebster.tech?subject=' + title + '&body=' + msg);
    });
};

function clearValidation() {
    var container = document.getElementById("validationContainer");
    container.innerHTML = "";
    container.classList.add("hide");
}

function menuDisplay(state, items){
    if(state=="show"){
        for(var i=1; i<items.length; i++){
        items[i].classList.add("show");
        }
    } else {
        for(var i=1; i<items.length; i++){
        items[i].classList.remove("show");
        }
    }
}