// Load Javascript after HTML finished loading
$(document).ready(function(){
    //Declare & Define Variables


    //Musixmatch
    var genreId = "100018"

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
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

        // console.log(response); // gives string
        var obj = JSON.parse(response);
        console.log(obj);




    });


    // FavQs
    var favQsURL = "https://cors-anywhere.herokuapp.com/" + "https://favqs.com/api/" + "quotes"

    // AJAX call for FavQs
    $.ajax({
        url: favQsURL,
        method: "GET",
        headers: {
            authorization: 
            "Token token=19fc73e5352d2abf14a4264b58512ba9"}
    }).then(function(res){

        // console.log(res);



    });















});