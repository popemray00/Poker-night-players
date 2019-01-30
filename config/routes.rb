Rails.application.routes.draw do
  resources :comments
  namespace :api do
    resources :players
  end
end
