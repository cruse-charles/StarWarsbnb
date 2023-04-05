class Review < ApplicationRecord
    validates :listing, :reviewer, :body, :cleanliness, :communication, :check_in, :accuracy, :location, :value

    belongs_to :lister,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: :Listing

    belongs_to :reviewer,
        primary_key: :id,
        foreign_key: :reviewer_id,
        class_name: :User
end
