@reviews.each do |review|
    json.set! review.id do 
        json.extract! review, :id, :reviewer_id, :body, :cleanliness, :communication, :check_in, :accuracy, :location, :value
    end
end