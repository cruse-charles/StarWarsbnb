class Reservation < ApplicationRecord
    require 'date'
    validates :reserver_id, :listing_id, :num_guests, :start_date, :end_date, presence: true



    def valid_date?
        if !Date.valid_date?(start_date) || !Date.valid_date?(end_date)
            return false
        end

        if start_date > end_date
            return false
        end

        if (start_date < Date.today) || (end_date < Date.today)
            return false
        end
    end


    def overlap?
        #maybe use a select here in the beginning
        #is this active record filter correct? Can this syntax be used on the one line?
        #What if a person is editing their reservation? THEY will need to be allowed to select dates within their dates, so this needs to be put in somehow
        reservations = Reservation.where(:id)
            .where('start_date <= ? AND end_date >= ?', start_date, end_date)
            .where('id != ?', id)

        if reservations.length != 0
            return false
        end
    end

    belongs_to :reserver,
        primary_key: :id,
        foreign_key: :reserver_id,
        class_name: :User

    belongs_to :listing,
        primary_key: :id,
        foreign_key: :listing_id,
        class_name: :Listing

end
