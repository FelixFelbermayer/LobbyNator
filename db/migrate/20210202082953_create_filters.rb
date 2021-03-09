# frozen_string_literal: true

class CreateFilters < ActiveRecord::Migration[6.0]
  def change
    create_table :filters do |t|
      t.string :name
      t.references :filtercategory
      t.timestamps
    end
  end
end
