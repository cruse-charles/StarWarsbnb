class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.references :reserver, null: false, foreign_key: {to_table: :users}
      t.references :listing, null: false, foreign_key: {to_table: :listings}
      t.integer :num_guests, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.timestamps
    end
  end
end
