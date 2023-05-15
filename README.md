# Welcome to StarWarsbnb

## Introduction

StarWarsbnb is a clone of the Airbnb desktop website. Airbnb is a website which allows users to select from a listing of homes to rent for a selected amount of time. A use can create a reservation for a listing, write a rewview, create wishlists, search/filter through listings, and use a map to see listing locations. The sleek and fairly complex logic to create the website led me to to undergo creating this clone. Technologies implemented:
* Languages: Javascript, Ruby, HTML, CSS
* Frontend: React-Redux
* Database: PostgreSQL
* hosting: Render.com
* Asset Storage: AWS Simple Cloud Storage (S3)

A live link can be accessed here: https://starwarsbnb.onrender.com/

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

    const ReviewIndexItem = ({review}) => {
    
    const {listingId} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector(state => state.session.user)
    
    function handleDelete(e) {
        e.preventDefault()
        dispatch(deleteReview(review.id))
        history.push(`/listings/${listingId}`)
    }

    const checkUser = () => {
        if(!user) return false
        if(user.id === review.reviewerId) {
            return true
        } else {
            return false
        }
    }

    return (
        <div className='review-card'>
            <div className='reviewer-name'>
                <h2>{review.reviewerName}</h2>
            </div>
            <div>{review.body}</div><br></br>
            
            {checkUser() && (<div id='edit-remove-container'>
                <Link id='edit' to={`/listings/${listingId}/reviews/${review.id}/edit`}>
                    Edit your review
                </Link>
                <Link id='remove' onClick={handleDelete}>
                    Delete your review
                </Link>
            </div>)}
            
        </div>
    )
    }



### Search

Users will be able to click in the search bar located at the top of the page and search by title of listings. When hitting the search icon, a list of matching listings will appear that the user will be able to click to lead to that listing's show page.

![ezgif com-crop](https://user-images.githubusercontent.com/121701827/232138217-0e95634d-1c61-439f-86bc-4a0e4ff18737.gif)


    const SearchBar = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const [searchText, setSearchText] = useState("")

    useEffect(() => {

    }, [])

    async function handleSearch(e) {
        e.preventDefault()
        const query = e.target.value;
        await setSearchText(query)
        dispatch(fetchSearchResults(query))
    }

    function handleSearchSubmit(e) {
        e.preventDefault()
        if (searchText.length > 0) {
            history.push(`/search?listings=${searchText}`)
        }
    }

    return (
        <>
            <input id='searchbar' type='text' onChange={handleSearch} placeholder='Anywhere | Anyweek | Add Guests'></input>
            <button id='search-button' onClick={handleSearchSubmit}><i className="fa-solid fa-magnifying-glass fa-lg"></i></button>
        </>
    )

    }



StarWarsbnb was created within a 14 day timeframe. Thank you for checking out my project!
