'use strict'; 

function config(){
	
	var baseurl = '/';
	
	return {
		
		SEED_DATA: 	baseurl + 'producthunt_list/seed_data',
		PRODUCTS: 	baseurl + 'producthunt_list'
	}  
	
};

module.exports = config;
