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

  # def search
  #   @listings = Listing.where("lower(country) LIKE ?", "%#{params[:query]}%").or(
  #     Listing.where("lower(city) LIKE ?", "%#{params[:query]}%"))
  #   #this q is a query string, can call it whatever you want, its everying after the ? in the url
  #   render :search
  # end


  def search
    query = params[:query].downcase
    @listings = Listing.where("lower(country) LIKE ?", "%#{query}%").or(
      Listing.where("lower(city) LIKE ?", "%#{query}%"))
    #this q is a query string, can call it whatever you want, its everying after the ? in the url
    render :search
  end





  #I think i need this params for creating
  # def listing_params
  #   params.require(:listing).permit()
  # end


end
