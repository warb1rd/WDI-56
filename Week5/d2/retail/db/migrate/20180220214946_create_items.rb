class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.integer :price
      t.integer :stock
      t.boolean :vip
      t.string :image
      t.string :men_or_women

      t.timestamps
    end
  end
end
