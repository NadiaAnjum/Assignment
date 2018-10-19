class CreateProducthuntList < ActiveRecord::Migration[5.1]
  def change
    create_table :producthunt_list do |t|
		t.integer :comments_count
		t.date	  :day
		t.string  :name
		t.string  :product_state
		t.string  :tagline
		t.string  :category_id
		t.string  :hunt_created_at
		t.string	:discussion_url
		t.string	:exclusive
		t.string	:featured
		t.string	:maker_inside
		t.string	:redirect_url
		t.string	:image_url
		t.integer	:votes_count
        t.timestamps
    end
  end
end
