class LobbyController < ApplicationController
  before_action :set_lobby, only: %i[ show edit update destroy]

  rescue_from ActiveRecord::RecordNotFound, with: :handle_record_not_found
  def handle_record_not_found
    # Send it to the view that is specific for Post not found
    redirect_to root_path
  end
    def index
      @lobbies = Lobby.all
    end
    
    def show
    end

    def new
      @lobby = Lobby.new
      @lobby.user = current_user
    end

    def destroy
      @lobby.destroy
      respond_to do |format|
        format.html { redirect_to root_path, notice: "Lobby was successfully destroyed." }
        format.json { head :no_content }
      end
    end
    
    def edit
    end

    def create
      puts @lobby
      @lobby = Lobby.new(lobby_params)
      @lobby.user = current_user
      @lobby.date = lobby_params["date"].to_date
      @lobby.users.push(current_user)
      respond_to do |format|
        if @lobby.save
          format.html { redirect_to @lobby, notice: "Cat was successfully created." }
          format.json { render :show, status: :created, location: @lobby }
        else
          #format.html { render :edit, status: :unprocessable_entity }
          #format.json { render json: @lobby.errors, status: :unprocessable_entity }
        end
      end
    end

    private
    # Use callbacks to share common setup or constraints between actions.
    def set_lobby
      @lobby = Lobby.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def lobby_params
      params.require(:lobby).permit(:name, :description, :user, :date)
    end

end