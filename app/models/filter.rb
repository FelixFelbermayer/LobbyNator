# frozen_string_literal: true

class Filter < ApplicationRecord
  has_and_belongs_to_many :lobbies
  belongs_to :filtercategory
  has_one_attached :filter_image
end
