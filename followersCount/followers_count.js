function increaseCount() {
    let count = parseInt(document.getElementById("countDisplay").innerText);
    console.log(count);
    count++;
    console.log(count);
    document.getElementById("countDisplay").innerText = count;
    function checkCountValue() {
        if (count === 10) {
          alert("Your Instagram post gained 10 followers! Congratulations!");
        } else if (count === 20) {
          alert("Your Instagram post gained 20 followers! Keep it up!");
        }
      }
    checkCountValue()
}

function resetCount () {
    document.getElementById("countDisplay").innerText = 0;
    var result = alert("the Followers count has been reset") // just a message; the variable is not used (undefined)
    console.log(result)
    var result = confirm("the Followers count has been reset") // yes or no; the variable is true or false
    console.log(result)
    var result = prompt("the Followers count has been reset") // the user can enter a value; the variable is the value entered
    console.log(result)
}