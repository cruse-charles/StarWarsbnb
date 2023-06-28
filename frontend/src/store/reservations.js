import csrfFetch from "./csrf";

//Action types to receive/remove reservations
export const RECEIVE_RESERVATIONS = 'reservations/RECEIVE_RESERVATIONS';
export const RECEIVE_RESERVATION = 'reservations/RECEIVE_RESERVATION';
export const REMOVE_RESERVATION = 'reservations/REMOVE_RESERVATION';

//Action Creator, returns action object for reservations
const receiveReservations = (reservations) => ({
    type: RECEIVE_RESERVATIONS,
    reservations
});

//Action Creator, returns action object for a reservation
const receiveReservation = (reservation) => ({
    type: RECEIVE_RESERVATION,
    reservation
});

//Action Creator, returns action object for removing a reservation
const removeReservation = (reservationId) => ({
    type: REMOVE_RESERVATION,
    reservationId
});

//Selector from state to return array of reservations
export const getUserReservations = (userId) => state => {
    const reservations = state.reservations ? Object.values(state.reservations) : [];
    const filteredReservations = reservations.filter((reservation) => (reservation.reserverId == userId));
    return filteredReservations;
};

//Selector from state to return array of a reservation
export const getReservation = (reservationId) => state => {
    if(state.reservations){
        return state.reservations[reservationId];
    }else{
        return null;
    }
};

//Thunk action creator to fetch reservations from API and add to our state/store
export const fetchReservations = (userId) => async(dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}/reservations`);
    if(response.ok) {
        const data = await response.json();
        dispatch(receiveReservations(data));
    }
}

//Thunk action creator to fetch a reservation from API and add to our state/store
export const fetchReservation = (reservationId) => async(dispatch) => {
    const response = await csrfFetch(`/api/reservations/${reservationId}`);

    if(response.ok){
        const data = await response.json();
        dispatch(receiveReservation(data));
    }
};

//Thunk action creator to create a reservation from API and add to our state/store
export const createReservation = (reservation) => async(dispatch) => {
    const response = await csrfFetch(`/api/reservations`, {
        method: "POST",
        body: JSON.stringify(reservation),
        headers: {'Content-Type': 'application/json'}
    });
    const data = await response.json();
    if(typeof(data[0]) === 'string'){
        throw data
    } else {
        dispatch(receiveReservation(data));
    }
};

//Thunk action creator to edit a reservation from API and add to our state/store
export const updateReservation = (reservation) => async(dispatch) => {
    const response = await csrfFetch(`/api/reservations/${reservation.id}`, {
        method: "PATCH",
        body: JSON.stringify(reservation),
        headers: {'Content-Type': 'application/json'}
    });
    const data = await response.json();
    dispatch(receiveReservation(data));
}

//Thunk action creator to delete a reservation from API and remove from state/store
export const deleteReservation = (reservationId) => async(dispatch) => {
    const response = await csrfFetch(`/api/reservations/${reservationId}`, {
        method: "DELETE"
    });

    if(response.ok){
        dispatch(removeReservation(reservationId));
    }

}

//Automatically called by Redux whenever an action is dispatched for obtaining listings or listing
const reservationReducer = (state ={}, action) => {
    switch(action.type) {
        case RECEIVE_RESERVATIONS:
            return {... state, ...action.reservations};
        case RECEIVE_RESERVATION:
            return {...state, [action.reservation.id]: action.reservation};
        case REMOVE_RESERVATION:
            const newState = {...state};
            delete newState[action.reservationId];
            return newState;
        default:
            return state;
    }
};

export default reservationReducer