class Review < ApplicationRecord
    validates :listing_id, :reviewer_id, :body, :cleanliness, :communication, :check_in, :accuracy, :location, :value, presence: true

    belongs_to :listing,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: :Listing

    belongs_to :reviewer,
        primary_key: :id,
        foreign_key: :reviewer_id,
        class_name: :User

    has_many_attached :photos
end
