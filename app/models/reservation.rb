class Reservation < ApplicationRecord
    
    # validates :reserver_id, :listing_id, :num_guests, :start_date, :end_date, presence: true



    # def valid_date?
    #     if start_date > end_date

    #     end

    #     if (start_date < TODAYS DATE) || (end_date < TODAYS DATE)

    #     end
    # end


    # def overlap?

    # end

    # belongs_to :reserver,
    #     primary_key: :id,
    #     foreign_key: :reserver_id,
    #     class_name: :User

    # belongs_to :listing,
    #     primary_key: :id,
    #     foreign_key: :listing_id,
    #     class_name: :Listing

end
