class Reservation < ApplicationRecord
  belongs_to :user_id
  belongs_to :flight_id
end
