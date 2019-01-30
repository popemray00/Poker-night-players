

class Api::PlayersController < ApplicationController 

    before_action :search_player, only: [:show, :update, :destroy]

    def index
        @players = Player.all
        render json: @players, status: 200
    end

    def create
        @player = Player.new(player_params)
        if player.save
            render json: player, status: 201
        else
            render json: {message: player.errors }, status: 400
        end
    end

    def show
        render json: @player
    end

    def update
        if @player.update(player_params)
            render json: @player
        else
            render json: {message: player.errors }, status: 400
        end
    end

    def destroy
        if @player.destroy
            render status: 204
        else
            render json: { message: "This player can't be removed" }, status: 400
        end
    end

    private

    def search_player
        @player = Player.find_by(id: params{:id})
    end

    def player_params
        params.require(:player).permit(:name, :age, :img_url, :fav_hand)
    end


end