---
---
;{% include js/jquery.min.js %}

var loadMap = function(mapId){
	if (mapId == null) {
		return
	} else {
		var map = L.mapbox.map('map', mapId);
		map.markerLayer.on('layeradd', function(e) {
		var marker = e.layer;
		marker.openPopup()
	})
	}
};

$(function(){
	$('a.expand').click(function(e){
		e.preventDefault();
		$(this).toggleClass('expanded');
		if ($(this).hasClass('expanded')) {
			$(this).find('span').html('↓');
			$(this).next().removeClass('hide');
		} else {
			$(this).find('span').html('→');
			$(this).next().addClass('hide');
		}
});
})