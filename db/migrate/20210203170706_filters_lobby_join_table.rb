# frozen_string_literal: true

class FiltersLobbyJoinTable < ActiveRecord::Migration[6.0]
  def change
    create_join_table :filters, :lobbies
  end
end
