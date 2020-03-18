require 'faker'
class PokemonsController < ApplicationController

    def index
        @pokemons = Pokemon.all
        render json: @pokemons
    end

    def create
        @pokemon = Pokemon.create(
            nickname: Faker::Name.first_name,
            species: Faker::Games::Pokemon.name,
            trainer_id: params[:trainer_id]
            )
        render json: @pokemon
    end

    def destroy
        Pokemon.find(params[:id]).destroy
    end

end
