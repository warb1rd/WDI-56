class CreateKittens < ActiveRecord::Migration[5.1]
  def change
    create_table :kittens do |t|
      t.string :name
      t.date :birthdate
      t.string :image_url

      t.timestamps
    end
  end
end
