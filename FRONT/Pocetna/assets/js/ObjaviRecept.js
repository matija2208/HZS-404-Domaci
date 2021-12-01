var valid_test;

function validiraj(){
    valid_test=true;
    everything_filled();
    valid_name();
    valid_tags();
    valid_link();

   if(valid_test == true){
      objavi_post();
    } else{
      console.log("Post se ne objavljuje");
    }
  }

  function everything_filled(){
      var entries = document.getElementById("forma");
      if(entries.ime_jela_input.value.length == 0){
        valid_test = false;
        document.getElementById("EmptyNameWarning").classList.remove("d-none");
      } else document.getElementById("EmptyNameWarning").classList.add("d-none");

      if(entries.opis_jela_input.value.length == 0){
        valid_test = false;
        document.getElementById("EmptyRecipeWarning").classList.remove("d-none");
      } else document.getElementById("EmptyRecipeWarning").classList.add("d-none");

      if(entries.sastojci_jela_input.value.length == 0){
        valid_test = false;
        document.getElementById("EmptySastojciWarning").classList.remove("d-none");
      } else document.getElementById("EmptySastojciWarning").classList.add("d-none");

      if(entries.vreme_jela_input.value.length == 0){
        valid_test = false;
        document.getElementById("EmptyTimeWarning").classList.remove("d-none");
      } else document.getElementById("EmptyTimeWarning").classList.add("d-none");

      if(entries.link_jela_input.value.length == 0){
        valid_test = false;
        document.getElementById("EmptyLinkWarning").classList.remove("d-none");
      } else document.getElementById("EmptyLinkWarning").classList.add("d-none");

      if(entries.tagovi_jela_input.value.length == 0){
        valid_test = false;
        document.getElementById("EmptyTagsWarning").classList.remove("d-none");
      } else document.getElementById("EmptyTagsWarning").classList.add("d-none");
      
  }

  function valid_name(){
    var pattern = /^[A-Za-z ]{1,100}$/;
    var tekst = document.getElementById("forma").ime_jela_input.value;
    var test = tekst.match(pattern);

    if (test == null) {
        document.getElementById("NameWarning").classList.remove("d-none");
        valid_test = false;
    } else{
      console.log("validirano ime recepta...");
      document.getElementById("NameWarning").classList.add("d-none");
    }
  }

  function valid_tags(){
    var pattern = /^[A-Za-z, ]{1,100}$/;
    var tekst = document.getElementById("forma").tagovi_jela_input.value;
    var test = tekst.match(pattern);

    if (test == null) {
        document.getElementById("TagWarning").classList.remove("d-none");
        valid_test = false;
    } else{
      console.log("validirani tagovi recepta...");
      document.getElementById("TagWarning").classList.add("d-none");
    }
  }

  function valid_link(){
    var pattern = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
    var tekst = document.getElementById("forma").link_jela_input.value;
    var test = tekst.match(pattern);

    if (test == null) {
        document.getElementById("LinkWarning").classList.remove("d-none");
        valid_test = false;
    } else{
      console.log("validirani tagovi recepta...");
      document.getElementById("LinkWarning").classList.add("d-none");
    }
  }

  function objavi_post(){

    var entries = document.getElementById("forma");
    var ime = entries.ime_jela_input.value;
    var opis = entries.opis_jela_input.value;
    var sastojci = entries.sastojci_jela_input.value.split(",");
    var vreme = entries.vreme_jela_input.value;
    var imgLink = entries.link_jela_input.value;
    var tagovi = entries.tagovi_jela_input.value.split(",");

    for (var i = 0, len = sastojci.length; i < len; i++) {
      sastojci[i] = sastojci[i].trim();
    }

    for (var i = 0, len = tagovi.length; i < len; i++) {
      tagovi[i] = tagovi[i].trim();
    }

    var tezina = document.querySelector('input[name="tezina"]:checked').value;
    switch(tezina){
      case "Složeno":
        tezina = 3;
      break;
      
      case "Srednje":
        tezina = 2;
      break;

      case "Prosto":
        tezina = 1;
      break;
    }

    console.log("tadaa");
  }
  