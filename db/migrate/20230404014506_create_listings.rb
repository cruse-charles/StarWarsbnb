class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :title, null:false, index: true
      t.references :lister, null:false, foreign_key: {to_table: :users}
      t.text :description, null:false
      t.string :address, null:false
      t.string :city, null:false
      t.string :country, null:false
      t.decimal :latitude, null:false, precision: 10, scale:6
      t.decimal :longitude, null:false, precision:10, sclae: 6
      t.integer :price, null:false
      t.timestamps
    end
  end
end
