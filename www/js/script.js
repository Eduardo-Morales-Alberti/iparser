
$(document).ready(function () {
  var txt = "";
  $("#white-eyes").click(function () {
    txt = $("#origin").val();
    txt = txt.replace(/[aeiouáéíóú]/igm, "i");
    $("#destiny").val(txt);
  });
});

