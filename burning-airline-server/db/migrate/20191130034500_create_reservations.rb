class CreateReservations < ActiveRecord::Migration[6.0]
  def change
    create_table :reservations do |t|
      t.string :seat_id
      t.references :user_id, null: false, foreign_key: true
      t.references :flight_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
