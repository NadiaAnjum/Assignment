'use strict';  
    
IndexPageCtlr.$inject = ['$scope', '$http', '$rootScope', '$mdDialog', '$mdToast', 'TrnMainPageFactory', '$q', '$location', '$window'];

function IndexPageCtlr($scope, $http, $rootScope, $mdDialog, $mdToast, TrnMainPageFactory, $q, $location, $window) {
	
	$rootScope.loadMainPage = "assg_main_page.html";	

	/**************************Simple Toast******************************************/

	$rootScope.showSimpleToast = function(msg) {
			
		$mdToast.show(
		  $mdToast.simple() 
			.textContent(msg)
			.position('top center' ) 
			.hideDelay(5000)
		);
	};
}

export default IndexPageCtlr;