var aptName = 'parkdream';
var startYear = 2018;
var endYear = 2020;

$(document).ready(function() {
	setDiv();
	setImage();
});

function setDiv() {
	for (var year = startYear; year <= endYear; year++) {
		for (var month = 1; month <= 12; month++) {
			$('#' + aptName).append($('<div/>', {
				id : year + '-' + getMonthStr(month),
				html : year + '. ' + getMonthStr(month)
			}));
		}
	}
}

function setImage() {
	for (var year = startYear; year <= endYear; year++) {
		for (var month = 1; month <= 12; month++) {
			var img = new Image();
			img.onload = function(a) {
				var imgPath = a.path[0].currentSrc;
				var divId = imgPath.substring(imgPath.lastIndexOf('/') + 1, imgPath.length).replace('.jpg', '');
				$('#' + divId).append($('<img/>', { src : imgPath }));
				$('#' + divId).append($('<div/>', { class : 'clear20' }));
			}
			img.onerror = function(a) {
				var imgPath = a.path[0].currentSrc;
				var divId = imgPath.substring(imgPath.lastIndexOf('/') + 1, imgPath.length).replace('.jpg', '');
				$('#' + divId).empty();
			}
			img.src='img/' + aptName + '/' + year + '-' + getMonthStr(month) + '.jpg';
		}
	}
}

function getMonthStr(month) {
	if (month < 10)
		return "0" + month;
	return month;
}
