// Load Javascript after HTML finished loading
$(document).ready(function(){
    //Declare & Define Variables

    // var btns = $("button"); // array
    //Musixmatch genre id in data-genre
    var genreId; 
    // for (var i=0; i<btns.length; i++){
    //     btns[i].attr("data-genre");
    //     console.log(btns[i].attr("data-genre"));
    // };
    
    
    $(document).on("click", "button", (e) => {
        var userBtn = e.target;
        var pickGenre = userBtn.getAttribute("data-genre");
        genreId = pickGenre
        // console.log(userBtn);

        var queryURL = "https://cors-anywhere.herokuapp.com/" + "https://api.musixmatch.com/ws/1.1/track.search?" + "f_music_genre_id="+ genreId + "&apikey=a0c16acc7fa27d7659942b310a49033d";

    /* 
    api is track.search
    docs: 
        https://developer.musixmatch.com/documentation/api-reference/track-search
    endpoint: 
        http://api.musixmatch.com/ws/1.1/track.search?

    example:
        I want the top 3 tracks of Justin Bieber, sorted by track rating
        http://api.musixmatch.com/ws/1.1/track.search?q_artist=justin bieber&page_size=3&page=1&s_track_rating=desc

    params:
        q_track: The song title
        q_artist: The song artist
        q_lyrics: Any word in the lyrics
        q_track_artist: Any word in the song title or artist name
        q_writer: Search among writers
        q: Any word in the song title or artist name or lyrics
        f_artist_id: When set, filter by this artist id
        f_music_genre_id: When set, filter by this music category id
        f_lyrics_language: Filter by the lyrics language (en,it,..)
        f_has_lyrics: When set, filter only contents with lyrics
        f_track_release_group_first_release_date_min: When set, filter the tracks with release date newer than value, format is YYYYMMDD
        f_track_release_group_first_release_date_max: When set, filter the tracks with release date older than value, format is YYYYMMDD
        s_artist_rating: Sort by our popularity index for artists (asc|desc)
        s_track_rating: Sort by our popularity index for tracks (asc|desc)
        page: Define the page number for paginated results
        page_size: Define the page size for paginated results. Range is 1 to 100.
    */

    // AJAX call for musixmatch

        // AJAX call for musixmatch
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){

            // console.log(response); // gives string
            var obj = JSON.parse(response);
            // console.log(obj);

            // create click event on mood button
                // document.getElementById("sad");
                // document.querySelector("#sad"); // $("#sad"); // get element by id

            // change to userBtn, and add conditionals for other moods
            var tracks = obj.message.body.track_list;
            var ranTrack = tracks[Math.floor(Math.random()*tracks.length)];
            var song = ranTrack.track.track_name;
            var artist = ranTrack.track.artist_name;
            var songDiv = $("<div>").text(song);
            var artDiv = $("<div>").text(artist);
            
            switch (userBtn) {
                case document.getElementById("happy") :
                    $(".pop").append(songDiv, artDiv);

                    localStorage.setItem("happySongs", JSON.stringify(song, artist));
                    break;
                case document.getElementById("sad") :
                    $(".emo").append(songDiv, artDiv);
                    localStorage.setItem("sadSongs", JSON.stringify(song, artist));
                    break;
                case document.getElementById("party") :
                    $(".hip-hop").append(songDiv, artDiv);
                    localStorage.setItem("partySongs", JSON.stringify(song, artist));
                    break;
                case document.getElementById("study") :
                    $(".piano").append(songDiv, artDiv);
                    localStorage.setItem("studySongs", JSON.stringify(song, artist));
                    break;
                case document.getElementById("nostalgic") :
                    $(".oldies").append(songDiv, artDiv);
                    localStorage.setItem("nostalgicSongs", JSON.stringify(song, artist));
                    break;
                case document.getElementById("festive") :
                    $(".christmas").append(songDiv, artDiv);
                    localStorage.setItem("festiveSongs", JSON.stringify(song, artist));
                    break;
                default :
                    break;
            };
            
            // .parent().append(songDiv, artDiv);

            // $("#sad").on("click", () => {
            //     // genre -> genreId
            //     // grab track array from response
            //     var sadTracks = obj.message.body.track_list; // array of objects
            //     // console.log(sadTracks);
            //     // math.random -> array[index = random number]
            //         // var ran = Math.floor(Math.random()*sadTracks.length);
            //         // var ranTrack = sadTracks[ran];
            //     var ranTrack = sadTracks[Math.floor(Math.random()*sadTracks.length)];
            //     // console.log(ranTrack);
            //     // grab track_name and artist_name from selected array[i] & display in div
            //     // console.log(ranTrack.track.track_name);
            //     // console.log(ranTrack.track.artist_name);
            //     var songDiv = $("<div>").text(ranTrack.track.track_name);
            //     var artDiv = $("<div>").text(ranTrack.track.artist_name);
            //     $("#sad").parent().append(songDiv, artDiv);
            // });





        });
    });

    
    //Setting up Saving an item to Local Storage
//     $(document).ready(function() {
//              $(".button").on("click", function(){
//         var musicSave = $(this).parent().attr("data-genre");
//         var textSave= $(this).siblings("songDiv, artDiv").val();
//         localStorage.setItem(musicSave, textSave);
        
//     })
// });














});