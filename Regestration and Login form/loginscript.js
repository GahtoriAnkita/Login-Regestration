
// login function

const login = document.querySelector('.login');
login.onclick = (e) => {
    e.preventDefault();
    // cautch the value which is type user login page
    const emailAddress = document.getElementById("emailAddress").value;
    const passWord = document.getElementById("passWord").value;


    // let's get value in localstorage which store user in registration field
    const Email = localStorage.getItem("Email");
    const Password = localStorage.getItem("Password");

    if (emailAddress == "" && passWord == "") {
        swal(
            'Opps..!',
            'input field has no value!',
            'error'
        );
    }
    else {
        const userdetails = JSON.parse(localStorage.getItem(emailAddress));
        console.log(userdetails)
        if (userdetails !== null) {
            if (emailAddress == userdetails['Emailaddress'] && passWord == userdetails['Password']) {
                swal(
                    'Good job!',
                    'login successful!',
                    'success'
                );
                setTimeout(() => {
                    location.href = 'https://www.google.com';
                }, 3000)
            }
            else {
                swal(
                    'oopss',
                    'Password does not match!',
                    'error'
                );
            }
        }
        else {
            swal(
                'Opps..!',
                'Account does not exit!',
                'error'
            );
            setTimeout(() => {
                location.href = 'index.html';
            }, 3000)
        }
    };


};