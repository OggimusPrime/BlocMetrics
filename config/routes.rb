Rails.application.routes.draw do

  devise_for :users
  get 'home/index'

  resources :domain, only: [:index]

  root to: 'home#index'
end
