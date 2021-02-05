class FilterUsersJoinTable < ActiveRecord::Migration[6.0]
  def change
    create_join_table :filters, :users
  end
end
