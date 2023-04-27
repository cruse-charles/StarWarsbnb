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
      title: 'Icey Getaway',
      lister_id: 1,
      description: '
      Welcome to my cozy home on Hoth! This home is located on the frozen planet of Hoth and offers a unique experience. It is the perfect getaway for adventurers who seek to explore the icy depths of this planet.
      
      This home is a spacious two-bedroom, two-bathroom apartment with a large living room and a fully-equipped kitchen. It has a large balcony that overlooks the icy terrain of Hoth, giving you a perfect view of the snow-covered mountains. The bedrooms are comfortable and warm, with plenty of blankets and pillows to keep you cozy.
      
      The apartment comes with all the amenities you would expect, such as a television, Wi-Fi, and a washer and dryer. In addition, the home is close to the Tauntaun stables, so you can easily go on an adventure whenever you want.
      
      This home is perfect for anyone looking to explore the wonders of Hoth. So come and enjoy the beauty of this planet and make some unforgettable memories!',
      address: 'Echo Base',
      city: 'Snowy Plains',
      country: 'Hoth',
      latitude: '10.000000',
      longitude: '10.000000',
      price: '199'
    )

    hoth_l1.photos.attach([
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l1p1"), filename: "l1p1.png"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l1p2.jpeg"), filename: "l1p2.jpeg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l1p3.jpg"), filename: "l1p3.jpg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l1p4.webp"), filename: "l1p4.webp"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l1p5.png"), filename: "l1p5.png"}
    ])

    tatooine_l2 = Listing.create!(
      title: 'Cozy Home on Tatooine',
      lister_id: 1,
      description: 'Welcome to my cozy home located in Anchorhead, Tatooine! 

      This humble abode is perfect for a single traveler or a small family looking for a quiet place to stay on the planet. Featuring two bedrooms, one bathroom, and a living room, this home offers all the basics for a comfortable stay.
      
      Enjoy the desert breeze coming in from the windows, take a dip in the nearby Sarlacc pit, and wander the nearby sand dunes for a truly unique experience. Book now to experience the wonders of Tatooine!',
      address: '5402 Anchorhead Way',
      city: 'Anchorhead',
      country: 'Tatooine',
      latitude: '20.000000',
      longitude: '20.000000',
      price: '57'
    )

    tatooine_l2.photos.attach([
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l2p1.png"), filename: "l2p1.jpeg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l2p2.webp"), filename: "l2p2.webp"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l2p3.webp"), filename: "l2p3.webp"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l2p4.webp"), filename: "l2p4.webp"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l2p5.jpeg"), filename: "l2p5.jpeg"}
    ])

    kamino_l3 = Listing.create!(
      title: 'Luxury Apartment on Kamino',
      lister_id: 1,
      description: 'Come stay on the exotic planet of Kamino and enjoy the sights and sounds of this remote location! 
      
      This luxury apartment is located in the heart of Kamino City and offers breathtaking views of the Tide Pools. Inside you will find a fully equipped kitchen, two bedrooms and three bathrooms, as well as a spacious living room with a large flat-screen TV. 
      
      Take a stroll and enjoy the beautiful landscape or take a swim in the crystal-clear waters of the tidal pools. With its stunning views and relaxing atmosphere, this apartment is the perfect place to stay on Kamino.',
      address: '155 Tide Pools',
      city: 'Kamino City',
      country: 'Kamino',
      latitude: '10.000000',
      longitude: '10.000000',
      price: '99'
    )

    kamino_l3.photos.attach([
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l3p1.webp"), filename: "l3p1.webp"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l3p2.webp"), filename: "l3p2.webp"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l3p3.jpg"), filename: "l3p3.jpg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l3p4.jpg"), filename: "l3p4.jpg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l3p5.jpg"), filename: "l3p5.jpg"}
    ])

    endor_l4 = Listing.create!(
      title: 'Endor Forest Lodge',
      lister_id: 3,
      description: 'Escape to the lush forests of Endor and stay in our luxurious Endor Forest Lodge. 
      
      Located in the heart of the Ewok Village, this rustic yet modern home is the perfect retreat for the Star Wars enthusiast. With its open floor plan, cozy fireplaces, and breathtaking views of the forest, you\'ll feel right at home. Come explore the forests of Endor, make some new furry friends, and make memories that will last a lifetime. 
      
      The Endor Forest Lodge has all the modern amenities you need to make your stay comfortable and enjoyable. So come and experience the wonders of Endor and relax in the comfort of this peaceful home.',
      address: 'Large Pine Tree',
      city: 'Ewok Village',
      country: ' Endor',
      latitude: '40.000000',
      longitude: '40.000000',
      price: '415'
    )

    endor_l4.photos.attach([
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l4p1.jpg"), filename: "l4p1.jpg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l4p2.webp"), filename: "l4p2.webp"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l4p3.jpg"), filename: "l4p3.jpg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l4p4.png"), filename: "l4p4.png"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l4p5.jpeg"), filename: "l4p5.jpeg"}
    ])

    naboo_l5 = Listing.create!(
      title: 'Luxurious Home on Theed Waterfront',
      lister_id: 3,
      description: 'This luxurious home located on the waterfront of Theed, Naboo, provides spectacular views of the city and the surrounding lake. 
      
      The house features four bedrooms and three bathrooms, with plenty of space to accommodate a large family or group of friends. The living room is cozy and inviting, and the open kitchen is fully stocked with all of the modern amenities. The large deck overlooks the lake and offers a perfect spot for watching the sunset. 
      
      The master bedroom is spacious and features a large en suite bathroom, and the other bedrooms have plenty of room for a comfortable night\'s sleep. The garden surrounding the house is lush and tranquil, and the perfect spot for a peaceful evening stroll. ',
      address: '5353 princess lane',
      city: 'Theed',
      country: 'Naboo',
      latitude: '40.000000',
      longitude: '40.000000',
      price: '226'
    )

    naboo_l5.photos.attach([
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l5p1.jpg"), filename: "l5p1.jpg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l5p2.webp"), filename: "l5p2.webp"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l5p3.jpg"), filename: "l5p3.jpg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l5p4.jpeg"), filename: "l5p4.jpeg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l5p5.jpg"), filename: "l5p5.jpg"}
    ])

    kashyyyk_l6 = Listing.create!(
      title: 'Luxury Home on Kashyyyk',
      lister_id: 3,
      description: 'This stunning, luxury home situated in the city of Kachirho, Kashyyyk offers a unique, one-of-a-kind getaway. With its spacious, open floorplan and breathtaking views, this home is ideal for a peaceful retreat. The home sits on a secluded hilltop, surrounded by lush, green forests and rolling hills. Inside, you will find a fully-equipped kitchen, luxurious bedrooms, and a large living room with plenty of space to relax.

      The home also has several outdoor lounging areas where you can enjoy the fresh air and take in the stunning vistas. For those who like to stay active, there are plenty of nearby trails to explore, and the nearby waters of the Kachirho River offer an ideal spot for swimming or kayaking. Whether you\'re looking for a peaceful escape or an adventure-filled vacation, this home has something for everyone.
      
      The home is located in a secure, gated community and has 24-hour security staff to ensure your safety. It is also conveniently located near shops and restaurants, allowing you to easily pick up',
      address: '12 Yalarra Road',
      city: 'Kachirho',
      country: 'Kashyyyk',
      latitude: '40.000000',
      longitude: '40.000000',
      price: '177'
    )

    kashyyyk_l6.photos.attach([
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l6p1.webp"), filename: "l6p1.webp"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l6p2.jpeg"), filename: "l6p2.jpeg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l6p3.jpg"), filename: "l6p3.jpg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l6p4.jpeg"), filename: "l6p4.jpeg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l6p5.webp"), filename: "l6p5.png"}
    ])

    ahch_to_l7 = Listing.create!(
      title: 'Secluded Ahch-To Retreat ',
      lister_id: 3,
      description: 'This tranquil and secluded retreat is located in the heart of Ahch-To. 
      
      Boasting gorgeous views of the surrounding landscape, this home is perfect for an escape from the hustle and bustle of everyday life. With a spacious living area and bedrooms, you\'ll have plenty of room to stretch out and relax. The large deck is perfect for entertaining and taking in the surrounding beauty. 
      
      The property also includes a well-maintained garden and is surrounded by lush greenery, providing a peaceful oasis. Whether you\'re looking for a peaceful getaway or just a place to call home, this Ahch-To retreat is the perfect spot. 
      
      Come and experience the beauty and serenity of this unique location.',
      address: 'Unknown Street',
      city: 'Jedi Temple',
      country: 'Ahch-To',
      latitude: '40.000000',
      longitude: '40.000000',
      price: '55'
    )

    ahch_to_l7.photos.attach([
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l7p1.webp"), filename: "l7p1.webp"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l7p2.jpg"), filename: "l7p2.jpg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l7p3.jpg"), filename: "l7p3.jpg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l7p4.webp"), filename: "l7p4.webp"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l7p5.jpg"), filename: "l7p5.jpg"}
    ])

    trask_l8 = Listing.create!(
      title: 'Trask Mansion, an Amazing Home in an Unforgettable World',
      lister_id: 4,
      description: 'Located in the enchanting world of Trask, this magnificent home is perfect for anyone looking for a unique, unforgettable getaway. 
      
      The property includes two bedrooms, two bathrooms, and a large living area with a cozy fireplace. The kitchen is updated and modern, and includes a breakfast nook that overlooks lush green gardens. The outside of the home is majestic and will take your breath away. 
      
      There is a large patio and backyard area for entertaining and for enjoying the peaceful atmosphere of this amazing world. Whether you are looking for a quiet escape or an adventure, this home is the perfect place to relax and enjoy all that Trask has to offer.',
      address: '44 Mos Espa Ave',
      city: 'Mos Espa',
      country: 'Trask',
      latitude: '40.000000',
      longitude: '40.000000',
      price: '299'
    )

    trask_l8.photos.attach([
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l8p1.jpeg"), filename: "l8p1.jpeg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l8p2.webp"), filename: "l8p2.webp"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l8p3.jpg"), filename: "l8p3.jpg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l8p4.jpg"), filename: "l8p4.jpg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l8p5.jpg"), filename: "l8p5.jpg"}
    ])

    puts 'Creating Reviews...'

    hoth_r1 = Review.create!(
      listing_id: 1,
      reviewer_id: 2,
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
      reviewer_id: 3,
      body: 'I recently traveled to Hoth and it was a once-in-a-lifetime experience! I loved riding the Tauntauns and seeing the snow-covered terrain of this iconic planet. It was so much more magical than I could have ever imagined!',
      cleanliness: 4,
      communication: 4,
      check_in: 4,
      accuracy: 5,
      location: 5,
      value: 4
    )

    hoth_r3 = Review.create!(
      listing_id: 1,
      reviewer_id: 4,
      body: 'My trip to Hoth was a complete disaster. Not only was it way too cold, the accommodations were terrible. I felt like I was stuck in the middle of nowhere with no way to escape. Avoid this place at all costs',
      cleanliness: 1,
      communication: 2,
      check_in: 1,
      accuracy: 2,
      location: 1,
      value: 3
    )

    hoth_r4 = Review.create!(
      listing_id: 1,
      reviewer_id: 5,
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
      reviewer_id: 6,
      body: 'My stay on Hoth was an experience I\'ll never forget.
      
      The climate was extremely cold and the terrain was a vast and dangerous wasteland of snow, ice, and jagged rocks. It was an unforgiving, yet beautiful place to explore.',
      cleanliness: 4,
      communication: 5,
      check_in: 4,
      accuracy: 4,
      location: 4,
      value: 5
    )

    tatooine_r1 = Review.create!(
      listing_id: 2,
      reviewer_id: 7,
      body: 'Visiting Tatooine was a huge disappointment. We came expecting to see Jedi, but all we got was a couple of Jawas who were trying to sell us faulty droids. The Tusken Raiders just added to the misery, as they were everywhere and extremely hostile. Would not recommend this planet to anyone.',
      cleanliness: 1,
      communication: 2,
      check_in: 1,
      accuracy: 1,
      location: 3,
      value: 2
    )

    tatooine_r2 = Review.create!(
      listing_id: 2,
      reviewer_id: 8,
      body: 'I recently visited the planet Tatooine and it was an amazing experience! 
      
      The planetscape was full of unique sights and wonders. I was lucky enough to see some Jedi Knights in action, which was an incredible sight. The locals were very friendly and hospitable. I definitely recommend a visit to Tatooine if you want to experience something truly out of this world. ',
      cleanliness: 5,
      communication: 3,
      check_in: 5,
      accuracy: 5,
      location: 5,
      value: 4
    )

    tatooine_r3 = Review.create!(
      listing_id: 2,
      reviewer_id: 9,
      body: '
      I recently visited the planet Tatooine and stayed at the Jabba the Hutt Hotel. The hotel was so unique. The rooms were spacious and comfortable, and the staff was welcoming. The highlight of my stay was visiting Jabba the Hutt himself. He was friendly and made us feel like part of the family. I would definitely recommend staying here and experiencing the world of Tatooine.',
      cleanliness: 5,
      communication: 5,
      check_in: 4,
      accuracy: 4,
      location: 4,
      value: 4
    )

    kamino_r1 = Review.create!(
      listing_id: 3,
      reviewer_id: 2,
      body: 'I was really looking forward to visiting Kamino, but unfortunately it was a huge disappointment. 
      
      The planet is incredibly wet and the weather is unbearable. It\'s a non-stop rain and I was completely unprepared for it. I wouldn\'t recommend this place to anyone.',
      cleanliness: 2,
      communication: 3,
      check_in: 2,
      accuracy: 2,
      location: 1,
      value: 2
    )

    kamino_r2 = Review.create!(
      listing_id: 3,
      reviewer_id: 10,
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
      reviewer_id: 2,
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
      body: 'My stay on Kamino was a memorable one, mostly due to the clone army I found there. 
      
      The clones were friendly and eager to help and they made my stay a pleasant one. The planet is wet and humid and the weather isn\'t the most ideal, but it\'s worth a visit to experience the unique culture of the clones.',
      cleanliness: 4,
      communication: 4,
      check_in: 4,
      accuracy: 4,
      location: 4,
      value: 4
    )

    endor_r1 = Review.create!(
      listing_id: 4,
      reviewer_id: 4,
      body: 'We had an amazing time visiting Endor! We were able to see up close the Ewoks who live in the forest and interact with them. They were so friendly, and the huts they made were incredible! The forest and trees were beautiful, and the atmosphere was peaceful and calming. We highly recommend a visit to Endor!',
      cleanliness: 4,
      communication: 5,
      check_in: 4,
      accuracy: 5,
      location: 4,
      value: 5
    )

    endor_r2 = Review.create!(
      listing_id: 4,
      reviewer_id: 5,
      body: 'Endor is an absolute must-see! 
      
      We were in awe of all the trees and the lush forest that surrounded us. We were lucky enough to be able to see and interact with the Ewoks, who were incredibly friendly and welcoming. We were also very impressed at the huts that they had built with their own two hands! This definitely is a place we would recommend to anyone and everyone.',
      cleanliness: 5,
      communication: 5,
      check_in: 5,
      accuracy: 5,
      location: 5,
      value: 5
    )

    endor_r3 = Review.create!(
      listing_id: 4,
      reviewer_id: 6,
      body: 'We had the pleasure of visiting Endor recently, and it was an amazing experience! We were able to meet and interact with some of the Ewoks who live there, and they were so kind and generous. The forest was stunning and the huts they had made out of the natural resources were so impressive. We would highly recommend a visit to this magical planet!',
      cleanliness: 4,
      communication: 5,
      check_in: 4,
      accuracy: 5,
      location: 5,
      value: 4
    )

    naboo_r1 = Review.create!(
      listing_id: 5,
      reviewer_id: 7,
      body: 'Naboo was a great place to stay! The architecture was breathtaking, with its towering columns, beautiful statues, and intricate stonework. The locals were very friendly and always willing to help us out. The weather was mild and pleasant, with lots of sunshine during the day and cool breezes at night. We felt very safe and secure during our stay. Highly recommended!',
      cleanliness: 4,
      communication: 4,
      check_in: 4,
      accuracy: 5,
      location: 4,
      value: 5
    )

    naboo_r2 = Review.create!(
      listing_id: 5,
      reviewer_id: 8,
      body: 'We had a wonderful stay on Naboo! The architecture was stunning, with its grand palaces, lush gardens, and impressive fountains. 
      
      The locals were very welcoming and helpful. The weather was lovely, with clear blue skies and warm days. We felt very comfortable and at ease during our stay. Highly recommended!',
      cleanliness: 5,
      communication: 4,
      check_in: 3,
      accuracy: 5,
      location: 4,
      value: 4
    )

    kashyyyk_r1 = Review.create!(
      listing_id: 6,
      reviewer_id: 9,
      body: 'What an amazing experience we had on Kashyyyk! The weather was perfect - hot, but with a nice breeze. The tree houses were so unique and fun - it was a great way to explore and get away from the hustle and bustle of the city. We even had the chance to meet some friendly Wookies, which was an experience we\'ll never forget! Highly recommend Kashyyyk for anyone looking for an out-of-this-world vacation. ',
      cleanliness: 3,
      communication: 5,
      check_in: 5,
      accuracy: 5,
      location: 5,
      value: 4
    )

    kashyyyk_r2 = Review.create!(
      listing_id: 6,
      reviewer_id: 10,
      body: 'We had an incredible time on Kashyyyk! The weather was gorgeous - sunny and warm, but not too hot - and the landscape was stunning. The tree houses were a great way to get a bird\'s eye view of the planet and take in the beauty of the surroundings. We also had the chance to meet some Wookies, which was a fantastic experience! Highly recommend Kashyyyk for a unique, unforgettable vacation. ',
      cleanliness: 4,
      communication: 4,
      check_in: 4,
      accuracy: 4,
      location: 4,
      value: 4
    )

    kashyyyk_r3 = Review.create!(
      listing_id: 6,
      reviewer_id: 2,
      body: ' Our stay on Kashyyyk was absolutely amazing! The weather was ideal - sunny and breezy. And the tree houses were great - it was a fun way to explore the planet from a different perspective. Plus, we had the chance to meet some friendly Wookies, which was a really cool experience!',
      cleanliness: 5,
      communication: 5,
      check_in: 5,
      accuracy: 5,
      location: 5,
      value: 5
    )

    ahch_to_r1 = Review.create!(
      listing_id: 7,
      reviewer_id: 3,
      body: 'Ahch-To was an amazing planet to visit! 
      
      The scenery was breathtaking, with a beautiful blue sky and crystal clear waters. The creatures on the planet were fascinating, and I especially enjoyed meeting the adorable Porgs! I was also lucky enough to meet Luke Skywalker himself, who was very friendly and welcoming. All in all, it was a great experience and I would highly recommend it to anyone looking for a unique destination.',
      cleanliness: 5,
      communication: 5,
      check_in: 5,
      accuracy: 4,
      location: 5,
      value: 4
    )

    ahch_to_r2 = Review.create!(
      listing_id: 7,
      reviewer_id: 4,
      body: 'Ahch-To is a great place to explore! The weather is warm and pleasant, and the views are absolutely stunning. The planet is home to many different creatures, and you can find lots of interesting wildlife to observe. I also had the pleasure of meeting Luke Skywalker, the legendary Jedi Master who resides there. All in all, it was an unforgettable experience and I would definitely recommend it to anyone looking for a unique getaway.
      ',
      cleanliness: 4,
      communication: 4,
      check_in: 4,
      accuracy: 4,
      location: 4,
      value: 4
    )

    ahch_to_r3 = Review.create!(
      listing_id: 7,
      reviewer_id: 5,
      body: 'Ahch-To is a fantastic planet to visit! The weather is warm and sunny, and the landscape is breathtaking. I especially enjoyed seeing the different creatures that inhabit the planet. From the cute Porgs to the mysterious Caretakers, there is something for everyone. I was also lucky enough to meet Luke Skywalker, who was very friendly and welcoming',
      cleanliness: 4,
      communication: 4,
      check_in: 4,
      accuracy: 5,
      location: 5,
      value: 5
    )

    trask_r1 = Review.create!(
      listing_id: 8,
      reviewer_id: 6,
      body: 'Visiting Trask was an incredible experience! The planet was breathtaking, from the rugged cliffs to the crystal-clear waters. 
      
      I was even lucky enough to catch a glimpse of Mandalorians on the horizon! The cuisine was delicious, especially the live octopus soup! I\'d definitely recommend visiting this planet to anyone looking to explore the universe!',
      cleanliness: 5,
      communication: 4,
      check_in: 5,
      accuracy: 5,
      location: 4,
      value: 4
    )

    trask_r2 =  Review.create!(
      listing_id: 8,
      reviewer_id: 7,
      body: 'We had an amazing time visiting Trask! We got to explore the planet and its stunning landscapes, and we even saw Mandalorians flying overhead. The locals were friendly and welcoming, and they even helped us repair our spaceship! I\'d highly recommend visiting this planet!',
      cleanliness: 3,
      communication: 4,
      check_in: 4,
      accuracy: 3,
      location: 4,
      value: 4
    )

    trask_r3 = Review.create!(
      listing_id: 8,
      reviewer_id: 8,
      body: 'We had a terrible time visiting Trask. The planet itself was nice enough, but the locals were unfriendly and unhelpful. When we asked about getting our spaceship repaired, we were met with blank stares. And the live octopus soup was unappetizing, to say the least. I wouldn\'t recommend visiting this planet to anyone.',
      cleanliness: 2,
      communication: 2,
      check_in: 2,
      accuracy: 2,
      location: 1,
      value: 1
    )

    trask_r4 = Review.create!(
      listing_id: 8,
      reviewer_id: 9,
      body: 'We had a fantastic time on Trask! The planet was beautiful, and the locals were incredibly friendly and welcoming. We even got to see Mandalorians in the sky!',
      cleanliness: 4,
      communication: 5,
      check_in: 4,
      accuracy: 4,
      location: 5,
      value: 5
    )
  
    puts "Done!"
  # end