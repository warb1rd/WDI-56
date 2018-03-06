class CreateDweeds < ActiveRecord::Migration[5.1]
  def change
    create_table :dweeds do |t|
      t.string :body
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
