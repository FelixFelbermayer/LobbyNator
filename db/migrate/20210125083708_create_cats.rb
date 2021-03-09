# frozen_string_literal: true

class CreateCats < ActiveRecord::Migration[6.0]
  def change
    create_table :cats do |t|
      t.string :name

      t.timestamps
    end
  end
end
