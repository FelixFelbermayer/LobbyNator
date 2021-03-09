# frozen_string_literal: true

class LobbyUsersJoinTable < ActiveRecord::Migration[6.0]
  def change
    create_join_table :lobbies, :users
  end
end
