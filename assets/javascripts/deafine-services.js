angular.module('Deafine.services', [])

.service("LectureAPIService",function($http,$q){	
	
	var lectures = [];
	var terms = [];
	var activeLectureIndex;
	var activeTermIndex;
	var activeLecture = null;
	var activeTerm = null;
	
	return {
    	getLectures: function(){
	    	return lectures;
    	},
	    setActiveLecture: function(ind){
	    	//alert("setActiveLecture");
	    	activeLectureIndex = ind;
			activeLecture = lectures[ind];
	    },
	    setActiveTerm: function(ind){
	    	activeTermIndex = ind;
			activeTerm = terms[ind];
	    },
	    storeLectures: function(array) {
			//alert("storing");
			lectures = array;
		},
		storeTerms: function(array) {
			//alert("storing");
			terms = array;
		},
		getActiveLecture: function(){
			return activeLecture;
		},
		getActiveTerm: function(){
			return activeTerm;
		}
    }
	/*
	function getLectures() {
		alert('trying to get lectures');
		var request = $http({
                        method: "get",
                        url: "data/lectures.json",
                    });
                    /*                       params: {
                            action: "get"
                        }
                    
                        
                    
 
        return( request.then( handleSuccess, handleError ) );
	};


	function setActiveLecture(ind) {
		activeLectureIndex = ind;
		activeLecture = lectures[ind];
	};

	function handleError( response ) {
		alert("error!");

        // The API response from the server should be returned in a
        // nomralized format. However, if the request was not handled by the
        // server (or what not handles properly - ex. server error), then we
        // may have to normalize it on our end, as best we can.
        if (
            ! angular.isObject( response.data ) ||
            ! response.data.message
            ) {

            return( $q.reject( "An unknown error occurred." ) );

        }

        // Otherwise, use expected error message.
        return( $q.reject( response.data.message ) );

    };
 
 
                // I transform the successful response, unwrapping the application data
                // from the API response payload.
    function handleSuccess( response ) {
		alert("success!");
        return( response.data );

    };
    */
});
