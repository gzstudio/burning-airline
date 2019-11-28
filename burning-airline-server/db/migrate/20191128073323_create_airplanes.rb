class CreateAirplanes < ActiveRecord::Migration[6.0]
  def change
    create_table :airplanes do |t|
      t.text :name
      t.integer :rows
      t.integer :cols

      t.timestamps
    end
  end
end
