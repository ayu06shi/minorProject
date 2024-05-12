document.getElementById('form-card').addEventListener('submit', function myFunc(event){
    event.preventDefault();
    let now = new Date();
    let currentYear = now.getFullYear();

    let phn = document.getElementById('phn').value;
    let zip = document.getElementById('zip').value;
    var birthDate = document.getElementById("dob").value;
    let email = document.getElementById('email').value;
    let parts = birthDate.split('-');
    let year = parseInt(parts[0], 10);
    

    if(year >= currentYear || currentYear - year < 15) {
        alert("Your age must be above 15");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email)){
        alert("Please enter a valid Email");
        return;
    }

    if(phn.length !== 10){
        alert("Please enter a 10-digit phone number");
        return;
    }

    if(zip.length !== 6){
        alert("Please enter a 6-digit zip code");
        return;
    }

    alert("Registration Successful !")

}) 

