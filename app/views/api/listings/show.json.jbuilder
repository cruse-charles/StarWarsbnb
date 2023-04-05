json.set! :listing do
    json.extract! @listing, :id, :title, :description, :address, :city, :country
end