function getData(txID){
	// txID가 0 이면 전체 조회
	var formData = 'mode=getMsg&txID='+txID;

	$.ajax({
		url: "http://54.169.253.56/",
		contentType: 'application/json; charset=utf-8',
		crossDomain: true,
		dataType: 'jsonp',
		method : "POST",
		data : formData,
		success: function (data, textStatus, jqXHR) {
			console.log(data);
		},
		error: function (jqXHR, textStatus, errorThrown) {
			console.log(jqXHR);
			console.log(textStatus);
			console.log(errorThrown);

		}
	});

}
