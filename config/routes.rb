Rails.application.routes.draw do
  #Routes that are called from fetch requests, sending requests to appropriate controllers

  #Defaults responses to JSON format
  namespace :api, defaults: { format: :json } do
    #Route to handle get requests for searches to 'search' action in listings controller
    get 'listings/search', to: "listings#search"

    #Route to create and show a user, and a route to reservations index for a specific user
    resources :users, only: [:create, :show] do 
      resources :reservations, only:[:index]
    end

    #Route to show, create, and destroy a session
    resource :session, only: [:show, :create, :destroy]

    #Route to index, show listings, and a route to review index for a listing
    resources :listings, only: [:index, :show] do 
      resources :reviews, only: [:index]
    end

    #Route to create, destroy, update, and show a review
    resources :reviews, only: [:create, :destroy, :update, :show]
    
    #Route to create, destroy, update, and show a reservation
    resources :reservations, only: [:create, :destroy, :update, :show]
  end
  
  get '*path', to: "static_pages#frontend_index"
end
