var photoSetId = "{{page.flickr}}";
var flickrApi = "http://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=19493fa9bbf4ab6081b55b2df529144d&photoset_id=" + photoSetId + "&format=json&jsoncallback=showSet";

$.ajax({
   type: 'GET',
    url: flickrApi,
    async: true,
    jsonpCallback: 'jsonCallback',
    contentType: "application/json",
    dataType: 'jsonp',
    success: showSet
});

var showSet = function(res){	
	var photos = res.photoset.photo;
	for (var i = 0; i<9 ;i++){
		var photoUrl = "http:\/\/farm"+ photos[i].farm +
			".staticflickr.com\/" + photos[i].server + 
			"\/"+ photos[i].id + 
			"_"+photos[i].secret +
			"_q.jpg";
		var pic  = $('#flickr').append('<div class="col4 pad1"><img id="photo'+ i +'" src="'+photoUrl+ '"/></div>');
	}
}