json.extract! reservation, :id, :seat_id, :user_id_id, :flight_id_id, :created_at, :updated_at
json.url reservation_url(reservation, format: :json)
