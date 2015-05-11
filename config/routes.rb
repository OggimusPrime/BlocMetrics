Rails.application.routes.draw do
  devise_for :users
  get 'home/index'

  authenticated :user do
    root to: 'home#index', as: 'home'

    # get '*path' => 'setup#index'

    # resources :domain, only: [:index]
  end

  unauthenticated :user do
    root to: 'home#index'
  end
end
