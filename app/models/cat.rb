# frozen_string_literal: true

class Cat < ApplicationRecord
  has_one_attached :catpic
end
