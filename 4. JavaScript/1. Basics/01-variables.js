
`
Three types of decleartion of JS
1. var 
2. let 
3. const 

var: Before ES6, Javascript did not have Block Scope. Javascript had Global and Funciton Scope. ES6 introduced two new Javascript keywords 'let' and 'const'. These two keywords provides block scoope in 'Javascript'.
`

`var -> `

var x = 10; 
console.log(x) // 10

{
    var x = 100;
    console.log(x) // 100
}

console.log(x) // 100


`let -> `

let a = 99;
console.log(a) // 99

{
    let a = 999;
    console.log(a) // 999 
}

console.log(a) // 99
