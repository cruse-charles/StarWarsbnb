class Api::ReservationsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]
    
    #retrieving all reservations based on user ID
    def index
        @reservations = Reservation.where(reserver_id: params[:user_id])
        render :index
    end

    #Retrieving a specific reservation based on user's id
    def show
        @reservation = Reservation.find_by(id: params[:id])
        if @reservation.reserver_id == current_user.id
            render :show
        else
            render json: {errors: 'Must be logged in as this user'}
        end
    end

    #Creating a reservation
    def create
        @reservation = Reservation.new(reservation_params)

        if @reservation.save
            render :show
        else
            render json: @reservation.errors.full_messages
        end
    end

    #Allows for updating of a reservating, finding by resservation ID and checking current user's ID with reserver's ID
    def update
        @reservation = Reservation.find_by(id: params[:id])

        if @reservation.reserver_id == current_user.id
            if@reservation.update(reservation_params)
                render :show
            else
                render json: @reservation.errors.full_messages
            end
        else
            render json: {errors: 'Must be owner of this reservation to update'}
        end
    end

    #Deletes a reservation by finding its ID and checking for reserver/current user ID
    def destroy
        @reservation = Reservation.find_by(id: params[:id])
        if @reservation.reserver_id == current_user.id
            @reservation.destroy
        else
            render json: {errors: 'Must be owner of this reservation to delete reservation'}
        end
    end


    def reservation_params
        params.require(:reservation).permit(
            :id, 
            :reserver_id, 
            :listing_id, 
            :start_date, 
            :end_date, 
            :num_guests
        )
    end

end
