

var arr = [23, 4, 5, 8, 10, 45, 7, 12, 11, 88, 33, 77];

// indexOf(), includes()

console.log(arr.indexOf(10));

console.log(arr.includes(10));


var nameList = ["jaman", "kamal", "kabir", "ashik", "hasan"];

function searchUser(nameList, userName) {

    var user = userName.toLowerCase().trim();
    
    return nameList.includes(user) ? nameList.indexOf(user) : -1;

}

console.log(searchUser(nameList, "Kabir"));
