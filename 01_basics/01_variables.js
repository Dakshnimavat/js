const accountId = 445565
let accountEmail = "daksh@google.com"
var accountPassword = "12345"
accountCity = "surat"
let accountState;

// accountId = 2

accountEmail = "ok@ok.com"
accountPassword = "32"
accountCity = "vadodara"


/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
