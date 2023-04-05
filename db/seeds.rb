# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
    Listing.destroy_all
    Review.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
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
    Listing.create!(
      title: 'Amazing NYC Apartment',
      lister_id: 15,
      description: 'This apartment in center NYC gives access everywhere',
      address: '123 Main St',
      city: 'New York City',
      country: 'USA',
      latitude: '10.000000',
      longitude: '10.000000',
      price: '100'
    )

    Listing.create!(
      title: 'Lovely Cottage in Woods',
      lister_id: 16,
      description: 'Come to our cottage for a relaxed and nature-tuned vacation',
      address: 'N/A',
      city: 'N/A',
      country: 'Sweden',
      latitude: '20.000000',
      longitude: '20.000000',
      price: '200'
    )

    Listing.create!(
      title: 'Mansion',
      lister_id: 17,
      description: 'Visit this waterfront mansion!',
      address: '8240 Rich Ave',
      city: 'Los Angeles',
      country: 'USA',
      latitude: '30.000000',
      longitude: '30.000000',
      price: '300'
    )

    Listing.create!(
      title: 'Cheap and Convenient and Coz',
      lister_id: 18,
      description: 'Come to our apartment in central Berlin',
      address: '93 Schule Strasse',
      city: 'Berlin',
      country: 'Germany',
      latitude: '40.000000',
      longitude: '40.000000',
      price: '400'
    )

    Listing.create!(
      title: 'Desert Hut',
      lister_id: 19,
      description: 'Cool in the day and warm at night',
      address: 'N/A',
      city: 'Outside of Phoenix',
      country: 'USA',
      latitude: '40.000000',
      longitude: '40.000000',
      price: '400'
    )

    puts 'Creating Reviews...'

    Review.create!(
      listing_id: 8,
      reviewer_id: 15,
      body: 'I thought this place was excellent',
      cleanliness: 5,
      communication: 4,
      check_in: 5,
      accuracy: 5,
      location: 4,
      value: 4
    )

    Review.create!(
      listing_id: 8,
      reviewer_id: 16,
      body: 'Was not happy with the water',
      cleanliness: 1,
      communication: 4,
      check_in: 3,
      accuracy: 3,
      location: 4,
      value: 4
    )

    Review.create!(
      listing_id: 9,
      reviewer_id: 15,
      body: 'I loved it here!',
      cleanliness: 5,
      communication: 4,
      check_in: 5,
      accuracy: 5,
      location: 4,
      value: 4
    )

    Review.create!(
      listing_id: 8,
      reviewer_id: 17,
      body: 'I had a great time!',
      cleanliness: 5,
      communication: 4,
      check_in: 5,
      accuracy: 5,
      location: 4,
      value: 4
    )

    Review.create!(
      listing_id: 10,
      reviewer_id: 18,
      body: 'Don not visit!',
      cleanliness: 1,
      communication: 1,
      check_in: 1,
      accuracy: 1,
      location: 1,
      value: 1
    )
  
    puts "Done!"
  end