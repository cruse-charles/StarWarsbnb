@reservations.each do |reservation|
    json.set! reservation.id do
        json.extract! reservation, :id, :reserver_id, :listing_id, :start_date, :end_date, :num_guests
    end
end