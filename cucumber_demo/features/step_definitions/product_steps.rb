Given /The description is present/ do
  @product = Product.create(:title=>'i want it', :description=>'this is a description')
end

Then /I should see title "i want it"/ do
  @product.title == 'i want it'
end



Given /The description is blank/ do
  @product = Product.create(:title=>'i do not want it')
end

Then /I should see title "i do not want it"/ do
  @product.title == 'i do not want it'
end

When /I come in (.*) page/ do |create_path|
  visit create_path
  sleep(2)
end

And /I enter (.*) in name input/ do |name|
  fill_in "product_name", :with => name
  sleep(1)
end

And /I enter (.*) in title input/ do |title|
  fill_in "product_title", :with => title
  sleep(1)
end

And /I enter (.*) in description input/ do |description|
  fill_in "product_description", :with => description
  sleep(1)
end

And /I enter (.*) in remark input/ do |remark|
  fill_in "product_remark", :with => remark
  sleep(1)
end

And /I enter (.*) in price input/ do |price|
  fill_in "product_price", :with => price
  sleep(1)
end

And  /I click (.*) button/ do |submit|
  page.find('#'+submit).click
  sleep(1)
end

Then /I should create a new product which name is (.*)/ do |name|
  Product.where(:name=>name).present?
end

