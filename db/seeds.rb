# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Listing.destroy_all
    Review.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('listings')
    ApplicationRecord.connection.reset_pk_sequence!('reviews')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    u1 = User.create!(
      username: 'Demo-lition', 
      email: 'demo@user.io', 
      password: 'password'
    )
  
    # More users
    10.times do 
      User.create!({
        username: Faker::Internet.unique.username(specifier: 3),
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end

    puts "Creating Listings..."
    #Create a listing

    hoth_l1 = Listing.create!(
      title: 'Amazing NYC Apartment',
      lister_id: 1,
      description: 'This apartment in center NYC gives access everywhere',
      address: '123 Main St',
      city: 'New York City',
      country: 'USA',
      latitude: '10.000000',
      longitude: '10.000000',
      price: '100'
    )

    hoth_l1.photos.attach([
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l1p1"), filename: "l1p1.png"},
      # {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l1p2.jpeg"), filename: "l1p2.png"}
    ])

    tatooine_l2 = Listing.create!(
      title: 'Lovely Cottage in Woods',
      lister_id: 1,
      description: 'Come to our cottage for a relaxed and nature-tuned vacation',
      address: 'N/A',
      city: 'N/A',
      country: 'Sweden',
      latitude: '20.000000',
      longitude: '20.000000',
      price: '200'
    )

    tatooine_l2.photos.attach([
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l2p5.jpeg"), filename: "l2p2.png"},
      # {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l1p2.jpeg"), filename: "l1p2.png"}
    ])

    kamino_l3 = Listing.create!(
      title: 'Amazing NYC Apartment',
      lister_id: 1,
      description: 'This apartment in center NYC gives access everywhere',
      address: '123 Main St',
      city: 'New York City',
      country: 'USA',
      latitude: '10.000000',
      longitude: '10.000000',
      price: '100'
    )

    endor_l4 = Listing.create!(
      title: 'Cheap and Convenient and Coz',
      lister_id: 3,
      description: 'Come to our apartment in central Berlin',
      address: '93 Schule Strasse',
      city: 'Berlin',
      country: 'Germany',
      latitude: '40.000000',
      longitude: '40.000000',
      price: '400'
    )

    naboo_l5 = Listing.create!(
      title: 'Cheap and Convenient and Coz',
      lister_id: 3,
      description: 'Come to our apartment in central Berlin',
      address: '93 Schule Strasse',
      city: 'Berlin',
      country: 'Germany',
      latitude: '40.000000',
      longitude: '40.000000',
      price: '400'
    )

    kashyyyk_l6 = Listing.create!(
      title: 'Cheap and Convenient and Coz',
      lister_id: 3,
      description: 'Come to our apartment in central Berlin',
      address: '93 Schule Strasse',
      city: 'Berlin',
      country: 'Germany',
      latitude: '40.000000',
      longitude: '40.000000',
      price: '400'
    )

    ahch_to_l7 = Listing.create!(
      title: 'Cheap and Convenient and Coz',
      lister_id: 3,
      description: 'Come to our apartment in central Berlin',
      address: '93 Schule Strasse',
      city: 'Berlin',
      country: 'Germany',
      latitude: '40.000000',
      longitude: '40.000000',
      price: '400'
    )

    trask_l8 = Listing.create!(
      title: 'Desert Hut',
      lister_id: 4,
      description: 'Cool in the day and warm at night',
      address: 'N/A',
      city: 'Outside of Phoenix',
      country: 'USA',
      latitude: '40.000000',
      longitude: '40.000000',
      price: '400'
    )

    puts 'Creating Reviews...'

    hoth_r1 = Review.create!(
      listing_id: 1,
      reviewer_id: 1,
      body: 'Visiting Hoth was a dream come true! The Rebel Alliance base was especially impressive and I even got to meet with a few of the Rebel soldiers! It was such a unique experience and a great way to spend a weekend.',
      cleanliness: 5,
      communication: 4,
      check_in: 5,
      accuracy: 5,
      location: 4,
      value: 4
    )

    hoth_r2 =  Review.create!(
      listing_id: 1,
      reviewer_id: 1,
      body: 'I recently traveled to Hoth and it was a once-in-a-lifetime experience! I loved riding the Tauntauns and seeing the snow-covered terrain of this iconic planet. It was so much more magical than I could have ever imagined!',
      cleanliness: 1,
      communication: 4,
      check_in: 3,
      accuracy: 3,
      location: 4,
      value: 4
    )

    hoth_r3 = Review.create!(
      listing_id: 1,
      reviewer_id: 2,
      body: 'My trip to Hoth was a complete disaster. Not only was it way too cold, the accommodations were terrible. I felt like I was stuck in the middle of nowhere with no way to escape. Avoid this place at all costs',
      cleanliness: 5,
      communication: 4,
      check_in: 5,
      accuracy: 5,
      location: 4,
      value: 4
    )

    hoth_r4 = Review.create!(
      listing_id: 1,
      reviewer_id: 3,
      body: 'I had high expectations for my visit to Hoth, but unfortunately, I was really disappointed. The temperatures were freezing and it was much more desolate than I thought it would be. I wouldn\'t recommend it to anyone.',
      cleanliness: 1,
      communication: 1,
      check_in: 1,
      accuracy: 1,
      location: 1,
      value: 1
    )

    hoth_r5 = Review.create!(
      listing_id: 1,
      reviewer_id: 3,
      body: 'My stay on Hoth was an experience I\'ll never forget. The climate was extremely cold and the terrain was a vast and dangerous wasteland of snow, ice, and jagged rocks. It was an unforgiving, yet beautiful place to explore.',
      cleanliness: 1,
      communication: 1,
      check_in: 1,
      accuracy: 1,
      location: 1,
      value: 1
    )

    tatooine_r1 = Review.create!(
      listing_id: 2,
      reviewer_id: 3,
      body: 'Visiting Tatooine was a huge disappointment. We came expecting to see Jedi, but all we got was a couple of Jawas who were trying to sell us faulty droids. The Tusken Raiders just added to the misery, as they were everywhere and extremely hostile. Would not recommend this planet to anyone.',
      cleanliness: 1,
      communication: 1,
      check_in: 1,
      accuracy: 1,
      location: 1,
      value: 1
    )

    tatooine_r2 = Review.create!(
      listing_id: 2,
      reviewer_id: 3,
      body: 'I recently visited the planet Tatooine and it was an amazing experience! The planetscape was full of unique sights and wonders. I was lucky enough to see some Jedi Knights in action, which was an incredible sight. The locals were very friendly and hospitable. I definitely recommend a visit to Tatooine if you want to experience something truly out of this world. ',
      cleanliness: 1,
      communication: 1,
      check_in: 1,
      accuracy: 1,
      location: 1,
      value: 1
    )

    tatooine_r3 = Review.create!(
      listing_id: 2,
      reviewer_id: 3,
      body: '
      I recently visited the planet Tatooine and stayed at the Jabba the Hutt Hotel. The hotel was so unique. The rooms were spacious and comfortable, and the staff was welcoming. The highlight of my stay was visiting Jabba the Hutt himself. He was friendly and made us feel like part of the family. I would definitely recommend staying here and experiencing the world of Tatooine.',
      cleanliness: 1,
      communication: 1,
      check_in: 1,
      accuracy: 1,
      location: 1,
      value: 1
    )

    # hoth_r1 = Review.create!(
    #   listing_id: 2,
    #   reviewer_id: 3,
    #   body: 'Visiting Tatooine was a huge disappointment. We came expecting to see Jedi, but all we got was a couple of Jawas who were trying to sell us faulty droids. The Tusken Raiders just added to the misery, as they were everywhere and extremely hostile. Would not recommend this planet to anyone.',
    #   cleanliness: 1,
    #   communication: 1,
    #   check_in: 1,
    #   accuracy: 1,
    #   location: 1,
    #   value: 1
    # )

    # hoth_r2 = Review.create!(
    #   listing_id: 2,
    #   reviewer_id: 3,
    #   body: 'I recently visited the planet Tatooine and it was an amazing experience! The planetscape was full of unique sights and wonders. I was lucky enough to see some Jedi Knights in action, which was an incredible sight. The locals were very friendly and hospitable. I definitely recommend a visit to Tatooine if you want to experience something truly out of this world. ',
    #   cleanliness: 1,
    #   communication: 1,
    #   check_in: 1,
    #   accuracy: 1,
    #   location: 1,
    #   value: 1
    # )

    # hoth_r3 = Review.create!(
    #   listing_id: 2,
    #   reviewer_id: 3,
    #   body: 'I recently visited the planet Tatooine and stayed at the Jabba the Hutt Hotel. The hotel was so unique. The rooms were spacious and comfortable, and the staff was welcoming. The highlight of my stay was visiting Jabba the Hutt himself. He was friendly and made us feel like part of the family. I would definitely recommend staying here and experiencing the world of Tatooine.',
    #   cleanliness: 1,
    #   communication: 1,
    #   check_in: 1,
    #   accuracy: 1,
    #   location: 1,
    #   value: 1
    # )

    kamino_r1 = Review.create!(
      listing_id: 3,
      reviewer_id: 2,
      body: 'I was really looking forward to visiting Kamino, but unfortunately it was a huge disappointment. The planet is incredibly wet and the weather is unbearable. It\'s a non-stop rain and I was completely unprepared for it. I wouldn\'t recommend this place to anyone.',
      cleanliness: 5,
      communication: 4,
      check_in: 5,
      accuracy: 5,
      location: 4,
      value: 4
    )

    kamino_r2 = Review.create!(
      listing_id: 3,
      reviewer_id: 3,
      body: 'My stay on Kamino was a disaster. The planet is so wet and humid that it was impossible to enjoy myself. I couldn\'t even take a walk without getting wet. The only thing I can say about Kamino is that it is a place to avoid.',
      cleanliness: 1,
      communication: 1,
      check_in: 1,
      accuracy: 1,
      location: 1,
      value: 1
    )

    kamino_r3 = Review.create!(
      listing_id: 3,
      reviewer_id: 3,
      body: 'I was expecting a lot from Kamino, but it was a huge letdown. The planet is incredibly wet and the weather is unbearable. I would never recommend this place to anyone who wants to go on vacation.',
      cleanliness: 1,
      communication: 1,
      check_in: 1,
      accuracy: 1,
      location: 1,
      value: 1
    )

    kamino_r4 = Review.create!(
      listing_id: 3,
      reviewer_id: 3,
      body: 'My stay on Kamino was a memorable one, mostly due to the clone army I found there. The clones were friendly and eager to help and they made my stay a pleasant one. The planet is wet and humid and the weather isn\'t the most ideal, but it\'s worth a visit to experience the unique culture of the clones.',
      cleanliness: 1,
      communication: 1,
      check_in: 1,
      accuracy: 1,
      location: 1,
      value: 1
    )

    endor_r1 = Review.create!(
      listing_id: 4,
      reviewer_id: 3,
      body: 'We had an amazing time visiting Endor! We were able to see up close the Ewoks who live in the forest and interact with them. They were so friendly, and the huts they made were incredible! The forest and trees were beautiful, and the atmosphere was peaceful and calming. We highly recommend a visit to Endor!',
      cleanliness: 1,
      communication: 1,
      check_in: 1,
      accuracy: 1,
      location: 1,
      value: 1
    )

    endor_r2 = Review.create!(
      listing_id: 4,
      reviewer_id: 3,
      body: 'Endor is an absolute must-see! We were in awe of all the trees and the lush forest that surrounded us. We were lucky enough to be able to see and interact with the Ewoks, who were incredibly friendly and welcoming. We were also very impressed at the huts that they had built with their own two hands! This definitely is a place we would recommend to anyone and everyone.',
      cleanliness: 1,
      communication: 1,
      check_in: 1,
      accuracy: 1,
      location: 1,
      value: 1
    )

    endor_r3 = Review.create!(
      listing_id: 4,
      reviewer_id: 3,
      body: 'We had the pleasure of visiting Endor recently, and it was an amazing experience! We were able to meet and interact with some of the Ewoks who live there, and they were so kind and generous. The forest was stunning and the huts they had made out of the natural resources were so impressive. We would highly recommend a visit to this magical planet!',
      cleanliness: 1,
      communication: 1,
      check_in: 1,
      accuracy: 1,
      location: 1,
      value: 1
    )

    naboo_r1 = Review.create!(
      listing_id: 5,
      reviewer_id: 3,
      body: 'Naboo was a great place to stay! The architecture was breathtaking, with its towering columns, beautiful statues, and intricate stonework. The locals were very friendly and always willing to help us out. The weather was mild and pleasant, with lots of sunshine during the day and cool breezes at night. We felt very safe and secure during our stay. Highly recommended!',
      cleanliness: 1,
      communication: 1,
      check_in: 1,
      accuracy: 1,
      location: 1,
      value: 1
    )

    naboo_r2 = Review.create!(
      listing_id: 5,
      reviewer_id: 3,
      body: 'We had a wonderful stay on Naboo! The architecture was stunning, with its grand palaces, lush gardens, and impressive fountains. The locals were very welcoming and helpful. The weather was lovely, with clear blue skies and warm days. We felt very comfortable and at ease during our stay. Highly recommended!',
      cleanliness: 1,
      communication: 1,
      check_in: 1,
      accuracy: 1,
      location: 1,
      value: 1
    )

    kashyyyk_r1 = Review.create!(
      listing_id: 6,
      reviewer_id: 3,
      body: 'What an amazing experience we had on Kashyyyk! The weather was perfect - hot, but with a nice breeze. The tree houses were so unique and fun - it was a great way to explore and get away from the hustle and bustle of the city. We even had the chance to meet some friendly Wookies, which was an experience we\'ll never forget! Highly recommend Kashyyyk for anyone looking for an out-of-this-world vacation. ',
      cleanliness: 1,
      communication: 1,
      check_in: 1,
      accuracy: 1,
      location: 1,
      value: 1
    )

    kashyyyk_r2 = Review.create!(
      listing_id: 6,
      reviewer_id: 3,
      body: 'We had an incredible time on Kashyyyk! The weather was gorgeous - sunny and warm, but not too hot - and the landscape was stunning. The tree houses were a great way to get a bird\'s eye view of the planet and take in the beauty of the surroundings. We also had the chance to meet some Wookies, which was a fantastic experience! Highly recommend Kashyyyk for a unique, unforgettable vacation. ',
      cleanliness: 1,
      communication: 1,
      check_in: 1,
      accuracy: 1,
      location: 1,
      value: 1
    )

    kashyyyk_r3 = Review.create!(
      listing_id: 6,
      reviewer_id: 3,
      body: ' Our stay on Kashyyyk was absolutely amazing! The weather was ideal - sunny and breezy. And the tree houses were great - it was a fun way to explore the planet from a different perspective. Plus, we had the chance to meet some friendly Wookies, which was a really cool experience!',
      cleanliness: 1,
      communication: 1,
      check_in: 1,
      accuracy: 1,
      location: 1,
      value: 1
    )

    ahch_to_r1 = Review.create!(
      listing_id: 7,
      reviewer_id: 3,
      body: 'Ahch-To was an amazing planet to visit! The scenery was breathtaking, with a beautiful blue sky and crystal clear waters. The creatures on the planet were fascinating, and I especially enjoyed meeting the adorable Porgs! I was also lucky enough to meet Luke Skywalker himself, who was very friendly and welcoming. All in all, it was a great experience and I would highly recommend it to anyone looking for a unique destination.',
      cleanliness: 1,
      communication: 1,
      check_in: 1,
      accuracy: 1,
      location: 1,
      value: 1
    )

    ahch_to_r2 = Review.create!(
      listing_id: 7,
      reviewer_id: 3,
      body: 'Ahch-To is a great place to explore! The weather is warm and pleasant, and the views are absolutely stunning. The planet is home to many different creatures, and you can find lots of interesting wildlife to observe. I also had the pleasure of meeting Luke Skywalker, the legendary Jedi Master who resides there. All in all, it was an unforgettable experience and I would definitely recommend it to anyone looking for a unique getaway.
      ',
      cleanliness: 1,
      communication: 1,
      check_in: 1,
      accuracy: 1,
      location: 1,
      value: 1
    )

    ahch_to_r3 = Review.create!(
      listing_id: 7,
      reviewer_id: 3,
      body: 'Ahch-To is a fantastic planet to visit! The weather is warm and sunny, and the landscape is breathtaking. I especially enjoyed seeing the different creatures that inhabit the planet. From the cute Porgs to the mysterious Caretakers, there is something for everyone. I was also lucky enough to meet Luke Skywalker, who was very friendly and welcoming',
      cleanliness: 1,
      communication: 1,
      check_in: 1,
      accuracy: 1,
      location: 1,
      value: 1
    )

    trask_r1 = Review.create!(
      listing_id: 8,
      reviewer_id: 1,
      body: 'Visiting Trask was an incredible experience! The planet was breathtaking, from the rugged cliffs to the crystal-clear waters. I was even lucky enough to catch a glimpse of Mandalorians on the horizon! The cuisine was delicious, especially the live octopus soup! I\'d definitely recommend visiting this planet to anyone looking to explore the universe!',
      cleanliness: 5,
      communication: 4,
      check_in: 5,
      accuracy: 5,
      location: 4,
      value: 4
    )

    trask_r2 =  Review.create!(
      listing_id: 8,
      reviewer_id: 1,
      body: 'We had an amazing time visiting Trask! We got to explore the planet and its stunning landscapes, and we even saw Mandalorians flying overhead. The locals were friendly and welcoming, and they even helped us repair our spaceship! I\'d highly recommend visiting this planet!',
      cleanliness: 1,
      communication: 4,
      check_in: 3,
      accuracy: 3,
      location: 4,
      value: 4
    )

    trask_r3 = Review.create!(
      listing_id: 8,
      reviewer_id: 2,
      body: 'We had a terrible time visiting Trask. The planet itself was nice enough, but the locals were unfriendly and unhelpful. When we asked about getting our spaceship repaired, we were met with blank stares. And the live octopus soup was unappetizing, to say the least. I wouldn\'t recommend visiting this planet to anyone.',
      cleanliness: 5,
      communication: 4,
      check_in: 5,
      accuracy: 5,
      location: 4,
      value: 4
    )

    trask_r4 = Review.create!(
      listing_id: 8,
      reviewer_id: 3,
      body: 'We had a fantastic time on Trask! The planet was beautiful, and the locals were incredibly friendly and welcoming. We even got to see Mandalorians in the sky!',
      cleanliness: 1,
      communication: 1,
      check_in: 1,
      accuracy: 1,
      location: 1,
      value: 1
    )
  
    puts "Done!"
  # end