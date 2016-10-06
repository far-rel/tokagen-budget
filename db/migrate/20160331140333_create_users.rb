class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :encrypted_password
      t.string :jwt, null: false
      t.string :perishable_token, null: false
      t.string :salt

      t.timestamps null: false
    end
  end
end