class ChatmessageController < ApplicationController
  before_action :authenticate_user!  
  before_action :set_lobby

    def create
        @chatmessage = Chatmessage.new
        @chatmessage.text = chatmessage_params
        @chatmessage.user_id = current_user.id
        @chatmessage.lobby_id = @lobby.id
        if @chatmessage.save
            redirect_to @lobby
        else
            puts "error"
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
