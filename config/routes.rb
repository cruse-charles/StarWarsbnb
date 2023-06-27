Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    get 'listings/search', to: "listings#search"

    resources :users, only: [:create, :show] do 
      resources :reservations, only:[:index]
    end

    resource :session, only: [:show, :create, :destroy]

    resources :listings, only: [:index, :show] do 
      resources :reviews, only: [:index]
    end

    resources :reviews, only: [:create, :destroy, :update, :show]
    
    resources :reservations, only: [:create, :destroy, :update, :show]
  end
  
  get '*path', to: "static_pages#frontend_index"
end
