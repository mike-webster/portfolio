window.addEventListener("load", setupContactButton);

function setupContactButton() {
    var btn = document.getElementById("submit");
    btn.addEventListener("click", function(){
        contactClick();
    });
}

function contactClick() {
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
}

function clearValidation() {
    var container = document.getElementById("validationContainer");
    container.innerHTML = "";
    container.classList.add("hide");
}