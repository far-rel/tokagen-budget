Rails.application.routes.draw do

  namespace :api do
    post :login, to: 'sessions#create'
    post :logout, to: 'sessions#logout'
    get :session, to: 'sessions#show'
    resources :personal_costs, only: [:index, :create]
  end

  root to: 'home#index'
  get '*path', to: 'home#index'

end
