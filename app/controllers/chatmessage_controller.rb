# frozen_string_literal: true

class ChatmessageController < ApplicationController
  before_action :authenticate_user!
  before_action :set_lobby

  def create
    if !@lobby.users.include?(current_user)
      redirect_to root_path, notice: "You are not part of this lobby"
    else
      @chatmessage = Chatmessage.new(
        text: chatmessage_params,
        user_id: current_user.id,
        lobby_id: @lobby.id
      )
      if @chatmessage.save
        redirect_to @lobby
      else
        redirect_to @lobby, notice: "Sumsing wong"
      end
    end
  end

  private

  def chatmessage_params
    params.require(:text)
  end

  def set_lobby
    @lobby = Lobby.find(params[:lobby_id])
  end
end
