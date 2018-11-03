function getData(txID){
	// txID가 0 이면 전체 조회
	var formData = {
            'txID' : 0
        }

	$.ajax({ 
	    type: "POST", 
	    url: "http://54.169.253.56/?mode=getMsg",
	    data: formData,
	    success: function(response){
	        console.log(response)
	    },
	    error: function(request, status, error){
	    },
	})
}