# frozen_string_literal: true

class Lobby < ApplicationRecord
  belongs_to :user
  has_many :chatmessages, dependent: :delete_all
  has_and_belongs_to_many :filters
  has_and_belongs_to_many :users, class_name: "User"
end
