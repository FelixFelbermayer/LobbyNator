# frozen_string_literal: true

class UsersController < ApplicationController
  before_action :authenticate_user!
  def show
    @user = User.find(params[:id])
    @joined_lobbies = @user.lobbies
  end

  def applyfilters
    current_user.filters = Filter.where(name: params["filter"])
    current_user.save
    redirect_to root_path
  end
end
