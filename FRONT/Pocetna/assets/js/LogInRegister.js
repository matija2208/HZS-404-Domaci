var valid_test;

function everything_filled(entries){
    if(entries.ime_input.value.length == 0){
        valid_test = false;
        document.getElementById("EmptyNameWarning").classList.remove("hidden");
    } else document.getElementById("EmptyNameWarning").classList.add("hidden");

    if(entries.mail_input.value.length == 0){
        valid_test = false;
        document.getElementById("EmptyMailWarning").classList.remove("hidden");
    } else document.getElementById("EmptyMailWarning").classList.add("hidden");

    if(entries.pass_input.value.length == 0){
        valid_test = false;
        document.getElementById("EmptyPassWarning").classList.remove("hidden");
    } else document.getElementById("EmptyPassWarning").classList.add("hidden");

    if(entries.pass_repeat.value.length == 0){
        valid_test = false;
        document.getElementById("EmptyRepeatWarning").classList.remove("hidden");
    } else document.getElementById("EmptyRepeatWarning").classList.add("hidden");
}

function regex_valid_name(entries){
    var pattern = /^[A-Za-z0-9]{1,30}$/;
    var tekst = entries.ime_input.value;
    var test = tekst.match(pattern);

    if (test == null) {
        document.getElementById("ErrorNameWarning").classList.remove("hidden");
        valid_test = false;
    } else{
      console.log("validirano ime korisnika...");
      document.getElementById("ErrorNameWarning").classList.add("hidden");
    }
}

function regex_valid_mail(entries){
    var pattern = /^[a-zA-Z0-9]+@[a-z]{2,10}\.[a-z]{2,4}$/;
    var tekst = entries.mail_input.value;
    var test = tekst.match(pattern);

    if (test == null) {
        document.getElementById("ErrorMailWarning").classList.remove("hidden");
        valid_test = false;
    } else{
      console.log("validiran email korisnika...");
      document.getElementById("ErrorMailWarning").classList.add("hidden");
    }
}

function regex_valid_pass(entries){
   var pattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
   var tekst = entries.pass_input.value;
   var test = tekst.match(pattern);

   if (test == null) {
        document.getElementById("ErrorPassWarning").classList.remove("hidden");
        valid_test = false;
    } else{
      console.log("validirana lozinka korisnika...");
      document.getElementById("ErrorPassWarning").classList.add("hidden");
    }
}

function regex_valid_repeat(entries){
    var password = entries.pass_input.value;
    var repeatPass = entries.pass_repeat.value;
    if(password != repeatPass){
        valid_test = false;
        document.getElementById("ErrorRepeatWarning").classList.remove("hidden");
    } else{
        console.log("validirana ponovljena lozinka korisnika...");
        document.getElementById("ErrorRepeatWarning").classList.add("hidden");
    }
}

function registruj(entries){
    var korisnicko_ime = entries.ime_input.value;
    var e_mail_korisnika = entries.mail_input.value;
    var lozinka_korisnika = entries.pass_input.value;

    console.log(korisnicko_ime, e_mail_korisnika, lozinka_korisnika);
}

function ValidirajRegister(){
    valid_test = true;
    var entries = document.getElementById("forma");
    everything_filled(entries);
    regex_valid_name(entries);
    regex_valid_mail(entries)
    regex_valid_pass(entries);
    regex_valid_repeat(entries);

    if(valid_test == true){
        registruj(entries);
    } else{
        console.log("Korisnik se ne registruje");
    }
}

