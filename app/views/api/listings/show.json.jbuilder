json.set! :listing do
    json.extract! @listing, :id, :title, :description, :address, :city, :country
    json.photoUrls @listing.photos.map {|photo| photo.url}
end

# json.listing do
#     json.extract! @listing, :id, :title, :description, :address, :city, :country
#     # json.photoUrls @listing.photos.map {|photo| photo.url}
# end