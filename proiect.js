const pagenotloading = setTimeout(printerror, 10000);

function printerror() {
    window.stop();
    document.body.innerHTML = "Something went wrong";
}

window.addEventListener("load", function() {
    clearTimeout(pagenotloading);

    let commentform = document.getElementById("commentform");
    let regexexmail =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let commentbutton = document.createElement("button");
    let section7 = document.createElement("section");
    document.getElementById("main").appendChild(section7);
    section7.appendChild(commentbutton);
    section7.setAttribute("style", "flex-flow: column wrap");
    commentbutton.setAttribute("style", "width:10%");
    let commentbuttontext = document.createTextNode("Add a comment");

    commentbutton.appendChild(commentbuttontext);
    commentbutton.addEventListener("click", function() {

        section7.appendChild(commentform);
        commentform.setAttribute("style", "display:block");
    });
    document.getElementById("submitcomment");
    messageerror = false;
    if (localStorage.getItem("default_username")) {
        document.getElementById("name").value = localStorage.getItem("default_username");
        document.getElementById("email").value = localStorage.getItem("default_email");
    }
    window.validateMyForm = function() {
        if (regexexmail.test(document.getElementById("email").value)) {
            localStorage.setItem("default_username", document.getElementById("name").value);
            localStorage.setItem("default_email", document.getElementById("email").value);
            return true;
        } else {
            if (!messageerror) {
                var invalid_email = document.createElement("p");
                invalid_email.appendChild(document.createTextNode("Invalid email"));
                invalid_email.setAttribute("style", "color:red");
                commentform.appendChild(invalid_email);
                messageerror = true;
            }
            return false;
        }
    }
    let switchtext = document.getElementById("switch");
    var allparagraphs = document.querySelectorAll("p");
    var allh1s = document.querySelectorAll("h1");
    var allh3s = document.querySelectorAll("h3");
    var menuelems = document.querySelectorAll(".menuelem");
    var sections = document.querySelectorAll("section");
    var doubleclicked = false;
    var light = true;
    switchtext.addEventListener("click", function switchtextf() {
        if (light == true) {
            for (var p = 0; p < allparagraphs.length; p++) {
                allparagraphs[p].setAttribute("style", "color:white")
            }
            for (var h = 0; h < allh1s.length; h++) {
                allh1s[h].setAttribute("style", "color:white")
            }
            for (var h = 0; h < allh3s.length; h++) {
                allh3s[h].setAttribute("style", "color:white")
            }
            for (var m = 0; m < menuelems.length; m++) {
                menuelems[m].setAttribute("style", "color:white")
            }
            for (var s = 0; s < sections.length; s++) {
                sections[s].setAttribute("style", "background-color:black;border:black")
            }
            document.getElementById("dropdownmenu").setAttribute("style", "background-color:black;border:black")
            if (doubleclicked == false)
                doubleclicked = true;
            else if (doubleclicked == true) {
                light = false;
                doubleclicked = false;
            }
        } else if (light == false) {
            for (var p = 0; p < allparagraphs.length; p++) {
                allparagraphs[p].setAttribute("style", "color:black")
            }
            for (var h = 0; h < allh1s.length; h++) {
                allh1s[h].setAttribute("style", "color:black")
            }
            for (var h = 0; h < allh3s.length; h++) {
                allh3s[h].setAttribute("style", "color:black")
            }
            for (var m = 0; m < menuelems.length; m++) {
                menuelems[m].setAttribute("style", "color:black")
            }
            for (var s = 0; s < sections.length; s++) {
                sections[s].setAttribute("style", "background-color:azure;border:rgb(183, 238, 238)")
            }
            document.getElementById("dropdownmenu").setAttribute("style", "background-color:azure")
            if (doubleclicked == false)
                doubleclicked = true;
            else if (doubleclicked == true) {
                light = true;
                doubleclicked = false;
            }
        }
        textcolor = window.getComputedStyle(document.querySelector("p"));
        console.log("text color is:" + textcolor.getPropertyValue("color"));
    })
    window.imageenlager = function(e) {
        e.target.setAttribute("style", "width:50%");
        e.stopPropagation();
    }
    window.normalimage = function(e) {
        e.target.setAttribute("style", "width:default");
        e.stopPropagation();
    }
    timespentdiv = document.getElementById("timespent");
    const siteloaded = new Date();
    let checktime = setInterval(getdate, 1000);

    function getdate() {
        var d = new Date();
        seconds = parseInt(((d - siteloaded) / 1000) % 60);
        minutes = parseInt((d - siteloaded) / 60000);
        timespentdiv.innerHTML = minutes + " minute(s), " + seconds + " seconds(s)"
    }
});