let {PythonShell} = require("python-shell");
var path = require("path")
// ////https://stackoverflow.com/questions/23450534/how-to-call-a-python-function-from-node-js

function one(){
    console.log("HELLO");
}

////https://stackoverflow.com/questions/23450534/how-to-call-a-python-function-from-node-js

// var options = {
//     //scriptPath : path.join('test.py'), //__dirname, '/../engine/'
//     //args : [city]
// }
// let pyshell = new PythonShell('test.py');//, options


// pyshell.on('message', function(message) {
// //swal(message);
// console.log(message);
// })

function pyth(){

    // const {PythonShell} = require("python-shell")
    // var path = require("path")
    // ////https://stackoverflow.com/questions/23450534/how-to-call-a-python-function-from-node-js

    // var options = {
    // //scriptPath : path.join('test.py'), //__dirname, '/../engine/'
    // //args : [city]
    // }
    let pyshell = new PythonShell('test.py');//, options


    pyshell.on('message', function(message) {
    //swal(message);
    console.log(message);

    })
    console.log("hello");
    //var mtitle = document.getElementById("title");
    //mtitle.innerHTML = "hello worlgd";
    //var mtitle = document.getElementById("title");
    //mtitle.innerHTML = "hello worlgd";
    // var options = {
    //     //scriptPath : path.join('test.py'), //__dirname, '/../engine/'
    //     //args : [city]
    // }
    // let pyshell = new PythonShell('test.py');//, options


    // pyshell.on('message', function(message) {
    // //swal(message);
    // console.log(message);
    // })
}

//pyth();
// function get_weather() {

//   var city = document.getElementById("city").value

//   var options = {
//     scriptPath : path.join(__dirname, '/../engine/'),
//     args : [city]
//   }

//   let pyshell = new PythonShell('weather_engine.py', options);


//   pyshell.on('message', function(message) {
//     swal(message);
//   })
//   document.getElementById("city").value = "";
// }