class Api::ListingsController < ApplicationController
  def index
    @listings = Listing.all
    render :index
  end

  def show
    @listing = Listing.find_by(id: params[:id])
    
    if @listing
      render :show
    else
      render json: {errors: 'This listing does not exist'}
    end
  end



  #I think i need this params for creating
  # def listing_params
  #   params.require(:listing).permit()
  # end


end
