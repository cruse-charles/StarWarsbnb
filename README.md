# Welcome to StarWarsbnb

## Introduction

StarWarsbnb is a clone of the Airbnb desktop website. Airbnb is a website which allows users to select from a listing of homes to rent for a selected amount of time. A use can create a reservation for a listing, write a rewview, create wishlists, search/filter through listings, and use a map to see listing locations. The sleek and fairly complex logic to create the website led me to to undergo creating this clone. Technologies implemented:
* Languages: Javascript, Ruby, HTML, CSS
* Frontend: React-Redux
* Database: PostgreSQL
* hosting: Render.com
* Asset Storage: AWS Simple Cloud Storage (S3)

## MVPs

### Reservations

A user will be able to create a reservation from the calendar set on the listing's show page. This calendar will have functionality that prevents a user from creating a reservation for a listing that has overlapping dates with another reservation from the same or a different user. Users will be allowed to edit or delete their reservation as well.

![calendar](https://user-images.githubusercontent.com/121701827/232132868-d3fad782-76a2-4d2d-91de-22f9b0465c27.PNG)

    def no_overlap?

        reservations = 
            Reservation.where('listing_id = ?', self.listing_id).and((
            Reservation.where('start_date <= ? AND ? <= end_date', self.start_date, self.start_date).or(
            Reservation.where('start_date <= ? AND ? <= end_date', self.end_date, self.end_date).or(
            Reservation.where('? < start_date AND ? > end_date', self.start_date, self.end_date)))))
        
        if reservations.length != 0
            return errors.add(:error, '- Date range taken')
        else
            return true
        end
    end



### Reviews

A user will be able to create a review for a listing on the listing's show page. The review will be added to the page without having to refresh the page. User's will not be able to edit/remove the reviews of other users. When deleting a review, it will also be deleted without having to refresh the page.

![reviews](https://user-images.githubusercontent.com/121701827/232134038-52dbe3de-cefa-4c65-b6a3-274cd9bb8030.PNG)





### Search

Users will be able to click in the search bar located at the top of the page and search by title of listings. When hitting the search icon, a list of matching listings will appear that the user will be able to click to lead to that listing's show page.




StarWarsbnb was created within a 14 day timeframe. Thank you for checking out my project!
