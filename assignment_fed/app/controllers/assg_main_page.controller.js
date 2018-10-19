'use strict';    
  
MainPageCtlr.$inject = ['$scope', '$http', '$rootScope', '$mdDialog', '$mdToast', 'TrnMainPageFactory', '$q', '$location', '$window'];

function MainPageCtlr($scope, $http, $rootScope, $mdDialog, $mdToast, TrnMainPageFactory, $q, $location, $window) {
	
	var d = new Date();

	$scope.formatDate = function(date) {
	    var d = new Date(date),
	        month = '' + (d.getMonth() + 1),
	        day = '' + d.getDate(),
	        year = d.getFullYear();

	    if (month.length < 2) month = '0' + month;
	    if (day.length < 2) day = '0' + day;

	    return [year, month, day].join('-');
	}

	$scope.seed_data = function()
	{
		var in_data = {'date': d};

		TrnMainPageFactory.seedProdData(in_data).then(function(response){
			
			$scope.getProductLists();
			
		});
	}

	setInterval(function(){
  		
  		$scope.seed_data();
	
	}, 86410000)

	$scope.getProductLists = function()
	{	
		TrnMainPageFactory.getProducts().then(function(response){

			var out_data = response.data;

			$scope.productList = out_data;
		});
	} 		

	$scope.getProductLists();

	
	
}

export default MainPageCtlr;