function sendmail(){
    let parms = {
        name: document.getElementById("contact-name").value,
        email : document.getElementById("contact-email").value,
        message : document.getElementById("contact-message").value,
    }

    emailjs.send("service_gpdo28u","template_s4iim7l",parms).then(alert("Email Sent"))
}