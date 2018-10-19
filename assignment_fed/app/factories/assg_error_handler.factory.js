'use strict'; 
 
ErrorHandlerFactory.$inject = ['$q', '$rootScope', 'config'];

function ErrorHandlerFactory($q, $rootScope, config){
	
    var ErrorHandler = {
		
	    responseError: function(response) {
			
			if(response.status === 500){
				
				$rootScope.showSimpleToast('Unable to process the request at this moment, please try after sometime...');
			}

			if(response.status === 504){
				
				$rootScope.showSimpleToast('Unable to connect to the Server, please try after sometime...');
			}
			
			if(response.status === 422){
				
				$rootScope.showSimpleToast('Unable to process the request at this moment, please try after sometime...');
			}

			if(response.status === 404){
				
				$rootScope.showSimpleToast('Unable to process the request at this moment, please try after sometime...');
			}
						
            return $q.reject(response);
        },
		
        response: function(response) {
						
            return response;
        }
    };
	
    return ErrorHandler;
};

export default ErrorHandlerFactory;