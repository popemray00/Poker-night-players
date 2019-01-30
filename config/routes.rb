Rails.application.routes.draw do
  namespace :api do
    resources :players
  end

  namespace :api do
    resources :comments
  end
end
