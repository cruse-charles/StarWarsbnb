json.set! :listing do
    json.extract! @listing, 
        :id, 
        :lister_id, 
        :title, 
        :description, 
        :address, 
        :city, 
        :country
    json.photoUrls @listing.photos.map {|photo| photo.url}
    json.host @listing.lister.username
end

# json.listing do
#     json.extract! @listing, :id, :title, :description, :address, :city, :country
#     # json.photoUrls @listing.photos.map {|photo| photo.url}
# end