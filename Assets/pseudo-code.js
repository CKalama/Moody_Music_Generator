//PSEUDO CODE FOR MOODY MUSIC SCRIPT
// https://devhints.io/moment
// HOME PAGE
// User perspective: user clicks mood button
    // click event on button --> displays response (.append())
        // grab mood & connect to corresponding genre (preset by devs in an object)
        /* 
        var moodsToGenre = {
            happy: "hip hop",
            sad: "emo"
        }

        if the button has a data attribute that we can know which mood they picked we can then say somethin like
        var mood = dataFromButton ex: "happy"
        var genre = moodsToGenre[mood] =>
        genre = moodsToGenre["happy"] => moodsToGenre.happy => "hip hop"
        
        ex: "hip hop"

        another way

        var moodGenre = [
            {
                mood: "Happy",
                genre: "hip hop"
            }
        ]
        for (element in moodGenre) {
            create a button and put on page
            <button class="mood-button" value=${element.genre}>${element.mood}</button>
        }
        event listener delegated to document
        $(document).on('click', '.mood-button', function(event) {
            var desiredGenre = event.target.value
            console.log(desiredGenre)
        })
        $('.mood-button).on('click', function(event) {
            do stuff
        })
        */
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
            // object name = genre; each key = genreName: response.track.get (or something),
        // take genre to find a song that fits into that genre using ajax call (musixmatch music.track.get)
    // SWITCH - wet code
        // $(".pop").append(songDiv, artDiv);
        // var happyObj = {};
        // happyObj["mood"] = "Happy"
        // happyObj["song"] = song;
        // happyObj["artist"] = artist;
        // happyArray.push(happyObj);
        // localStorage.setItem("happySongs", JSON.stringify(happyArray));


    // when same button pressed, new song will overwrite (.text()) old response
        // used replaceWith() -- https://api.jquery.com/replacewith/
    // when button pressed, response will be stored to local storage
        // setItem, getItem, etc.
    // display inspirational quote when button clicked
            // prettier version
                // ask user if they want an inspirational quote
                    // if (user yes): present quote and then song under it
                    // else: present only song

        // First Attempt: Put song and artist into object. Object will be put into array. Call from LocalStorage. 
            
            // var happyObj = {};
            // happyObj["song"] = song;
            // happyObj["artist"] = artist;
            // happyArray.push(happyObj);

        //Making a complex array so that we can store every song into Local Storage
    // var array = [
    //     [
    //         {
    //             song:
    //             artist:
    //         }
    //     ],
    //     [
    //         {
    //             song:
    //             artist:
    //         }
    //     ],
        
    // ];
            
                //First Attempt: Getting song_track and artist_track to display when clicking a button
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

// ABOUT PAGE -- if mvp works and we have time!
// User perspective: user hover over picture, see staffs' other pic
    // css pseudo class :hover on the img div
    // js logic with $(this)??? 



// HISTORY PAGE -- diary of moods & songs
// User perspective: see all the past searches from HOME page; see date entry, mood, song, link
    // use localStorage.getItem from home page localStorage
    // then use those items to prepend to a list (table)
        // each tr will be an entry
        // create td html elements to hold mood, song, and link? (maybe)
            // use Youtube search_query= to give user the search results of the song that's given by ajax call
            // Links: "https://www.youtube.com/results?search_query=" + variable
            // variable = song data we get from ajax call
                // has to be string, and have "string1+string2+string3+...""
    // 


// Questions
    // How to attach js logic to iframe div tag -- make youtube vid pop up
    // 
    // 
    // 