$(document).ready(function() {

//Tells jquery to wait until dom has loaded before loading jquery

var inputData = $("#button").click(function() {

var rawInput = $("#searchInput").val().toString();

console.log(typeof rawInput)
})
});

console.log(dataForGetRequest)

document.addEventListener('DOMContentLoaded', function() {
    getMovieByActor("Mike Tyson", function(err, data){

    var movies = data.body.results[0].known_for


    renderMovieResults(movies)
  })

})

function renderMovieResults(movies) {
  console.log(document)
  for (var i = 0; i < movies.length; i++) {

    console.log(movies[i].title)
    $("#nav").append(movies[i].title + "<br>" + "<img src='https://image.tmdb.org/t/p/w185/" + movies[i].poster_path +"'> <br>")

  }
  document.getElementById('footer').innerHTML = "<h1>"+ "test" + "</h1>"


}

function getMovieByActor(name, callback){

  name = escape(name)
  console.log(name)
  request.get("http://api.themoviedb.org/3/search/person?api_key=da40aaeca884d8c9a9a4c088917c474c&query=" + name)
    .set('Accept', 'application/json')
    .end(function(err, res){
      if (err) {
        callback(err)
        return
      }
      callback(null, res)
    })

}




