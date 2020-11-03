$(".toggle_btn").click(
  function() {
    $(".tenda").slideToggle(3000, function(){
      alert("Lo spettacolo è cominciato!")
    })//3000 = 3 secondi + fynction etc = callback
  }
);
