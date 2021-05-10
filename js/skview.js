var imgList = new Array(
	'2020-10', '2020-11', '2020-12',
	'2021-01', '2021-02', '2021-03', '2021-04'
);

$(document).ready(function() {
    for (var img of imgList) {
        $('#skview').append($('<div/>', { html : img.replace('-', '. ') }));
        $('#skview').append($('<div/>', {})
            	.append($('<img/>', { src : 'img/skview/' + img + '.jpg' }))
        );
        $('#skview').append($('<div/>', { class : 'clear20' }));
    }
});
