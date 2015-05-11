Rails.application.routes.draw do
  devise_for :users
  get 'home/index'

  authenticated :user do
    root to: 'setup#index', as: 'setup'

    # get '*path' => 'setup#index'

    resources :domain, only: [:index]
  end

  # resources :setup, only: [:index]
  # resources :domain, only: [:index]

  unauthenticated :user do
    root to: 'home#index'
  end
end
