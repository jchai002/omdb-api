$(document).ready(function(){
  $('#domainform').on('submit', function(e){
    e.preventDefault();


    $('#content').html('<center><img src="img/loader.gif" alt="loading..."></center>');

    var html = '<ul class="linklist">\n'

    var input = $('#s').val();
    var title_search = 'http://www.omdbapi.com/?t='
    $.getJSON(title_search+input).then(function(data){
      var title = data.Title
      var date = data.Released
      var poster = data.Poster
      var actors = data.Actors
      var plot = data.Plot

      html += '<li><h1> Title: '+ title + '</h1></li><br>'
      html += '<li><p> Released: '+ date + '</p></li><br>'
      html += '<li><p> Actors: '+ actors + '</p></li><br>'
      html += '<li><p> Plot: '+ plot + '</p></li><br>'
      html += '<img src=' + poster + '/><br>'

    htmlOutput(html)
    })
  })

  function htmlOutput(html) {
    html += '</ul>';

    $('#content').html(html);
  }
})
