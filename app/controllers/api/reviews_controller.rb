class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
      @reviews =  Review.where(listing_id: params[:listing_id])
      render :index
  end

  def show
    @review = Review.find_by(id: params[:id])
    render :show
    # render json: {code: "success"}
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages
      # return errors.add(:error, 'You must write a comment')
      # render json: { errors: ['The provided credentials were invalid.'] }
    end
  end

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

  def destroy
    @review = Review.find_by(id: params[:id])
    if @review.reviewer_id == current_user.id
      @review.destroy
      # render json: { message: 'Deleted review'}
      # render :show
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
