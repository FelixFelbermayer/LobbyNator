# frozen_string_literal: true

class Chatmessage < ApplicationRecord
  belongs_to :user
  belongs_to :lobby
end
