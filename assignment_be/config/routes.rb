Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
	resources :producthunt_list
  
	resources :producthunt_list do
		match :seed_data, via: [:post],  on: :collection
	  
	end
end
