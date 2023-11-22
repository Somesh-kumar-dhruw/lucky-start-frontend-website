


function validation(){

    var username = 'admin@admin.com';
    var password = '123456';

    var userName = document.getElementById('username').value;
    var passWord = document.getElementById('password').value;

    if((username === userName) && (password === passWord)) {
        alert("Login Successful");
        
    }
    else{
        alert("Incorrect email or passsword");
    }
}
