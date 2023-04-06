

const ReviewIndexItem = ({review}) => {
    
    return (
        <div>
            <div>{review.reviewerId}:</div>
            <div>{review.body}</div>
        </div>
    )
}

export default ReviewIndexItem