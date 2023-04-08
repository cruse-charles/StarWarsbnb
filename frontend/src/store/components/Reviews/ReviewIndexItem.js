

const ReviewIndexItem = ({review}) => {
    
    return (
        <div>
            <div>{review.reviewerId}:</div>
            <div>{review.body}</div>
            <div>            
            cleanliness: {review.cleanliness}<br/>
            communication: {review.communication}<br/>
            checkIn: {review.checkIn}<br/>
            accuracy: {review.accuracy}<br/>
            location: {review.location}<br/>
            value: {review.value}<br/></div>
        </div>
    )
}

export default ReviewIndexItem