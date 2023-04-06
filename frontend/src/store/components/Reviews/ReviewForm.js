import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"


const ReviewForm = () => {
    const dispatch = useDispatch()
    const {listingId} = useParams()
    // let review = useSelector(getReview)


}


export default ReviewForm