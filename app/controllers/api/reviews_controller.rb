class Api::ReviewsController < ApplicationController

    def index
        @reviews =  Review.where(listing_id: params[:listing_id])
        render :index
    end









  #I think i need this params for creating
  # def review_params
  #   params.require(:review).permit()
  # end


end
