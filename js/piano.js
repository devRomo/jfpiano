$(document).ready(function(){
//C Note
  $("#C").on("click", function(){
      document.getElementById("cSound").play();
      $("span").text("C");
  });
//C# Note
  $("#Cs").on("click", function(){
      document.getElementById("csSound").play();
      $("span").text("C#");
  });
//D Note
  $("#D").on("click", function(){
      document.getElementById("dSound").play();
      $("span").text("D");
  });
//D# Note
$("#Ds").on("click", function(){
    document.getElementById("dsSound").play();
    $("span").text("D#");
});
//E Note
$("#E").on("click", function(){
    document.getElementById("eSound").play();
    $("span").text("E");
});
//F Note
$("#F").on("click", function(){
    document.getElementById("fSound").play();
    $("span").text("F");
});
//F# Note
$("#Fs").on("click", function(){
    document.getElementById("fsSound").play();
    $("span").text("F#");
});
//G Note
$("#G").on("click", function(){
    document.getElementById("gSound").play();
    $("span").text("G");
});
//G# Note
$("#Gs").on("click", function(){
    document.getElementById("gsSound").play();
    $("span").text("G#");
});
//A Note
$("#A").on("click", function(){
    document.getElementById("aSound").play();
    $("span").text("A");
});
//A# Note
$("#As").on("click", function(){
    document.getElementById("asSound").play();
    $("span").text("A#");
});
//B Note
$("#B").on("click", function(){
    document.getElementById("bSound").play();
    $("span").text("B");
});

//*********Right Side ********//

//C2 Note
  $("#C2").on("click", function(){
      document.getElementById("c2Sound").play();
      $("span").text("C2");
  });
//C2# Note
  $("#C2s").on("click", function(){
      document.getElementById("c2sSound").play();
      $("span").text("C2#");
  });
//D2 Note
  $("#D2").on("click", function(){
      document.getElementById("d2Sound").play();
      $("span").text("D2");
  });
//D2# Note
$("#D2s").on("click", function(){
    document.getElementById("d2sSound").play();
    $("span").text("D2#");
});
//E2 Note
$("#E2").on("click", function(){
    document.getElementById("e2Sound").play();
    $("span").text("E2");
});
//F2 Note
$("#F2").on("click", function(){
    document.getElementById("f2Sound").play();
    $("span").text("F2");
});
//F2# Note
$("#F2s").on("click", function(){
    document.getElementById("f2sSound").play();
    $("span").text("F2#");
});
//G Note
$("#G2").on("click", function(){
    document.getElementById("g2Sound").play();
    $("span").text("G2");
});
//G# Note
$("#G2s").on("click", function(){
    document.getElementById("g2sSound").play();
    $("span").text("G2#");
});
//A Note
$("#A2").on("click", function(){
    document.getElementById("a2Sound").play();
    $("span").text("A2");
});
//A# Note
$("#A2s").on("click", function(){
    document.getElementById("a2sSound").play();
    $("span").text("A2#");
});
//B Note
$("#B2").on("click", function(){
    document.getElementById("b2Sound").play();
    $("span").text("B2");
});

  //Keyboard Events ------------------------------------------------
//C Key
$(document).keydown(function(e) {
  if(e.which == 65){
    $("#C").trigger("click");
    $("#C").addClass('activate');
  };
});

$(document).keyup(function(e) {
  if(e.which == 65){
    $("#C").removeClass('activate');
  };
});
//C# Key
  $(document).keydown(function(e) {
    if(e.which == 87){
      $("#Cs").trigger("click");
      $("#Cs").addClass("activate");
    };
  });

  $(document).keyup(function(e) {
    if(e.which == 87){
      $("#Cs").removeClass('activate');
    };
  });
//D Key
  $(document).keydown(function(e) {
    if(e.which == 83){
      $("#D").trigger("click");
      $("#D").addClass("activate");
    };
  });
$(document).keyup(function(e) {
  if(e.which == 83){
    $("#D").trigger("click");
    $("#D").removeClass("activate");
  };
});
//D# Key
  $(document).keydown(function(e) {
    if(e.which == 69){
      $("#Ds").trigger("click");
      $("#Ds").addClass("activate");
    };
  });
$(document).keyup(function(e) {
  if(e.which == 69){
    $("#Ds").trigger("click");
    $("#Ds").removeClass("activate");
  };
});
//E Key
$(document).keydown(function(e) {
  if(e.which == 68){
    $("#E").trigger("click");
    $("#E").addClass("activate");
  };
});
$(document).keyup(function(e) {
if(e.which == 68){
  $("#E").trigger("click");
  $("#E").removeClass("activate");
};
});
//F Key
$(document).keydown(function(e) {
  if(e.which == 70){
    $("#F").trigger("click");
    $("#F").addClass("activate");
  };
});
$(document).keyup(function(e) {
  if(e.which == 70){
    $("#F").trigger("click");
    $("#F").removeClass("activate");
  };
  });
//F# Key
$(document).keydown(function(e) {
  if(e.which == 84){
    $("#Fs").trigger("click");
    $("#Fs").addClass("activate");
  };
});
$(document).keyup(function(e) {
  if(e.which == 84){
    $("#Fs").trigger("click");
    $("#Fs").removeClass("activate");
  };
  });
//G Key
$(document).keydown(function(e) {
  if(e.which == 71){
    $("#G").trigger("click");
    $("#G").addClass('activate');
  };
});

$(document).keyup(function(e) {
  if(e.which == 71){
    $("#G").trigger("click");
    $("#G").removeClass("activate");
  };
  });
//G# Key
$(document).keydown(function(e) {
  if(e.which == 89){
    $("#Gs").trigger("click");
    $("#Gs").addClass('activate');
  };
});

$(document).keyup(function(e) {
  if(e.which == 89){
    $("#Gs").trigger("click");
    $("#Gs").removeClass('activate');
  };
});
//A Key
$(document).keydown(function(e) {
  if(e.which == 72){
    $("#A").trigger("click");
    $("#A").addClass('activate');
  };
});

$(document).keyup(function(e) {
  if(e.which == 72){
    $("#A").trigger("click");
    $("#A").removeClass('activate');
  };
});
//A# Key
$(document).keydown(function(e) {
  if(e.which == 85){
    $("#As").trigger("click");
    $("#As").addClass('activate');
  };
});

$(document).keyup(function(e) {
  if(e.which == 85){
    $("#As").trigger("click");
    $("#As").removeClass('activate');
  };
});
//B Key
$(document).keydown(function(e) {
  if(e.which == 74){
    $("#B").trigger("click");
    $("#B").addClass('activate');
  };
});

$(document).keyup(function(e) {
  if(e.which == 74){
    $("#B").trigger("click");
    $("#B").removeClass('activate');
  };
});

//*************** Right Side Key *****************
//C2 Key
  $(document).keydown(function(e) {
    if(e.which == 75){
      $("#C2").trigger("click");
      $("#C2").addClass('activate');
    };
  });

  $(document).keyup(function(e) {
    if(e.which == 75){
      $("#C2").trigger("click");
      $("#C2").removeClass('activate');
    };
  });
//C2# Key
  $(document).keydown(function(e) {
    if(e.which == 79){
      $("#C2s").trigger("click");
      $("#C2s").addClass('activate');
    };
  });

  $(document).keyup(function(e) {
    if(e.which == 79){
      $("#C2s").trigger("click");
      $("#C2s").removeClass('activate');
    };
  });
//D2 Key
  $(document).keydown(function(e) {
    if(e.which == 76){
      $("#D2").trigger("click");
      $("#D2").addClass('activate');
    };
  });

  $(document).keyup(function(e) {
    if(e.which == 76){
      $("#D2").trigger("click");
      $("#D2").removeClass('activate');
    };
  });
//D2# Key
  $(document).keydown(function(e) {
    if(e.which == 80){
      $("#D2s").trigger("click");
      $("#D2s").addClass('activate');
    };
  });

  $(document).keyup(function(e) {
    if(e.which == 80){
      $("#D2s").trigger("click");
      $("#D2s").removeClass('activate');
    };
  });
//E2 Key
$(document).keydown(function(e) {
  if(e.which == 186){
    $("#E2").trigger("click");
    $("#E2").addClass('activate');
  };
});

$(document).keyup(function(e) {
  if(e.which == 186){
    $("#E2").trigger("click");
    $("#E2").removeClass('activate');
  };
});
//F2 Key
$(document).keydown(function(e) {
  if(e.which == 222){
    $("#F2").trigger("click");
    $("#F2").addClass('activate');
  };
});

$(document).keyup(function(e) {
  if(e.which == 222){
    $("#F2").trigger("click");
    $("#F2").removeClass('activate');
  };
});
//F2# Key
$(document).keydown(function(e) {
  if(e.which == 219){
    $("#F2s").trigger("click");
    $("#F2s").addClass('activate');
  };
});

$(document).keyup(function(e) {
  if(e.which == 219){
    $("#F2s").trigger("click");
    $("#F2s").removeClass('activate');
  };
});
//G2 Key
$(document).keydown(function(e) {
  if(e.which == 188){
    $("#G2").trigger("click");
    $("#G2").addClass("activate");
  };
});

$(document).keyup(function(e) {
  if(e.which == 188){
    $("#G2").trigger("click");
    $("#G2").removeClass("activate");
  };
});
//G2# Key
$(document).keydown(function(e) {
  if(e.which == 221){
    $("#G2s").trigger("click");
    $("#G2s").addClass('activate');
  };
});

$(document).keyup(function(e) {
  if(e.which == 221){
    $("#G2s").trigger("click");
    $("#G2s").removeClass('activate');
  };
});
//A2 Key
$(document).keydown(function(e) {
  if(e.which == 190){
    $("#A2").trigger("click");
    $("#A2").addClass('activate');
  };
});

$(document).keyup(function(e) {
  if(e.which == 190){
    $("#A2").trigger("click");
    $("#A2").removeClass('activate');
  };
});
//A2# Key
$(document).keydown(function(e) {
  if(e.which == 220){
    $("#A2s").trigger("click");
    $("#A2s").addClass('activate');
  };
});

$(document).keyup(function(e) {
  if(e.which == 220){
    $("#A2s").trigger("click");
    $("#A2s").removeClass('activate');
  };
});
//B2 Key
$(document).keydown(function(e) {
  if(e.which == 191){
    $("#B2").trigger("click");
    $("#B2").addClass('activate');
  };
});

$(document).keyup(function(e) {
  if(e.which == 191){
    $("#B2").trigger("click");
    $("#B2").removeClass('activate');
  };
});

});