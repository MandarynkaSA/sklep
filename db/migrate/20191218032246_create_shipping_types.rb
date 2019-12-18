class CreateShippingTypes < ActiveRecord::Migration[6.0]
  def change
    create_table :shipping_types do |t|
      t.string :name
      t.decimal :cost
      t.text :comment_to

      t.timestamps
    end
  end
end
