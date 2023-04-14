@reservations.each do |reservation|
    json.set! reservation.id do
        json.extract! reservation, 
        :id, 
        :reserver_id, 
        :listing_id, 
        :start_date, 
        :end_date, 
        :num_guests
    json.listingTitle reservation.listing.title
    json.listingPhoto reservation.listing.photos.map {|photo| photo.url}
    json.listingDescription reservation.listing.description
    end
end