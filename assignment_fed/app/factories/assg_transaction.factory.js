'use strict'; 

TrnMainPageFactory.$inject = ['$http', 'config'];

function TrnMainPageFactory($http, config){
	return{
				
		getProducts : function(){
			
			return $http.get(config.PRODUCTS).then(function successCallback(response) {
												
				return response.data;
			});
		},  

		seedProdData : function(date){
			
			return $http.post(config.SEED_DATA, date).then(function successCallback(response) {
												
				return response.data;
			});
		}

	}
};

export default TrnMainPageFactory;