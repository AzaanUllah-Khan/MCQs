function send(test) {
    var Test = test.previousElementSibling
    var toStore = (Test.innerHTML).toLowerCase()
    localStorage.setItem("test", toStore)
    window.location.href = "./mcqs.html"
}
const javascript = [
    {
        quetion: "What is the full form of JS",
        opt1: "Juggling scale",
        opt2: "Jelly Soft",
        opt3: "Java script",
        opt4: "Jendle Sendle",
    },
    {
        quetion: "What is push",
        opt1: "JS Method",
        opt2: "Dance Step",
        opt3: "Joke",
        opt4: "Motivational Qoute",
    }
]
const html = [
    {
        quetion: "What is full form of HTML",
        opt1: "hello tasty maggie lounge",
        opt2: "hyper text markup language",
        opt3: "hello tommy my lawyer",
        opt4: "it is nothing",
    }
]
const css = [
    {
        quetion: "What is background color used for",
        opt1: "setting text color",
        opt2: "setting background color",
        opt3: "setting text size",
        opt4: "setting font style",
    }
]
var currTest = localStorage.getItem("test")
var index = 0
function show() {
    document.getElementById("next").disabled = true
    if (currTest == "javascript") {
        document.getElementById("question").innerHTML = javascript[index].quetion
        document.getElementById("options").innerHTML = `
    <label for="opt1">
                <input type="radio" name="option" id="opt1" onchange="disability()">
                <h2>${javascript[index].opt1}</h2>
            </label>
            <label for="opt2">
                <input type="radio" name="option" id="opt2" onchange="disability()">
                <h2>${javascript[index].opt2}</h2>
            </label>
            <label for="opt3">
                <input type="radio" name="option" id="opt3" onchange="disability()">
                <h2>${javascript[index].opt3}</h2>
            </label>
            <label for="opt4">
                <input type="radio" name="option" id="opt4" onchange="disability()">
                <h2>${javascript[index].opt4}</h2>
            </label>
    `
    }
    else if (currTest == "html") {
        document.getElementById("question").innerHTML = html[index].quetion
        document.getElementById("options").innerHTML = `
    <label for="opt1">
                <input type="radio" name="option" id="opt1" onchange="disability()">
                <h2>${html[index].opt1}</h2>
            </label>
            <label for="opt2">
                <input type="radio" name="option" id="opt2" onchange="disability()">
                <h2>${html[index].opt2}</h2>
                </label>
            <label for="opt3">
                <input type="radio" name="option" id="opt3" onchange="disability()">
                <h2>${html[index].opt3}</h2>
                </label>
                <label for="opt4">
                <input type="radio" name="option" id="opt4" onchange="disability()">
                <h2>${html[index].opt4}</h2>
            </label>
    `
    }
    else if (currTest == "css") {
        document.getElementById("question").innerHTML = css[index].quetion
        document.getElementById("options").innerHTML = `
    <label for="opt1">
    <input type="radio" name="option" id="opt1" onchange="disability()">
                <h2>${css[index].opt1}</h2>
                </label>
            <label for="opt2">
                <input type="radio" name="option" id="opt2" onchange="disability()">
                <h2>${css[index].opt2}</h2>
            </label>
            <label for="opt3">
            <input type="radio" name="option" id="opt3" onchange="disability()">
                <h2>${css[index].opt3}</h2>
            </label>
            <label for="opt4">
                <input type="radio" name="option" id="opt4" onchange="disability()">
                <h2>${css[index].opt4}</h2>
            </label>
    `
    }
}
function disability() {
    document.getElementById("next").disabled = false
}
function next() {
    if (currTest == "javascript") {
        if (index < javascript.length - 1) {
            index++;
            show();
        } else {
            Swal.fire(
                'Completed',
                'Quiz Completed Successfuly',
                'success'
            ).then(()=>{
                location.replace("./index.html")
            })
        }
    } else if (currTest == "css") {
        if (index < css.length - 1) {
            index++;
            show();
        } else {
            Swal.fire(
                'Completed',
                'Quiz Completed Successfuly',
                'success'
            ).then(()=>{
                location.replace("./index.html")
            })
        }
    } else if (currTest == "html") {
        if (index < html.length - 1) {
            index++;
            show();
        } else {
            Swal.fire(
                'Completed',
                'Quiz Completed Successfuly',
                'success').then(()=>{
                    location.replace("./index.html")
                })
        }
    }
}

show()
console.log(index);
console.log(javascript.length);