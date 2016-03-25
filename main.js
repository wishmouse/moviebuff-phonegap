var request = require('superagent')
var $ = require("jquery");

var test_data = {
  "page": 1,
  "results": [
    {
      "profile_path": "/6gYt0WPYGs3EqO9pUhlO68igWvD.jpg",
      "adult": false,
      "id": 2387,
      "known_for": [
        {
          "poster_path": "/qKkFk9HELmABpcPoc1HHZGIxQ5a.jpg",
          "adult": false,
          "overview": "The ultimate X-Men ensemble fights a war for the survival of the species across two time periods as they join forces with their younger selves in an epic battle that must change the past – to save our future.",
          "release_date": "2014-05-15",
          "original_title": "X-Men: Days of Future Past",
          "genre_ids": [
            28,
            12,
            14,
            878
          ],
          "id": 127585,
          "media_type": "movie",
          "original_language": "en",
          "title": "X-Men: Days of Future Past",
          "backdrop_path": "/5LBcSLHAtEIIgvNkA2dPmYH5wR7.jpg",
          "popularity": 6.90803,
          "vote_count": 3143,
          "video": false,
          "vote_average": 7.6
        },
        {
          "poster_path": "/yLdP2vDa1BqxLSbikGypGtAEOGe.jpg",
          "adult": false,
          "overview": "Family Guy creator Seth MacFarlane brings his boundary-pushing brand of humor to the big screen for the first time as writer, director and voice star of Ted. In the live action/CG-animated comedy, he tells the story of John Bennett, a grown man who must deal with the cherished teddy bear who came to life as the result of a childhood wish, and has refused to leave his side ever since.",
          "release_date": "2012-06-29",
          "original_title": "Ted",
          "genre_ids": [
            35,
            14
          ],
          "id": 72105,
          "media_type": "movie",
          "original_language": "en",
          "title": "Ted",
          "backdrop_path": "/sPiFgbWMSQxVMO6TuRFrkeWwarI.jpg",
          "popularity": 4.243096,
          "vote_count": 2741,
          "video": false,
          "vote_average": 6.35
        },
        {
          "poster_path": "/9wZFonA8gaMgebNMpWJ81xf5eBe.jpg",
          "adult": false,
          "overview": "Wolverine faces his ultimate nemesis - and tests of his physical, emotional, and mortal limits - in a life-changing voyage to modern-day Japan.",
          "release_date": "2013-07-23",
          "original_title": "The Wolverine",
          "genre_ids": [
            28,
            878,
            12,
            14
          ],
          "id": 76170,
          "media_type": "movie",
          "original_language": "en",
          "title": "The Wolverine",
          "backdrop_path": "/oFyaTmJ5ZPPl16uB4Ry9pWKvtDc.jpg",
          "popularity": 1.637123,
          "vote_count": 2650,
          "video": false,
          "vote_average": 6.38
        }
      ],
      "name": "Patrick Stewart",
      "popularity": 15.039852
    },
    {
      "profile_path": null,
      "adult": false,
      "id": 1275744,
      "known_for": [
        {
          "poster_path": "/kZdoTH4YSVnOByLCRGX4HTafmLM.jpg",
          "adult": false,
          "overview": "Phil Hartman hosts this retrospective look back at the legacy and making of the classic 1966 holiday special 'How the Grinch Stole Christmas!'",
          "release_date": "1994-12-12",
          "original_title": "The Making of Dr. Seuss' 'How the Grinch Stole Christmas!'",
          "genre_ids": [
            99
          ],
          "id": 240662,
          "media_type": "movie",
          "original_language": "en",
          "title": "The Making of Dr. Seuss' 'How the Grinch Stole Christmas!'",
          "backdrop_path": null,
          "popularity": 1.000157,
          "vote_count": 0,
          "video": false,
          "vote_average": 0
        }
      ],
      "name": "Patrick Stewart",
      "popularity": 1
    },
    {
      "profile_path": null,
      "adult": false,
      "id": 1209909,
      "known_for": [
        {
          "poster_path": "/lgVzwhUnXEzbAWjJjcmzaGgM7Es.jpg",
          "adult": false,
          "overview": "A production company begins casting for its next feature, and an up-and-coming actress named Rose tries to manipulate her filmmaker boyfriend, Alex, into giving her a screen test. Alex's wife, Emma, knows about the affair and is considering divorce, while Rose's girlfriend secretly spies on her and attempts to sabotage the relationship. The four storylines in the film were each shot in one take and are shown simultaneously, each taking up a quarter of the screen.",
          "release_date": "2000-03-22",
          "original_title": "Timecode",
          "genre_ids": [
            18
          ],
          "id": 36234,
          "media_type": "movie",
          "original_language": "en",
          "title": "Timecode",
          "backdrop_path": "/8nKmHIdxb1OAYzjGdxMdX1h1HwJ.jpg",
          "popularity": 1.068956,
          "vote_count": 9,
          "video": false,
          "vote_average": 5.44
        },
        {
          "poster_path": "/5J8UIHzRvsPz8Uem2juumPda7NJ.jpg",
          "adult": false,
          "overview": "There is a centuries-old seawall in the ancient port of Akka, located on Israel's northern coast. Today, Akka is a modern city inhabited by Muslims, Christians, Jews, and Baha'i, but its history goes all the way back to rule of the Egyptian Pharaohs. Young people dare to stand atop the 40' one-meter thick block structure and risk their fate by jumping into the roiling sea. This perilous tradition has continued for many generations, and has become a rite of passage for the children of Akka. \"It's Better to Jump\" is about the ancient walled city of Akka as it undergoes harsh economic pressures and vast social change. The film focuses on the aspirations and concerns of the Palestinian inhabitants who call the Old City home.",
          "release_date": "2013-11-15",
          "original_title": "It's Better to Jump",
          "genre_ids": [],
          "id": 224334,
          "media_type": "movie",
          "original_language": "en",
          "title": "It's Better to Jump",
          "backdrop_path": null,
          "popularity": 1.002573,
          "vote_count": 2,
          "video": false,
          "vote_average": 0.75
        }
      ],
      "name": "Patrick Alexander Stewart",
      "popularity": 1
    },
    {
      "profile_path": null,
      "adult": false,
      "id": 1507139,
      "known_for": [
        {
          "poster_path": "/5jI3lTsQ3ZUn8fkt7B7EF1ejmWw.jpg",
          "adult": false,
          "overview": "A number of 'missing person' cases are reported in Phoenix, Arizona when an unexplained light appears in the sky one night in 1997.",
          "release_date": "2015-06-16",
          "original_title": "The Phoenix Incident",
          "genre_ids": [
            27,
            53,
            878
          ],
          "id": 321039,
          "media_type": "movie",
          "original_language": "en",
          "title": "The Phoenix Incident",
          "backdrop_path": "/sdp8Xo6E2qRMpnspVtRtXwYyr0B.jpg",
          "popularity": 1.082512,
          "vote_count": 4,
          "video": false,
          "vote_average": 4.63
        }
      ],
      "name": "James Patrick Stewart",
      "popularity": 1.000192
    }
  ],
  "total_results": 4,
  "total_pages": 1
}

//get search input from user...

//call api with serach criteria....

//get response back from api and render it to the user screen....

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




