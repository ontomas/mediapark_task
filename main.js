function validateForm()                                   
    {
        var email = document.forms["contactForm"]["email"];              
        var tel = document.forms["contactForm"]["phone_num"];   
        var time = document.forms["contactForm"]["content"]; 


        if (email.value == "")                                  
        {
            window.alert("Įveskite el. pašto adresą.");
            email.focus();
            return false;
        }
    
        if (email.value.indexOf("@", 0) < 0)                
        {
            window.alert("Neteisingai įvestas el. paštas.");
            email.focus();
            return false;
        }
    
        if (email.value.indexOf(".", 0) < 0)                
        {
            window.alert("Neteisingai įvestas el. paštas.");
            email.focus();
            return false;
        }
    
        if (tel.value == "")                          
        {
            window.alert("Įveskite telefono numerį.");
            tel.focus();
            return false;
        }
    
        if (time.value == "")                       
        {
            window.alert("Įveskite laiką.");
            time.focus();
            return false;
        }
    
        else return true;
    }

