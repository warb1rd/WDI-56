class CreateAnswers < ActiveRecord::Migration[5.1]
  def change
    create_table :answers do |t|
      t.string :body
      t.string :answerer
      t.belongs_to :question, foreign_key: true

      t.timestamps
    end
  end
end
