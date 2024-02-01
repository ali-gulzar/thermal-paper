function increaseCount(a, b) {
    var input = b.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}
  
function decreaseCount(a, b) {
    var input = b.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
      value = isNaN(value) ? 0 : value;
      value--;
      input.value = value;
    }
}

function sendOrder() {

    var orderValue = document.getElementById('order-value')
    var phoneNumber = document.getElementById('phoneNumber')

    Email.send({
        SecureToken : "81ff297e-ab9f-480f-a3ae-4e792e99151b",
        To : 'razathermalbusiness@outlook.com',
        From : 'razathermalbusiness@outlook.com',
        Subject : "You received an order!",
        Body : `Can you please send my an order of ${orderValue.value} thermal and contact me on ${phoneNumber.value}`
    }).then(() => {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        
        // Add the "show" class to DIV
        x.className = "show";

        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    })


    
}
  