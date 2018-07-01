//Design by Jmuthama - slack handle @_iswaema
function makeGrid() {

  // Select size input declarations

  var canvas, cell, Height, Width, rows;

  canvas = $('#pixelCanvas');
  Height = $('#inputHeight').val();
  Width = $('#inputWeight').val();

  canvas.children().remove()

  for (x = 0; x <Height; x++) {
    canvas.append('<tr></tr>');
  }

  rows = $('tr');

  for (y = 0; y <Width; y++) {
    rows.append('<td></td>');
  }

  cell = canvas.find('td');

  // When each box is clicked by the user, change color of the box to draw art
  cell.click(function () {
    // Select color input
    var color;
    color = $("#colorPicker").val();
    $(this).attr('bgcolor', color);
  });

}

// Design grid with user parameters: call makeGrid()
var submitQuery;

submitQuery = $('input[type="submit"]')

submitQuery.click(function (event) {
  event.preventDefault();
  makeGrid();
});

$("body").css({
  "background-color": "Lightgray",
   
});

//inline css here is not so bad
$("h2").css({
    "border": "0px solid gray"
});
