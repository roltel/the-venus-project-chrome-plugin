$(document).ready(function(){
  $("#accordian h3").click(function(){
    //slide up all the link lists
    $("#accordian ul ul").slideUp();
    //slide down the link list below the h3 clicked - only if its closed
    if(!$(this).next().is(":visible"))
    {
      $(this).next().slideDown();
    }
  })
})

$( "#chat" ).click(function() {
  window.open($(this).attr('href'),'#TVP','width=400,height=500');
	return false;
})
