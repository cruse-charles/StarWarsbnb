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
      title: 'Example Listing',
      lister_id: 1,
      description: 'Description Example',
      address: '123 Example Address',
      city: 'Example City',
      country: 'Example Country',
      latitude: '10.000000',
      longitude: '10.000000',
      price: '100'
    )

    Listing.create!(
      title: 'Example2 Listing',
      lister_id: 2,
      description: 'Description2 Example',
      address: '456 Example Address',
      city: 'Example2 City',
      country: 'Example2 Country',
      latitude: '20.000000',
      longitude: '20.000000',
      price: '200'
    )

    Listing.create!(
      title: 'Example3 Listing',
      lister_id: 3,
      description: 'Description3 Example',
      address: '789 Example Address',
      city: 'Example3 City',
      country: 'Example3 Country',
      latitude: '30.000000',
      longitude: '30.000000',
      price: '300'
    )

    Listing.create!(
      title: 'Example4 Listing',
      lister_id: 4,
      description: 'Description4 Example',
      address: '000 Example Address',
      city: 'Example4 City',
      country: 'Example4 Country',
      latitude: '40.000000',
      longitude: '40.000000',
      price: '400'
    )
  
    puts "Done!"
  end