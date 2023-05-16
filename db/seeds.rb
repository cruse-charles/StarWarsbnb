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

    coruscant_l9 = Listing.create!(
      title: 'Modern Apartment in the Heart of Coruscant',
      lister_id: 4,
      description: 'Looking for a place to stay in the bustling city of Coruscant? Look no further than our modern apartment located in the heart of Galactic City. With stunning views of the cityscape and all the amenities you need for a comfortable stay, our apartment is perfect for solo travelers, couples, and small groups.

      The apartment features a spacious living area, fully equipped kitchen, comfortable bedroom, and a modern bathroom. Plus, you\'ll have access to the building\'s rooftop terrace, where you can enjoy panoramic views of the city. Located within walking distance of the city\'s best shops, restaurants, and attractions, our apartment is the perfect home base for your Coruscant adventure.
      
      Come experience the excitement of life in one of the galaxy\'s most vibrant cities. Book your stay in our modern apartment today!',
      address: '1532 Galactic Lane',
      city: 'Galactic City',
      country: 'Coruscant',
      latitude: '40.000000',
      longitude: '40.000000',
      price: '700'
    )

    coruscant_l9.photos.attach([
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l9p1.jpg"), filename: "l9p1.jpg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l9p2.jpeg"), filename: "l9p2.jpeg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l9p3.webp"), filename: "l9p3.webp"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l9p4.jpg"), filename: "l9p4.jpg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l9p5.webp"), filename: "l9p5.webp"}
    ])

    dagobah_l10 = Listing.create!(
      title: 'Luxury Cloud City Retreat on Bespin',
      lister_id: 4,
      description: 'Escape to a luxurious retreat in the clouds on the planet Bespin. Our Cloud City apartment offers stunning panoramic views of the surrounding landscape, as well as all the amenities you need for a comfortable and relaxing stay. With a spacious living area, fully equipped kitchen, and comfortable bedroom, our apartment is perfect for couples, solo travelers, and small groups.

      Located in the heart of Bespin City, our apartment is within walking distance of all the best shops, restaurants, and attractions. Take a stroll through the city\'s vibrant streets, or relax in the comfort of your own private sanctuary in the clouds. And with our 24-hour concierge service, you\'ll have everything you need to make your stay unforgettable.
      
      Come experience the luxury of Cloud City living on Bespin. Book your stay today!',
      address: '567 Cloud City Boulevard',
      city: 'Bespin City',
      country: 'Bespin',
      latitude: '40.000000',
      longitude: '40.000000',
      price: '67'
    )

    dagobah_l10.photos.attach([
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l10p1.jpeg"), filename: "l10p1.jpeg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l10p2.webp"), filename: "l10p2.webp"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l10p3.webp"), filename: "l10p3.webp"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l10p4.jpg"), filename: "l10p4.jpg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l10p5.jpg"), filename: "l10p5.jpg"}
    ])

    bespin_l11 = Listing.create!(
      title: 'Serene Retreat amidst Nature\'s Beauty on Dagobah',
      lister_id: 5,
      description: 'Discover a truly unique and serene retreat on the planet Dagobah. Our cozy cabin is nestled amidst the lush greenery and enchanting swamps, offering an escape from the bustling galaxy. With a rustic charm and all the necessary amenities, our cabin is perfect for nature enthusiasts, solo travelers, and those seeking a peaceful getaway.

      The cabin features a comfortable bedroom, a small kitchenette, and a cozy living area. Step outside onto the private porch, where you can soak in the beauty of the surrounding swampy landscape. The location provides an opportunity for stargazing at night and birdwatching during the day. Immerse yourself in the tranquil ambiance of Dagobah and create unforgettable memories.
      
      Come experience the serenity of Dagobah\'s natural beauty. Book your stay at our charming cabin today!',
      address: '789 Swampy Lane',
      city: 'Greenhaven',
      country: 'Dagobah',
      latitude: '40.000000',
      longitude: '40.000000',
      price: '44'
    )

    bespin_l11.photos.attach([
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l11p1.jpeg"), filename: "l11p1.jpeg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l11p2.webp"), filename: "l11p2.webp"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l11p3.webp"), filename: "l11p3.webp"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l11p4.webp"), filename: "l11p4.webp"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l11p5.jpg"), filename: "l11p5.jpg"}
    ])

    jakku_l12 = Listing.create!(
      title: 'Tranquil Desert Oasis on Jakku',
      lister_id: 5,
      description: 'Escape to a tranquil desert oasis on the planet Jakku. Our cozy retreat is nestled amidst the vast stretches of sand dunes, offering a unique experience for adventurous travelers and those seeking a peaceful getaway. With its rustic charm and essential amenities, our property provides a comfortable base to explore the wonders of Jakku\'s desert landscape.

      The retreat features a comfortable bedroom, a small kitchenette, and a cozy living area with panoramic views of the desert. Step outside onto the private patio, where you can witness breathtaking sunsets and gaze at the starry night sky. Located in the quiet town of Dusthaven, our property offers a serene environment away from the hustle and bustle of the galaxy.
      
      Come and immerse yourself in the raw beauty of Jakku\'s desert. Book your stay at our tranquil oasis today!',
      address: '456 Sand Dune Lane',
      city: 'Dusthaven',
      country: 'Jakku',
      latitude: '40.000000',
      longitude: '40.000000',
      price: '12'
    )

    jakku_l12.photos.attach([
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l12p1.jpg"), filename: "l12p1.jpg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l12p2.jpeg"), filename: "l12p2.jpeg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l12p3.webp"), filename: "l12p3.webp"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l12p4.jpeg"), filename: "l12p4.jpeg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l12p5.jpg"), filename: "l12p5.jpg"}
    ])

    mustafar_l13 = Listing.create!(
      title: 'Serene Retreat on the Volcanic Landscapes of Mustafar',
      lister_id: 5,
      description: '
      Escape to a serene retreat amidst the unique volcanic landscapes of Mustafar. Our property offers a one-of-a-kind experience for adventurous travelers and nature enthusiasts. With its breathtaking views and essential amenities, our retreat provides a comfortable base to explore the wonders of Mustafar\'s fiery terrain.
      
      The accommodation features a cozy bedroom, a small kitchenette, and a comfortable living area with panoramic views of the volcanic landscape. Step outside onto the private patio, where you can witness the mesmerizing glow of lava flows and experience the dramatic beauty of Mustafar. Located in the tranquil Ember City, our property offers a peaceful environment away from the chaos of the galaxy.
      
      Come and immerse yourself in the raw beauty of Mustafar\'s volcanic landscapes. Book your stay at our serene retreat today!',
      address: '789 Lavaflow Street',
      city: 'Ember City',
      country: 'Mustafar',
      latitude: '40.000000',
      longitude: '40.000000',
      price: '12'
    )

    mustafar_l13.photos.attach([
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l13p1.jpeg"), filename: "l13p1.jpeg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l13p2.jpeg"), filename: "l13p2.jpeg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l13p3.webp"), filename: "l13p3.webp"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l13p4.webp"), filename: "l13p4.webp"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l13p5.jpeg"), filename: "l13p5.jpeg"}
    ])

    cantonica_l14 = Listing.create!(
      title: 'Elegant Oasis in the Heart of Cantonica\'s Opulence',
      lister_id: 5,
      description: '
      Indulge in the opulence of Cantonica at our elegant oasis nestled in the heart of Canto Bight. Our luxurious listing offers a refined experience for sophisticated travelers seeking a taste of the planet\'s vibrant nightlife and extravagant lifestyle. With its lavish amenities and impeccable service, our property provides a lavish retreat for an unforgettable stay on Cantonica.

      The accommodation features exquisite design and spacious living areas, complete with a comfortable bedroom, a fully equipped kitchen, and a stylish living room. Step outside onto the private balcony, where you can enjoy breathtaking views of the city skyline and immerse yourself in the bustling atmosphere of Canto Bight. Located in the prestigious district, our property is surrounded by upscale restaurants, high-end shops, and world-class entertainment.

      Experience the epitome of luxury on Cantonica. Book your stay at our elegant oasis today!',
      address: '123 Luxe Avenue',
      city: 'Canto Bight',
      country: 'Cantonica',
      latitude: '40.000000',
      longitude: '40.000000',
      price: '12'
    )

    cantonica_l14.photos.attach([
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l14p1.webp"), filename: "l14p1.webp"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l14p2.jpeg"), filename: "l14p2.jpeg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l14p3.webp"), filename: "l14p3.webp"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l14p4.jpg"), filename: "l14p4.jpg"},
      {io:URI.open("https://starwarsbnb-dev.s3.amazonaws.com/l14p5.jpg"), filename: "l14p5.jpg"}
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

    coruscant_r1 = Review.create!(
      listing_id: 9,
      reviewer_id: 1,
      body: 'I had a fantastic stay at this modern apartment in Coruscant. The location was perfect - right in the heart of Galactic City with easy access to all the shops and restaurants. The apartment itself was spotless and well-maintained, with all the amenities I needed for a comfortable stay. The rooftop terrace was definitely a highlight, offering breathtaking views of the city. I would highly recommend this apartment to anyone visiting Coruscant.',
      cleanliness: 5,
      communication: 4,
      check_in: 5,
      accuracy: 5,
      location: 4,
      value: 4
    )

    coruscant_r2 =  Review.create!(
      listing_id: 9,
      reviewer_id: 2,
      body: 'My partner and I had an amazing stay at this apartment. The location was unbeatable - right in the heart of the city with plenty of shops, restaurants, and attractions within walking distance. The apartment was beautifully decorated and well-equipped with everything we needed. We especially loved the modern bathroom and the comfortable bed. The rooftop terrace was a great place to relax and take in the stunning views of the city. We would definitely stay here again!',
      cleanliness: 3,
      communication: 4,
      check_in: 4,
      accuracy: 3,
      location: 4,
      value: 4
    )

    coruscant_r3 = Review.create!(
      listing_id: 9,
      reviewer_id: 3,
      body: 'I was disappointed with my stay at this apartment. While the location was convenient, the apartment itself was quite small and felt cramped. The living area and kitchen were especially tight, and there wasn\'t much natural light. Additionally, I found the bed to be uncomfortable and had trouble sleeping. While the rooftop terrace was nice, it was often crowded and didn\'t offer as much privacy as I would have liked. Overall, I don\'t feel like this apartment was worth the price.',
      cleanliness: 2,
      communication: 2,
      check_in: 2,
      accuracy: 2,
      location: 1,
      value: 1
    )

    dagobah_r1 = Review.create!(
      listing_id: 10,
      reviewer_id: 7,
      body: 'My stay at this Dagobah cabin was simply magical. The location was breathtaking, surrounded by lush greenery and serene swamps. The cabin itself was cozy and had everything I needed for a comfortable stay. I loved waking up to the sounds of nature and spending evenings on the porch, enjoying the peaceful atmosphere. The host was incredibly helpful and provided useful tips for exploring the area. If you\'re looking for a unique and rejuvenating experience, I highly recommend this cabin on Dagobah.',
      cleanliness: 2,
      communication: 2,
      check_in: 2,
      accuracy: 2,
      location: 1,
      value: 1
    )

    dagobah_r2 = Review.create!(
      listing_id: 10,
      reviewer_id: 8,
      body: 'This cabin on Dagobah was the perfect escape from the busy galaxy. The tranquil surroundings and natural beauty of the swamps were awe-inspiring. The cabin itself was cozy and well-maintained, with a comfortable bed and a small kitchenette. I enjoyed exploring the area, taking long walks through the swampy trails and observing the unique flora and fauna. The host was responsive and accommodating, making sure my stay was enjoyable. I would definitely visit again for a peaceful retreat.',
      cleanliness: 5,
      communication: 4,
      check_in: 5,
      accuracy: 5,
      location: 4,
      value: 4
    )

    dagobah_r3 =  Review.create!(
      listing_id: 10,
      reviewer_id: 1,
      body: 'I was quite disappointed with my stay at this Dagobah cabin. While the location was indeed surrounded by nature, the swampy environment was uncomfortable and not what I expected. 
      
      The cabin itself felt damp and smelled musty. The bed was uncomfortable, and the kitchenette was poorly equipped. Additionally, there were mosquitos and other insects that made it difficult to relax outdoors. Overall, I don\'t feel like this cabin provided a comfortable and enjoyable experience.',
      cleanliness: 3,
      communication: 4,
      check_in: 4,
      accuracy: 3,
      location: 4,
      value: 4
    )

    dagobah_r4 = Review.create!(
      listing_id: 10,
      reviewer_id: 2,
      body: 'Unfortunately, my stay at this Dagobah cabin did not meet my expectations. The location, while surrounded by natural beauty, was difficult to access, and the swampy terrain made it challenging to move around. The cabin itself was basic and lacked some essential amenities. The living area was cramped, and the bathroom facilities were subpar. The overall experience left much to be desired, and I would not recommend this cabin for a comfortable stay on Dagobah.',
      cleanliness: 2,
      communication: 2,
      check_in: 2,
      accuracy: 2,
      location: 1,
      value: 1
    )

    bespin_r1 = Review.create!(
      listing_id: 11,
      reviewer_id: 4,
      body: 'I had an amazing stay at this Cloud City retreat on Bespin. The apartment was absolutely stunning, with panoramic views of the surrounding landscape that took my breath away. 
      
      The living area was spacious and comfortable, and the fully equipped kitchen made it easy to prepare meals. 
      
      The bedroom was luxurious and offered a peaceful retreat after a busy day exploring the city. The 24-hour concierge service was also a great bonus, and the staff went out of their way to make sure I had everything I needed. 
      
      I would highly recommend this apartment to anyone looking for a luxurious getaway on Bespin.',
      cleanliness: 5,
      communication: 4,
      check_in: 5,
      accuracy: 5,
      location: 4,
      value: 4
    )

    bespin_r2 =  Review.create!(
      listing_id: 11,
      reviewer_id: 5,
      body: 'This Cloud City retreat was the perfect place to relax and unwind on Bespin. 
      
      The views were simply stunning, and the apartment itself was beautifully decorated and well-equipped. I especially loved the fully stocked kitchen, which made it easy to prepare meals. The bedroom was comfortable and cozy, and I slept like a dream. The 24-hour concierge service was also top-notch, and the staff were always available to assist with anything I needed. I would definitely stay here again!',
      cleanliness: 3,
      communication: 4,
      check_in: 4,
      accuracy: 3,
      location: 4,
      value: 4
    )

    bespin_r3 = Review.create!(
      listing_id: 11,
      reviewer_id: 6,
      body: 'While the views from this Cloud City apartment were undeniably stunning, I was disappointed with the overall quality of the stay. The living area and bedroom were both quite small and cramped, and the furniture felt outdated. Additionally, the kitchen was poorly equipped and difficult to use. While the 24-hour concierge service was helpful, the staff didn\'t seem particularly invested in ensuring my stay was enjoyable. Overall, I don\'t feel like this apartment was worth the high price tag.',
      cleanliness: 2,
      communication: 2,
      check_in: 2,
      accuracy: 2,
      location: 1,
      value: 1
    )

    jakku_r1 = Review.create!(
      listing_id: 12,
      reviewer_id: 3,
      body: 'I had an incredible experience at this desert retreat on Jakku. The location was simply breathtaking, surrounded by vast sand dunes as far as the eye could see. The property was cozy and well-maintained, with a comfortable bed and a small kitchenette for basic needs. The highlight was definitely the private patio, where I could watch stunning sunsets and enjoy the tranquility of the desert. The host was friendly and provided helpful tips for exploring the area. I would highly recommend this oasis for a unique and peaceful experience on Jakku.',
      cleanliness: 5,
      communication: 4,
      check_in: 5,
      accuracy: 5,
      location: 4,
      value: 4
    )

    jakku_r2 =  Review.create!(
      listing_id: 12,
      reviewer_id: 4,
      body: 'My stay at this desert retreat was nothing short of amazing. The remote location provided the perfect escape from the chaos of the galaxy. The cozy accommodations were well-equipped, and the panoramic views of the desert were simply mesmerizing. I loved spending evenings on the private patio, watching the colors change as the sun set over the sand dunes. The host was attentive and made sure I had everything I needed for a comfortable stay. If you\'re looking for a serene and unforgettable experience on Jakku, this is the place to be.',
      cleanliness: 3,
      communication: 4,
      check_in: 4,
      accuracy: 3,
      location: 4,
      value: 4
    )

    jakku_r3 = Review.create!(
      listing_id: 12,
      reviewer_id: 5,
      body: 'I was disappointed with my stay at this Jakku desert retreat. The remote location made it difficult to access, and the surrounding sand dunes were relentless. The property itself felt dated and lacked proper maintenance. The bed was uncomfortable, and the kitchenette was poorly stocked. 
      
      Additionally, the water supply was limited and the bathroom facilities were subpar. 
      
      Overall, I would not recommend this retreat for a comfortable stay on Jakku.',
      cleanliness: 2,
      communication: 2,
      check_in: 2,
      accuracy: 2,
      location: 1,
      value: 1
    )

    jakku_r4 = Review.create!(
      listing_id: 12,
      reviewer_id: 6,
      body: 'Unfortunately, my experience at this Jakku desert retreat did not live up to my expectations. The location, while offering a unique desert landscape, was challenging to navigate and lacked basic amenities nearby. The property itself was basic and lacked proper insulation, making it uncomfortable during extreme weather conditions. 
      
      The kitchenette was poorly equipped, and the overall cleanliness of the accommodations was subpar. I would suggest looking for alternative options for a more comfortable stay on Jakku.',
      cleanliness: 4,
      communication: 5,
      check_in: 4,
      accuracy: 4,
      location: 5,
      value: 5
    )

    mustafar_r1 = Review.create!(
      listing_id: 13,
      reviewer_id: 7,
      body: 'My stay at this Mustafar retreat was absolutely incredible. The volcanic landscapes were unlike anything I had ever seen before, and the property provided the perfect vantage point to appreciate the natural beauty. The accommodations were comfortable and well-maintained, with a cozy bedroom and a small kitchenette for convenience. The private patio offered breathtaking views of the lava flows, and it was the ideal spot to relax and take in the mesmerizing scenery. The host was attentive and provided helpful tips for exploring Mustafar. I would highly recommend this retreat for an unforgettable experience.',
      cleanliness: 2,
      communication: 3,
      check_in: 2,
      accuracy: 2,
      location: 1,
      value: 2
    )

    mustafar_r2 = Review.create!(
      listing_id: 13,
      reviewer_id: 8,
      body: 'This Mustafar retreat was a true gem amidst the volcanic landscapes. The location was simply stunning, surrounded by dramatic lava flows and the ethereal glow of the landscape. The accommodations were comfortable and well-appointed, providing a cozy atmosphere to relax after a day of exploring. The private patio offered mesmerizing views and the opportunity to witness the raw power of Mustafar. The host was friendly and accommodating, ensuring a memorable stay. If you\'re seeking a unique and awe-inspiring experience, this retreat is an excellent choice.',
      cleanliness: 1,
      communication: 1,
      check_in: 1,
      accuracy: 1,
      location: 1,
      value: 1
    )

    mustafar_r3 = Review.create!(
      listing_id: 13,
      reviewer_id: 9,
      body: 'Unfortunately, my stay at this Mustafar retreat fell short of my expectations. While the volcanic landscapes were intriguing, the location was remote and difficult to access. The property itself lacked proper maintenance, and the accommodations felt dated and in need of updates. The kitchenette was poorly equipped, making it challenging to prepare meals. Additionally, the temperature control in the living area was inadequate, leaving it uncomfortable during the extreme heat of Mustafar. Overall, I would recommend exploring other options for a more comfortable stay on Mustafar.',
      cleanliness: 1,
      communication: 1,
      check_in: 1,
      accuracy: 1,
      location: 1,
      value: 1
    )

    mustafar_r4 = Review.create!(
      listing_id: 13,
      reviewer_id: 1,
      body: 'I was disappointed with my experience at this Mustafar retreat. The volcanic landscapes were indeed unique, but the remote location made it challenging to fully enjoy the surroundings. The accommodations were basic and lacked certain amenities that would have made the stay more comfortable. The bedroom was cramped, and the kitchenette was poorly stocked. Furthermore, the property lacked proper insulation, making it uncomfortable during the intense heat of Mustafar. I would suggest considering alternative options for a more enjoyable stay on this volcanic planet.',
      cleanliness: 4,
      communication: 4,
      check_in: 4,
      accuracy: 4,
      location: 4,
      value: 4
    )

    cantonica_r1 = Review.create!(
      listing_id: 14,
      reviewer_id: 3,
      body: 'My stay at this Cantonica oasis was nothing short of extraordinary. The location in Canto Bight was perfect, surrounded by the vibrant energy and excitement of the city. The accommodation itself was beautifully decorated and furnished with the utmost attention to detail. The fully equipped kitchen allowed me to indulge in some gourmet cooking, and the comfortable bedroom ensured a restful sleep. The private balcony offered stunning views of the city, creating the perfect backdrop for relaxing evenings. The host was attentive and provided excellent recommendations for exploring the local scene. I would highly recommend this oasis for an unforgettable stay on Cantonica.',
      cleanliness: 5,
      communication: 4,
      check_in: 5,
      accuracy: 5,
      location: 4,
      value: 4
    )

    cantonica_r2 =  Review.create!(
      listing_id: 14,
      reviewer_id: 4,
      body: 'Unfortunately, my experience at this Cantonica oasis fell short of my expectations. While the location in Canto Bight was convenient, the listing itself lacked the luxurious ambiance that was advertised. The living areas felt dated and in need of refurbishment, and the furniture was uncomfortable. Additionally, the kitchen was poorly equipped, making it challenging to prepare meals. The noise from the nearby entertainment venues was also disruptive and affected the quality of sleep. Overall, I would recommend exploring other options for a truly luxurious stay on Cantonica.',
      cleanliness: 3,
      communication: 4,
      check_in: 4,
      accuracy: 3,
      location: 4,
      value: 4
    )

    cantonica_r3 = Review.create!(
      listing_id: 14,
      reviewer_id: 5,
      body: 'I was disappointed with my stay at this Cantonica oasis. While the location in Canto Bight was vibrant, the listing itself lacked the level of luxury I expected. The furnishings felt outdated and worn, and the overall cleanliness was subpar. The kitchen was poorly stocked, making it difficult to cook meals. Furthermore, the lack of soundproofing resulted in disturbances from the nearby nightlife, impacting the quality of sleep. Considering the price, I would advise considering alternative accommodations for a truly luxurious experience on Cantonica.',
      cleanliness: 2,
      communication: 2,
      check_in: 2,
      accuracy: 2,
      location: 1,
      value: 1
    )
  
    puts "Done!"
  # end