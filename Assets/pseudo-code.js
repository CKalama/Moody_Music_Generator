//PSEUDO CODE FOR MOODY MUSIC SCRIPT

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
            // object name = genre; each key = genreName: response.track.get (or something),
        // take genre to find a song that fits into that genre using ajax call (musixmatch music.track.get)
    // when same button pressed, new song will overwrite (.text()) old response
    // when button pressed, response will be stored to local storage
        // setItem, getItem, etc.
    // display inspirational quote when button clicked
            // prettier version
                // ask user if they want an inspirational quote
                    // if (user yes): present quote and then song under it
                    // else: present only song

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