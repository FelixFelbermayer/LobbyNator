# frozen_string_literal: true

class CreateLobbies < ActiveRecord::Migration[6.0]
  def change
    create_table :lobbies do |t|
      t.string :name
      t.string :description
      t.references :user, foreign_key: true
      t.date :date, null: true
      t.string :time, null: true
      t.integer :maxplayers
      t.timestamps
    end
  end
end
