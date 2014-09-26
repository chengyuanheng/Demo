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
  sleep(5)
end

And /I enter (.*) in title input/ do |title|

end

And /I enter (.*) in description input/ do |description|

end

And  /I click create button/ do

end

Then /I should come in product create success page/ do

end

