class CreateUsers < ActiveRecord::Migration[5.1]
  def change    #creates tables 
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :username

      t.timestamps
    end
  end
end
 