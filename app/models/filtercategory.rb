# frozen_string_literal: true

class Filtercategory < ApplicationRecord
  validates :name, presence: true
  validates :name, uniqueness: true
  has_many :filters
end
