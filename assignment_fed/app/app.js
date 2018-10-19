import angular from 'angular'   
import ngMaterial from 'angular-material'
import angularFilter from 'angular-filter'

import userConfig from './constants/user_constants';

import TrnMainPageFactory from './factories/assg_transaction.factory';
import ErrorHandlerFactory from './factories/assg_error_handler.factory';

import IndexPageCtlr from './controllers/assg_index_page.controller';
import MainPageCtlr from './controllers/assg_main_page.controller';

import UserTemplates from './user_templates'; 

const assignment_app = angular.module('assignment_app', [ngMaterial, angularFilter])
	.config(['$httpProvider', '$locationProvider', function($httpProvider, $locationProvider) {

		$httpProvider.interceptors.push('ErrorHandlerFactory');
		$httpProvider.defaults.xsrfCookieName = 'csrftoken';
		$httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';  

		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});

	}])
	.constant('config', userConfig())
	.factory('TrnMainPageFactory', TrnMainPageFactory) 
	.factory('ErrorHandlerFactory', ErrorHandlerFactory)
	.controller('MainPageCtlr', MainPageCtlr)
	.controller('IndexPageCtlr', IndexPageCtlr)
	.run(['$templateCache', function($templateCache) {
		UserTemplates($templateCache);
	}]); 
 
	