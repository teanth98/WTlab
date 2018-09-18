function myFunction() {
    var x = document.getElementById("myEmail").pattern;
    }
function pass_validation()
{  
        var password=document.getElementById("psw").value;  

        if (password==null || password=="")
        {  
            alert("password can't be blank");  
            return false;  
        }
        else if(password.length<8)
        {  
        alert("Password must be at least 8 characters long.");  
            return false;  
        }  
}