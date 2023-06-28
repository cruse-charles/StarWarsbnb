class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  #Pulling all reviews based on listing ID
  def index
      @reviews =  Review.where(listing_id: params[:listing_id])
      render :index
  end

  #Showing specific review based on review ID
  def show
    @review = Review.find_by(id: params[:id])
    render :show
  end

  #Creating a review
  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages
    end
  end

  #Updating a review found by review ID, and checking reviewer/current user ID
  def update
    @review = Review.find_by(id: params[:id])
    
    if @review.reviewer_id == current_user.id
      if @review.update(review_params)
        render :show
      else
        render json: @review.errors.full_messages
      end
    else
      render json: {errors: 'Must be owner of this review to update'}
    end
  end

  #Deleting a review found by ID
  def destroy
    @review = Review.find_by(id: params[:id])
    if @review.reviewer_id == current_user.id
      @review.destroy
    else
      render json: {errors: 'Must be owner of this review to delete'}
    end
  end


  private

  def review_params
    params.require(:review).permit(
      :id, 
      :listing_id, 
      :reviewer_id, 
      :body, 
      :cleanliness, 
      :communication, 
      :check_in, 
      :accuracy, 
      :location, 
      :value
    )
  end


end
