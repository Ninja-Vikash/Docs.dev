const userId = 198
let userName = "vikash"
var userEmail = "vikash@google.com"
userCity = "jamshedpur"

// userId = 143         // constants are not re-assignable

console.log(userId)

/*
Prefer not to use var
because it has issues with block scope and functional scope

{
scope
}

scope used in if-else statements, loops and functions

if (condition) {

}

for (let i = 0; i < 5; i++) {

}

function () {

}
*/

console.table([userId, userName, userEmail, userCity])