class CreateQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :questions do |t|
      t.string :body
      t.string :asker

      t.timestamps
    end
  end
end
