class Product < ActiveRecord::Base
  attr_accessible :name, :title, :description, :status, :remark, :price
end
