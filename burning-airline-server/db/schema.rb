# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_30_034500) do

  create_table "airplanes", force: :cascade do |t|
    t.text "name"
    t.integer "rows"
    t.integer "cols"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "flights", force: :cascade do |t|
    t.integer "flight_number"
    t.date "date"
    t.string "origin"
    t.string "destination"
    t.integer "airplane_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["airplane_id"], name: "index_flights_on_airplane_id"
  end

  create_table "reservations", force: :cascade do |t|
    t.string "seat_id"
    t.integer "user_id_id", null: false
    t.integer "flight_id_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["flight_id_id"], name: "index_reservations_on_flight_id_id"
    t.index ["user_id_id"], name: "index_reservations_on_user_id_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  add_foreign_key "flights", "airplanes"
  add_foreign_key "reservations", "flight_ids"
  add_foreign_key "reservations", "user_ids"
end
