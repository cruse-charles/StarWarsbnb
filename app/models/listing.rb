class Listing < ApplicationRecord
    validates :title, :lister_id, :description, :address, :city, :country, :latitude, :longitude, :price, presence: true

    belongs_to :lister,
        primary_key: :id,
        foreign_key: :lister_id,
        class_name: :User

    has_many :reviews,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: :Review,
        dependent: :destroy

end
