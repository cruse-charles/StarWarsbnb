json.listings do
    @listings.each do |listing|
        json.extract! listing, :id, :title, :address, :city, :country, :price
    end
end

# do I need a .set! here at all?