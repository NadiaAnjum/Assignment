# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#SSL_CERT_FILE='C:\RailsInstaller\cacert.pem'

require 'httparty'
require 'openssl'
require 'open-uri' 

    response = HTTParty.get("https://api.producthunt.com/v1/posts", headers: {"Accept"=> "application/json", "Content-Type" => "application/json", "Authorization" => "Bearer 734b717a9c1466fe3e49c59964a36aee1781c3790a41cc29fc3d763cfa66dfad ", "Host" => "api.producthunt.com"})
	
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
			image_url: result['image_url'],
			votes_count: result['votes_count'],
			created_at: Time.now,
			updated_at: Time.now
		})
	end