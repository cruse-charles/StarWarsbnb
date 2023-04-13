json.search do
    @listings.each do |listing|
        json.set! listing.id do
            json.extract! listing,
                :id,
                :title
            # json.photos listing.photos.attached? ? listing.photos.url : nil
        end
    end
end