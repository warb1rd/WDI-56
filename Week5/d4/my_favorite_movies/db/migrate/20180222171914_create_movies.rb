class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :image
      t.string :actors
      t.string :tagline

      t.timestamps
    end
  end
end
