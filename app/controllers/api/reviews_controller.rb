class Api::ReviewsController < ApplicationController

  def index
      @reviews =  Review.where(listing_id: params[:listing_id])
      render :index
  end

  def show
    @review = Review.find_by(id: params[:id])
    render :show
  end

  def create
debugger
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages
    end
  end

  def update
    @review = Review.find_by(id: params[:id])
    
    #i have this if logic below cuz it sould match the current_user just from memory,
    #but do I have access to this really?
    if @review.reviewer_id == current_user.id
      if @review.update(review_params)
        render :show
      else
        render json: @review.errors.full_messages
      end
    end
  end

  def destroy
    if @review.reviewer_id == current_user.id
      @review.destroy
      render json: {error: 'Deleted review'}
    end
  end


  private

  def review_params
    params.require(:review).permit(:id, 
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
