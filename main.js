$(document).ready(function(){

    $(window).scroll(function(){
         if($(this).scrollTop() > 0){
            $('.header-area').addClass('sticky');
        }else{
            $('.header-area').removeClass('sticky');
        }
    });

    let menu_icon = document.querySelector('.menu-icon i');
    let menu_list = document.querySelector('header ul');

    menu_icon.onclick = () => {
        menu_icon.classList.toggle('bx-x');
        menu_list.classList.toggle('open');
    }
});


 function sendEmail(){
                Email.send({
                   Host : "smtp.elasticemail.com",
                   Username : "mithilanarmadaliyanage@gmail.com",
                   Password : "0D47AAC1231FC87ED3A472F984858438A532",
                    To : 'mithilanarmadaliyanage@gmail.com',
                    From : document.getElementById('email').value,
                    Subject : document.getElementById("subject").value,
                    Body : "Name: " + document.getElementById("name").value
                                    +"<br>Email: " + document.getElementById("email").value
                                    +"<br>Message: " + document.getElementById("msg").value

                }).then(
                  message => alert("Message Sent!")
                );
            }