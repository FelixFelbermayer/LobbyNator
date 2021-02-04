class LobbyController < ApplicationController
  before_action :authenticate_user!
  before_action :set_lobby, only: %i[ show edit update destroy]

  rescue_from ActiveRecord::RecordNotFound, with: :handle_record_not_found
  def handle_record_not_found
    # Send it to the view that is specific for Post not found
    redirect_to root_path
  end
    def index
      if user_signed_in?
        singular = current_user.filters.select { |f| f.filtercategory.singular}
        multiple = current_user.filters.select { |f| f.filtercategory.singular == false }
        if singular.size == 0
          @lobbies = Lobby.all
        else
          @lobbies = Lobby.all.select { 
            |lobby| singular.any? { |g| lobby.filters.include?(g) }
          }
        end
        @lobbies= @lobbies.select {
          |lobby| multiple.all? { |f| lobby.filters.include?(f) }
        }
        @categories = Filtercategory.all
        @games = Filter.all.select{
          |fil| @lobbies.any? {|g| g.filters.include?(fil)}
        }
        puts "asdf"
        puts @games
        puts "asdf"
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
      @categories = Filtercategory.all()
    end

    def join
      @lobby = Lobby.find(join_params)
      @lobby.users.push(current_user)
      redirect_to root_path, notice: "You have successfully joined the lobby!"    
    end

    def leave
      @lobby = Lobby.find(join_params)
      @lobby.users.delete(current_user)
      if @lobby.users.size == 0
        @lobby.destroy
        
      elsif current_user == @lobby.user
          @lobby.user = @lobby.users.first
      end
      @lobby.save
      redirect_to root_path, notice: "You have successfully exited the lobby!"
    end

    # PATCH/PUT /cats/1 or /cats/1.json
    def update
      respond_to do |format|
        if @lobby.update(lobby_params)
          format.html { redirect_to @lobby, notice: "Lobby was successfully updated." }
          format.json { render :show, status: :ok, location: @lobby }
        else
          format.html { render :edit, status: :unprocessable_entity }
          format.json { render json: @lobby.errors, status: :unprocessable_entity }
        end
      end
    end

    def create
      @filter = Filter.where(name: params["filter"])
      @lobby = Lobby.new(lobby_params)
      @lobby.user = current_user
      @lobby.time = Time.parse(lobby_params["time"]).strftime('%H:%M')
      @lobby.users.push(current_user)
      @lobby.filters << @filter

      puts @filter.select{|filter| filter.filtercategory.singular}.size

      if @filter.select{|filter| filter.filtercategory.singular}.size < 1
        redirect_to new_lobby_path, notice: "You have to select at least one game!"
        return
      end

      respond_to do |format|
        if @lobby.save
          format.html { redirect_to @lobby, notice: "You have successfully created the lobby!" }
          format.json { render :show, status: :created, location: @lobby }
        else
          format.html { render :edit, status: :unprocessable_entity }
          format.json { render json: @lobby.errors, status: :unprocessable_entity }
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
      params.require(:lobby).permit(:name, :description, :user, :date, :time, :filter, :maxplayers)
    end

    def join_params
      params.require(:lobby)
    end

end
