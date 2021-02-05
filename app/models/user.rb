class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
    validates :email, uniqueness: true

    has_many :chatmessages
    has_and_belongs_to_many :lobbies, class_name: 'Lobby'
    has_and_belongs_to_many :filters, class_name: 'Filter'
    has_and_belongs_to_many :users, class_name: 'User'

end
