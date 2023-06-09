json.search do
    @listings.each do |listing|
        json.set! listing.id do
            json.extract! listing,
                :id,
                :title,
                :address,
                :city,
                :country,
                :price
            # json.photos listing.photos.attached? ? listing.photos.url : nil
            json.photoUrls listing.photos.map {|photo| photo.url}
        end
    end
end