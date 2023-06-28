class Api::ListingsController < ApplicationController
  #Show all listings
  def index
    @listings = Listing.all
    render :index
  end

  #Show a specific listing, found by using id in params
  def show
    @listing = Listing.find_by(id: params[:id])
    
    if @listing
      render :show
    else
      render json: {errors: 'This listing does not exist'}
    end
  end

  #Query for listings based on search input
  def search
    query = params[:query].downcase
    @listings = Listing.where("lower(country) LIKE ?", "%#{query}%").or(
      Listing.where("lower(city) LIKE ?", "%#{query}%"))
    #q is a query string, can be called anything, it is everying after the ? in the url
    render :search
  end




end
