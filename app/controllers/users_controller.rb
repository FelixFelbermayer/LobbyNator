class UsersController < ApplicationController
    def show
        @user = User.find(params[:id])
        @joinedLobbies = @user.lobbies
    end

    def applyfilters
        current_user.filters = Filter.where(name: params["filter"])
        current_user.save
        redirect_to root_path
    end

end
