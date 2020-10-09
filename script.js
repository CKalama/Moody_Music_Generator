

// Load Javascript after HTML finished loading
$(document).ready(function(){
    //Declare & Define Variables
    
    //Musixmatch genre id in data-genre
    var genreId; 
    
    var happyArray =[];
    var sadArray = [];
    var partyArray = [];
    var studyArray = [];
    var nostalgicArray = [];
    var festiveArray = [];

    getHistory("happySongs");
    getHistory("sadSongs");
    getHistory("partySongs");
    getHistory("studySongs");
    getHistory("nostalgicSongs");
    getHistory("festiveSongs");
    
    $(document).on("click", "button", (e) => {
        var userBtn = e.target;
        var pickGenre = userBtn.getAttribute("data-genre");
        genreId = pickGenre
        
        var queryURL = "https://cors-anywhere.herokuapp.com/" + "https://api.musixmatch.com/ws/1.1/track.search?" + "f_music_genre_id="+ genreId + "&apikey=a0c16acc7fa27d7659942b310a49033d";

        // AJAX call for musixmatch
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            // Retrieve response from AJAX call, put in an object
            var obj = JSON.parse(response);

            // Grab data from response
            var tracks = obj.message.body.track_list;
            var ranTrack = tracks[Math.floor(Math.random()*tracks.length)];
            var song = ranTrack.track.track_name;
            var artist = ranTrack.track.artist_name;
            
            // Create divs to hold the data
            var songDiv = $("<div>").addClass("song-div cell medium-3").text(song);
            var artDiv = $("<div>").addClass("art-div cell medium-3").text(artist);
            $(".song-div").replaceWith(songDiv);
            $(".art-div").replaceWith(artDiv);

            // moodClass - "._____", mood - "____", moodSongs - "____Songs"
            function switchCall(moodClass, moodObj, mood, moodArray, moodSongs) {
                $(moodClass).append(songDiv, artDiv)
                moodObj["mood"] = mood;
                moodObj["song"] = song;
                moodObj["artist"] = artist;
                moodArray.push(moodObj);
                localStorage.setItem(moodSongs, JSON.stringify(moodArray));
            };

            switch (userBtn) {
                case document.getElementById("happy"):
                    var happyObj = {};
                    switchCall(".pop", happyObj, "Happy", happyArray, "happySongs");
                    break;
                case document.getElementById("sad") :
                    var sadObj = {};
                    switchCall(".emo", sadObj, "Sad", sadArray, "sadSongs");
                    break;
                case document.getElementById("party") :
                    var partyObj = {};
                    switchCall(".hip-hop", partyObj, "Party", partyArray, "partySongs");
                    break;
                case document.getElementById("study") :
                    var studyObj = {};
                    switchCall(".piano", studyObj, "Zen", studyArray, "studySongs");
                    break;
                case document.getElementById("nostalgic") :
                    var nostalgicObj = {};
                    switchCall(".oldies", nostalgicObj, "Nostalgic", nostalgicArray, "nostalgicSongs");
                    break;
                case document.getElementById("festive") :
                    var festiveObj = {};
                    switchCall(".christmas", festiveObj, "Festive", festiveArray, "festiveSongs");
                    break;
                default :
                    break;
            };

        });
        
    });

    // moodSongs - "____Songs"
    function getHistory (moodSongs) {
        //This gets an ARRAY OF OBJECTS
        var getMood = JSON.parse(localStorage.getItem(moodSongs));

        if (getMood !== null) {
            function retMood(index){
                var retrieve = getMood[index] //Gives us an Object in the Array
                var entry = $("<tr>")
                var entryMood = $("<td>").text(retrieve.mood)
                var entrySong = $("<td>").text(retrieve.song);
                var entryArtist = $("<td>").text(retrieve.artist);
                entry.append(entryMood, entrySong, entryArtist);
                $("tbody").prepend(entry);
            };
            for (var i=0; i<getMood.length; i++){
                retMood(i);
            }
        }
        else {
            return getMood; // null
        }

    };
   















});