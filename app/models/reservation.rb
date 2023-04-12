class Reservation < ApplicationRecord
    require 'date'
    validates :reserver_id, :listing_id, :num_guests, :start_date, :end_date, presence: true
    validate :no_overlap?



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


    def no_overlap?
        #maybe use a select here in the beginning
        #is this active record filter correct? Can this syntax be used on the one line?
        #What if a person is editing their reservation? THEY will need to be allowed to select dates within their dates, so this needs to be put in somehow
        
        
        # reservations = Reservation.where('start_date <= ? AND end_date >= ?', start_date, end_date)
        #     .where('listing_id != ?', listing_id)
        #fails where a new reservation encompasses an old reservation still
        #could need self. for these params, but could be implicit

        reservations = Reservation.where('start_date <= ? AND ? <= end_date', self.start_date, self.start_date).or(
            Reservation.where('start_date <= ? AND ? <= end_date', self.end_date, self.end_date).or(
            Reservation.where('? < start_date AND ? > end_date', self.start_date, self.end_date).and(
            Reservation.where('listing_id = ?', self.listing_id))))
        


        if reservations.length != 0
            # return true
            return errors.add(message: 'date range taken')

        else
            # return false
            return true
            # return errors.add(message: 'date range taken')
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
