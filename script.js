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
    
    var happyArray =[];
    var sadArray = [];
    var partyArray = [];
    var studyArray = [];
    var nostalgicArray = [];
    var festiveArray = [];

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
            var songDiv = $("<div>");
            var artDiv = $("<div>");
            songDiv.addClass("song-div cell medium-3");
            artDiv.addClass("art-div cell medium-3");
            songDiv.text(song);
            artDiv.text(artist);
            $(".song-div").replaceWith(songDiv);
            $(".art-div").replaceWith(artDiv);

            switch (userBtn) {
                case document.getElementById("happy"):{
                    $(".pop").append(songDiv, artDiv)}
                    var happyObj = {};
                    happyObj["song"] = song;
                    happyObj["artist"] = artist;
                    happyArray.push(happyObj);
                    localStorage.setItem("happySongs", JSON.stringify(happyArray));               
                    break;
                case document.getElementById("sad") :
                    $(".emo").append(songDiv, artDiv);
                    var sadObj = {};
                    sadObj["song"] = song;
                    sadObj["artist"] = artist;
                    sadArray.push(sadObj);
                    localStorage.setItem("sadSongs", JSON.stringify(sadArray));
                    break;
                case document.getElementById("party") :
                    $(".hip-hop").append(songDiv, artDiv);
                    var partyObj = {};
                    partyObj["song"] = song;
                    partyObj["artist"] = artist;
                    partyArray.push(partyObj);
                    localStorage.setItem("partySongs", JSON.stringify(partyArray));
                    break;
                case document.getElementById("study") :
                    $(".piano").append(songDiv, artDiv);
                    var studyObj = {};
                    studyObj["song"] = song;
                    studyObj["artist"] = artist;
                    studyArray.push(studyObj);
                    localStorage.setItem("studySongs", JSON.stringify(studyArray));
                    break;
                case document.getElementById("nostalgic") :
                    $(".oldies").append(songDiv, artDiv);
                    var nostalgicObj = {};
                    nostalgicObj["song"] = song;
                    nostalgicObj["artist"] = artist;
                    nostalgicArray.push(nostalgicObj);
                    localStorage.setItem("nostalgicSongs", JSON.stringify(nostalgicArray));
                    break;
                case document.getElementById("festive") :
                    $(".christmas").append(songDiv, artDiv);
                    var festiveObj = {};
                    festiveObj["song"] = song;
                    festiveObj["artist"] = artist;
                    festiveArray.push(festiveObj);
                    localStorage.setItem("festiveSongs", JSON.stringify(festiveArray));
                    break;
                default :
                    break;
            };

           

            //Getting setItem to display onto History Screen
            //     Localstorage.getItem
            //     var x = JSON.parse(happyArray[1])
            // localStorage.getItem("happySongs");
            //     console.log(x);








        });
    
    
    
    
    
    
    
    



    
    });
    //This gets an ARRAY OF OBJECTS
    var getHappy = JSON.parse(localStorage.getItem("happySongs"))
    for (var i=0; i<getHappy.length;i++) {
        var happyRet= getHappy[i]//Gives us an Object in the Array
        //console.log(y);
        happyRet.song;
        happyRet.artist;
        //console.log(y.song);
        //console.log(y.artist);
    
    }
    //console.log(x);
    
   var entry = $("<tr>")
   var entryMood = $("<td>").text("Mood")
   var entrySong = $("<td>").text(happyRet.song);
   var entryArtist = $("<td>").text(happyRet.artist);
   entry.append(entryMood, entrySong, entryArtist);
   $("tbody").prepend(entry);
   //$(includeEntrySong).text();
   

   //$(songEntry).text(x);















});