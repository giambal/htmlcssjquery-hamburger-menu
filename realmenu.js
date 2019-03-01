$(".ham-menu").click(function(){
  $(".hide-menu").show(100);
  $("#home").slideToggle(100,function(){
    $("#cont").slideToggle(100 , function() {
      $("#get").slideToggle(100, function () {
        $("#about").slideToggle(100);
      })
    })
  })
})
