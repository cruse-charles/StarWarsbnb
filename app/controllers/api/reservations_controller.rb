class Api::ReservationsController < ApplicationController
    before_action :require_logged_in, only: [:create, :update, :destroy]
    
    def index
        #i think i call it user_id in some other place, does it matter what I call this in the params here?
        @reservations = Reservation.where(reserver_id: params[:user_id])
        render :index
    end

    def show
        @reservation = Reservation.find_by(id: params[:id])
        if @reservation.reserver_id == current_user.id
            render :show
        else
            render json: {errors: 'Must be logged in as this user'}
        end
    end

    def create
        @reservation = Reservation.new(reservation_params)

        if @reservation.save
            render :show
        else
            render json: @reservation.errors.full_messages
        end
    end

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

    def destroy
        @reservation = Reservation.find_by(id: params[:id])
        if @reservation.reserver_id == current_user.id
            @reservation.destroy
        else
            render json: {errors: 'Must be owner of this reservation to delete reservation'}
        end
    end


    def reservation_params
        # params.require(:reservation).permit(:reserver_id, :listing_id, :start_date, :end_date, :num_guests)
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
