require 'httparty'
require 'openssl'
require 'open-uri' 

class ProducthuntListController < ApplicationController

	skip_before_action :verify_authenticity_token
	
	def index
		
		#product_list = ProducthuntList.where("hunt_created_at = 'Time.now'")		
		
		product_list = ProducthuntList.all

		render json: {status: 'SUCCESS', message: 'List of product list', data: product_list}, status: :ok
	end	
	
	def seed_data
		
		date = params[:date]
		
		logger.error date
		
		response = HTTParty.get("https://api.producthunt.com/v1/posts/?day=" + params[:date], headers: {"Accept"=> "application/json", "Content-Type" => "application/json", "Authorization" => "Bearer 734b717a9c1466fe3e49c59964a36aee1781c3790a41cc29fc3d763cfa66dfad ", "Host" => "api.producthunt.com"})
	
		parsed_response = JSON.parse(response.to_s)
		parsed_response['posts'].each do |result|
			restaurant = ProducthuntList.create!({
				comments_count: result['comments_count'],
				day: result['day'],
				name: result['name'],
				product_state: result['product_state'],
				tagline: result['tagline'],
				category_id: result['category_id'],
				hunt_created_at: result['created_at'],
				discussion_url: result['discussion_url'],
				exclusive: result['exclusive'],
				featured: result['featured'],
				maker_inside: result['maker_inside'],
				redirect_url: result['redirect_url'],
				image_url: result['thumbnail']['image_url'],
				votes_count: result['votes_count'],
				created_at: Time.now,
				updated_at: Time.now
			})
		end
	end
	
end 