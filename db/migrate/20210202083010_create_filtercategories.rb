class CreateFiltercategories < ActiveRecord::Migration[6.0]
  def change
    create_table :filtercategories do |t|
      t.string :name
      t.boolean :singular, :default => false
      t.timestamps
    end
  end
end
