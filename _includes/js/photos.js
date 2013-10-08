var photoSetId = "{{page.flickr}}";
	showApi = "http://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=19493fa9bbf4ab6081b55b2df529144d&photoset_id=" + photoSetId + "&format=json&jsoncallback=showSet";
	nsid = "http://www.flickr.com/photos/60776064@N02/";

$.ajax({
   type: 'GET',
    url: showApi,
    async: true,
    jsonpCallback: 'jsonCallback',
    contentType: "application/json",
    dataType: 'jsonp',
    success: showSet
});

var showSet = function(res){	
	var photos = res.photoset.photo;
	for (var i = 0; i<9 ;i++){
		var sourceUrl = "http:\/\/farm"+ photos[i].farm +
			".staticflickr.com\/" + photos[i].server + 
			"\/"+ photos[i].id + 
			"_"+photos[i].secret +
			"_q.jpg";
		var webUrl = nsid + photos[i].id;
			title = "Click to see the picture on Flickr";
		pic  = $('#flickr').append('<div class="col4 pad1"><a href="'+ webUrl + '" title="'+ title +'"><img id="photo'+ i +'" src="'+sourceUrl+ '"/></a></div>');
	}
}