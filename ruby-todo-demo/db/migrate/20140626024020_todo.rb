class Todo < ActiveRecord::Migration
  def change
    create_table :todo do |t|
      t.string :context
      t.boolean :is_active, :default => true

      t.timestamps
    end
  end
end
