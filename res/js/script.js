window.onload = start;
var menuOpened = false;
var scrollInt = null;

var keywords = [
    "Innovate",
    "Inspire",
    "Immerse"
]
var keywordIndex = 0;

function start() {
    document.body.addEventListener("click", (e) => {
        window.open("https://github.com/smilefx", "_blank");
    });

    document.getElementsByTagName("html")[0].scrollTop = 0;
    scrollInt = setInterval(() => {
        if(document.getElementsByTagName("html")[0].scrollTop > 0) {
            document.getElementsByTagName("html")[0].scrollTop = 0;
            console.log("Adjusted scroll")
            clearInterval(scrollInt);
        }
    }, 500);

    getEle("layer0").innerHTML = `<h1 id="websiteName">Luca R</h1>`;

    // setInterval(() => {
    //     getEle("layer0").innerHTML = `<h1 id="websiteName">${keywords[keywordIndex]}</h1>`;
    //     keywordIndex++;
    //     if(keywordIndex >= keywords.length) {
    //         keywordIndex = 0;
    //     }
    // }, 3250);

    getEle("disclaimer").innerText = `C ${new Date().getFullYear()} Luca R.`;
}

function getEle(id) {
    return document.getElementById(id);    
}

function scrollWebsite(event) {
    if(document.scrollingElement.tagName == "HTML") {
        for(var i = 1; i < 5; i++) {
            getEle("--layer-" + i).style.transform = "translateY(-" + document.scrollingElement.scrollTop * (5 - i) / 150 + "vw";
        }
        // getEle("websiteName").style.fontSize = 4 - (document.scrollingElement.scrollTop > 0 ? document.scrollingElement.scrollTop / window.innerHeight : 0) * 4 + "vw";
        getEle("websiteName").style.letterSpacing = 0.6 + (document.scrollingElement.scrollTop > 0 ? document.scrollingElement.scrollTop / window.innerHeight : 0) * 2 + "vw";
        getEle("websiteName").style.opacity = 1 - (document.scrollingElement.scrollTop > 0 ? document.scrollingElement.scrollTop / window.innerHeight : 0) * 3;
    }
}

function moveMouse(event) {
    getEle("cursor").style.left = event.clientX + "px";
    getEle("cursor").style.top = event.clientY + "px";
    var found = false;

    /*try {
        event.composedPath().forEach(ele => {
            if(ele.id == "headerMenu") {
                var rect = ele.getBoundingClientRect();
                getEle("cursor").style.left = rect.left + (rect.width / 2) + "px";
                getEle("cursor").style.top = rect.top + (rect.height / 2) + "px";
                getEle("cursor").style.transform = "translate(-50%, -50%) scale(1.1)";
                // getEle("cursor").style.backgroundColor = "#D84B8621";
                // getEle("cursor").style.borderColor = "var(--pink)";
                found = true;
            }
        })
        
    } catch (error) {
        
    }*/

    if(!found) {
        getEle("cursor").style.transform = "translate(-50%, -50%)";
        getEle("cursor").style.backgroundColor = "#EFEAFF21";
        getEle("cursor").style.borderColor = "var(--white)";
    }
}

function changeMenu() {
    if(menuOpened) {
        getEle("headerMenu").setAttribute("state", "closed");
        getEle("heroSection").style.transform = "translateX(0vw)";
        getEle("contentSection").style.transform = "translateX(0vw)";
        getEle("menuSection").style.transform = "translateX(25vw)";
        menuOpened = false;
    } else {
        getEle("headerMenu").setAttribute("state", "opened");
        getEle("heroSection").style.transform = "translateX(-15vw)";
        getEle("contentSection").style.transform = "translateX(-25vw)";
        getEle("menuSection").style.transform = "translateX(0vw)";
        menuOpened = true;
    }
}