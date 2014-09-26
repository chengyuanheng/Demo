class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :name
      t.string :title
      t.string :description
      t.boolean :status
      t.string :remark
      t.integer :price

      t.timestamps
    end
  end
end
