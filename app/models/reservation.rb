class Reservation < ApplicationRecord
    require 'date'
    validates :reserver_id, :listing_id, :num_guests, :start_date, :end_date, presence: true
    validate :no_overlap?, on: [:create, :update]



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

        reservations = 
            Reservation.where('listing_id = ?', self.listing_id).and((
            Reservation.where('start_date <= ? AND ? <= end_date', self.start_date, self.start_date).or(
            Reservation.where('start_date <= ? AND ? <= end_date', self.end_date, self.end_date).or(
            Reservation.where('? < start_date AND ? > end_date', self.start_date, self.end_date)))))
        
        if reservations.length != 0
            return errors.add(:error, '- Date range taken')
        else
            # return true
# debugger
            # errors.add(:message, '- Success!' )
            return true
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
