class CreatePersonalCosts < ActiveRecord::Migration
  def change
    create_table :personal_costs do |t|
      t.references :user, index: true, foreign_key: true
      t.datetime :date
      t.string :description
      t.decimal :cost, precision: 10, scale: 2

      t.timestamps null: false
    end
  end
end
