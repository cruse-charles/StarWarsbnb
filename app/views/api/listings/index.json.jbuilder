# json.listings do
    @listings.each do |listing|
        json.set! listing.id do 
            json.extract! listing, :id, :title, :description, :address, :city, :country, :price
        end
    end
# end
