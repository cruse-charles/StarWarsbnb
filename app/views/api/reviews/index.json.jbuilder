@reviews.each do |review|
    json.set! review.id do 
        json.extract! review, 
            :id, 
            :listing_id, 
            :reviewer_id, 
            :body, 
            :cleanliness, 
            :communication, 
            :check_in, 
            :accuracy, 
            :location, 
            :value
        json.reviewerName review.reviewer.username
    end
end