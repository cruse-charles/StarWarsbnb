@listings.each do |listing|
    json.set! listing.id do 
        json.extract! listing, 
            :id, 
            :title, 
            :description, 
            :address, 
            :city, 
            :country, 
            :price
        json.photoUrls listing.photos.map {|photo| photo.url}
    end
end

