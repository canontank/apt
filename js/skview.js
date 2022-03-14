var aptName = 'skview';
var imgList = new Array(
												       '2020-10', '2020-11', '2020-12',
    '2021-01', '2021-02', '2021-03', '2021-04', '2021-05', '2021-06', '2021-07', '2021-08', '2021-09', '2021-10', '2021-11', '2021-12',
    '2022-01', '2022-02'
);

$(document).ready(function() {
    for (var img of imgList) {
        $('#' + aptName).append($('<div/>', { html : img.replace('-', '. ') }));
        $('#' + aptName).append($('<div/>', {})
            .append($('<img/>', { src : 'img/' + aptName + '/' + img + '.jpg' }))
        );
        $('#' + aptName).append($('<div/>', { class : 'clear20' }));
    }
});
