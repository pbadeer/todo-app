$(document).ready(function(){
  var listItems = [];

  function renderAll() {
    $('ol').html('');
    
    for (var i = 0; i < listItems.length; i++) {
      $('ol').append("<li>" + listItems[i] + " (date here)</li>");
    }
  }

  $('form').submit(function(event) {
    event.preventDefault();
    
    listItems.push( $('.input').val() );
    renderAll();

    $('.input').val('');
  });

  renderAll();
});