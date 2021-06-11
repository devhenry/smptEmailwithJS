


sendMail = () => {
    var rec = document.getElementById("recip").value;
   
    var sub = document.getElementById("subject").value;
    var bod = document.getElementById("body").value;
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kemiflex@gmail.com",
        Password : "022470325144E5CC1B4EB6B8745F6E041914",
        To : rec,
        From : "kemiflex@gmail.com" ,
        Subject : sub ,
        Body : bod 
    }).then(
      message => alert(message)
    );
}
