# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Airplane.create(name: '747', rows: 24, cols: 4)
Airplane.create(name: '777', rows: 48, cols: 6)
Flight.create(flight_number: '
    48', date:'2019-11-30', origin: 'SYD', destination: 'BKK', airplane_id:1)
User.create(name: 'Pitt', email:'pitt.rasananda@gmail.com', password_digest:'justdoit')