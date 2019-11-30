class Flight < ApplicationRecord
  skip_before_action :verify_authenticity_token
  belongs_to :airplane
  has_many :reservations
end
