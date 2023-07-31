const submit_button = document.querySelector(".button");
submit_button.onclick = (e) => {
    e.preventDefault();
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("pass").value;
    const cpass = document.getElementById("cpass").value;


    //  Storing this data in your web browser store

    // window.localStorage.setItem('FirstName', fname);
    // window.localStorage.setItem('Email', email);
    // window.localStorage.setItem('LastName', lname);
    // window.localStorage.setItem('Password', pass);
    // window.localStorage.setItem('Confirm password', cpass);

    const userDetail = {
        "firstName": fname,
        "lastName": lname,
        "Emailaddress": email,
        "Password": pass,
    }
    console.log(userDetail)


    // checkinng and set value of account
    const userdetails = JSON.parse(localStorage.getItem(email));
    if (userdetails !== null) {
        swal(
            'Opps..!',
            'Account already exist!',
            'error'
        );
    }
    else {
        
        // condition 
        if (fname == "" && lname == "" && email == "" && pass == "" && cpass == "") {
            // changing alert system
            swal("Oops!", "Input Field must be fill", "error");
            // alert("Input field has no value");
        }
        else {
            if (pass.length >= 6 && pass.length <= 14) {
                if (pass !== cpass) {
                    swal(
                        'Opps..!',
                        'Password not matching!',
                        'error'
                        );
                    }
                    else {
                        window.localStorage.setItem(email, JSON.stringify(userDetail));
                        swal(
                        'Good job!',
                        'Register successful!',
                        'success'
                    );
                    setTimeout(() => {
                        location.href = 'login.html';
                    }, 5000)
                }
            }
            else {
                swal(
                    'Opps..!',
                    'Input min 6 digit password and max 14 digit password !',
                    'error'
                );
            }

        }

    }



}