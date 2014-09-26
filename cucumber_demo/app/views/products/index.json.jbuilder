json.array!(@products) do |product|
  json.extract! product, :id, :name, :title, :description, :status, :remark, :price
  json.url product_url(product, format: :json)
end
