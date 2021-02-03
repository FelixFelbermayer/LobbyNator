class LobbyController < ApplicationController
  before_action :set_lobby, only: %i[ show edit update destroy]

  rescue_from ActiveRecord::RecordNotFound, with: :handle_record_not_found
  def handle_record_not_found
    # Send it to the view that is specific for Post not found
    redirect_to root_path
  end
    def index

      if user_signed_in?
        @lobbies = Lobby.all.select { |lobby| current_user.filters.all? { |f| lobby.filters.include?(f)}}
        @categories = Filtercategory.all
      else
        redirect_to new_user_session_path
      end

    end
    
    def show
      @lobbies = Lobby.all
    end

    def new
      @lobby = Lobby.new
      @categories = Filtercategory.all()
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

    def join
      @lobby = Lobby.find(join_params)
      @lobby.users.push(current_user)
      redirect_to root_path, notice: "Lobby was successfully joined."    
    end

    def leave
      @lobby = Lobby.find(join_params)
      @lobby.users.delete(current_user)
      redirect_to root_path, notice: "Lobby was successfully destroyed."
    end

    def create
      @filter = Filter.where(name: params["filter"])
      @lobby = Lobby.new(lobby_params)
      @lobby.user = current_user
      @lobby.time = Time.parse(lobby_params["time"]).strftime('%H:%M')
      @lobby.users.push(current_user)
      @lobby.filters << @filter

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
      params.require(:lobby).permit(:name, :description, :user, :date, :time, :filter)
    end

    def join_params
      params.require(:lobby)
    end

end
