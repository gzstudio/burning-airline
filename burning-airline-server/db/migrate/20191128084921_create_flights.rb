class CreateFlights < ActiveRecord::Migration[6.0]
  def change
    create_table :flights do |t|
      t.integer :flight_number
      t.date :date
      t.string :origin
      t.string :destination
      t.references :airplane, null: false, foreign_key: true

      t.timestamps
    end
  end
end
