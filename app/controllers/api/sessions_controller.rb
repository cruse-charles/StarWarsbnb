class Api::SessionsController < ApplicationController

  #Showing current user
  def show
    if current_user
      @user = current_user
      render '/api/users/show'
    else
      render json: { user: nil }
    end
  end

  #Creating a session based on given credentials, logging user in
  def create
    @user = User.find_by_credentials(params[:credential], params[:password])

    if @user
      login!(@user)
      render '/api/users/show'
    else
      render json: { errors: ['The provided credentials were invalid.'] }, 
        status: :unauthorized
    end
  end

  #Logging out a user, ending session
  def destroy
    logout!
    render json: { message: 'success' }
  end
end
