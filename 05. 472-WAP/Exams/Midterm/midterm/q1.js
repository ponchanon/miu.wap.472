// function b() {
//     const y = 30;
//     a();
//     function a() {
//         console.log(x, y);
//     }
//     var x = 10;
//     console.log(x, y);
// }
// const x = 20;
// var y = 40;
// b();

//output


function foo(x) {
    let m;
    console.log(x, y);
    if (x > 5) {
        var y = 5;
        m = x + y;
    } else {
        let z = 10;
        m = z;
    }
    x = m;
    console.log(x, y);
}
var x = 10;
foo(3);
console.log(x);


// function b() {
//     const x = 10;
//     a(50);
//     function a(x) {
//         console.log(x);
//     }
// }

// var x = 20;
// b();