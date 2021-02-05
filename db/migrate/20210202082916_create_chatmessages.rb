class CreateChatmessages < ActiveRecord::Migration[6.0]
  def change
    create_table :chatmessages do |t|
      t.string :text
      t.references :lobby, foreign_key: true
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
