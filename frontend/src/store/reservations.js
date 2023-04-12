import csrfFetch from "./csrf";


export const RECEIVE_RESERVATIONS = 'reservations/RECEIVE_RESERVATIONS'
export const RECEIVE_RESERVATION = 'reservations/RECEIVE_RESERVATION'
export const REMOVE_RESERVATION = 'reservations/REMOVE_RESERVATION'

const receiveReservations = (reservations) => ({
    type: RECEIVE_RESERVATIONS,
    reservations
})

const receiveReservation = (reservation) => ({
    type: RECEIVE_RESERVATION,
    reservation
})

const removeReservation = (reservationId) => ({
    type: REMOVE_RESERVATION,
    reservationId
})

export const getUserReservations = (userId) => state => {
    const reservations = state.reservations ? Object.values(state.reservations) : []
    const filteredReservations = reservations.filter((reservation) => (reservation.reserverId == userId))
    return filteredReservations
}

export const getReservation = (reservationId) => state => {
    if(state.reservations){
        return state.reservations[reservationId]
    }else{
        return null
    }
}

export const fetchReservations = (userId) => async(dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}/reservations`)
// debugger
    if(response.ok) {
        const data = await response.json()
        dispatch(receiveReservations(data))
    }
}

export const fetchReservation = (reservationId) => async(dispatch) => {
    const response = await csrfFetch(`/api/reservations/${reservationId}`)

    if(response.ok){
        const data = await response.json()
        dispatch(receiveReservation(data))
    }
}

export const createReservation = (reservation) => async(dispatch) => {
// debugger
    const response = await csrfFetch(`/api/reservations`, {
        method: "POST",
        body: JSON.stringify(reservation),
        headers: {'Content-Type': 'application/json'}
    })
debugger
    const data = await response.json()
    dispatch(receiveReservation(data))
debugger
}

export const updateReservation = (reservation) => async(dispatch) => {
    const response = await csrfFetch(`/api/reservations/${reservation.id}`, {
        method: "PATCH",
        body: JSON.stringify(reservation),
        headers: {'Content-Type': 'application/json'}
    })
    const data = await response.json()
    dispatch(receiveReservation(data))
}

export const deleteReservation = (reservationId) => async(dispatch) => {
    const response = await csrfFetch(`/api/reservations/${reservationId}`, {
        method: "DELETE"
    })

    if(response.ok){
        dispatch(removeReservation(reservationId))
    }

}

const reservationReducer = (state ={}, action) => {
// debugger
    switch(action.type) {
        case RECEIVE_RESERVATIONS:
            return {... state, ...action.reservations}
        case RECEIVE_RESERVATION:
            return {...state, [action.reservation.id]: action.reservation}
        case REMOVE_RESERVATION:
            const newState = {...state}
            delete newState[action.reservationId]
            return newState
        default:
            return state
    }
}

export default reservationReducer