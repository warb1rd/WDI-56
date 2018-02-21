class PagesController < ApplicationController
  
  $user_logged_in = false
  @user = $user_logged_in

  $inventory_array = [{id: 1000, name: "T-Shirt", description: "A shirt with short sleeves.", price: 12, stock: 52, vip: false, category: "tops", image: "https://target.scene7.com/is/image/Target/53294273?wid=225&hei=225&qlt=80&fmt=pjpeg", men_or_women: "women"}, 
    {id: 1001, name: "Button Down", description: "A shirt with long sleeves and buttons.", price: 32, stock: 4, vip: true, category: "tops", image: "https://target.scene7.com/is/image/Target/53154813?wid=225&hei=225&qlt=80&fmt=pjpeg", men_or_women: "women"}, 
    {id: 1002, name: "Tank Top", description: "A shirt with no sleeves.", price: 11, stock: 10, vip: false, category: "tops", image: "https://target.scene7.com/is/image/Target/52512718?wid=225&hei=225&qlt=80&fmt=pjpeg", men_or_women: "women"}, 
    {id: 1003, name: "Straight-Leg Jeans", description: "Jeans that have straight legs.", price: 41, stock: 9, vip: false, category: "bottoms", image: "https://target.scene7.com/is/image/Target/50630840?wid=328&hei=328&qlt=80&fmt=pjpeg", men_or_women: "women"}, 
    {id: 1005, name: "Joggers", description: "Pants that I don't think you're actually supposed to jog in.", price: 32, stock: 0, vip: true, category: "bottoms", image: "https://target.scene7.com/is/image/Target/51657225?wid=328&hei=328&qlt=80&fmt=pjpeg", men_or_women: "women"}, 
    {id: 1008, name: "Fancy Shorts", description: "Shorts that are fancy.", price: 19, stock: 6, vip: true, category: "bottoms", image: "https://target.scene7.com/is/image/Target/50763672?wid=328&hei=328&qlt=80&fmt=pjpeg", men_or_women: "women"}, 
    {id: 1009, name: "Sneakers", description: "Sometimes known as 'tennis shoes'", price: 62, stock: 7, vip: true, category: "shoes", image: "https://target.scene7.com/is/image/Target/52809861?wid=328&hei=328&qlt=80&fmt=pjpeg", men_or_women: "women"}, 
    {id: 1010, name: "Sandals", description: "Shoes to wear in the sand.", price: 15, stock: 0, vip: false, category: "shoes", image: "https://target.scene7.com/is/image/Target/52903154?wid=328&hei=328&qlt=80&fmt=pjpeg", men_or_women: "women"}, 
    {id: 1011, name: "Flats", description: "Shoes without a high heel.", price: 24, stock: 80, vip: false, category: "shoes", image: "https://target.scene7.com/is/image/Target/52822593?wid=328&hei=328&qlt=80&fmt=pjpeg", men_or_women: "women"}, 
    {id: 1012, name: "Button Down", description: "A shirt with buttons.", price: 36, stock: 5, vip: false, category: "tops", image: "https://target.scene7.com/is/image/Target/52449894?wid=328&hei=328&qlt=80&fmt=pjpeg", men_or_women: "men"}, 
    {id: 1013, name: "Polo", description: "A shirt that probably has a small animal embroidered on the left chest.", price: 22, stock: 4, vip: true, category: "tops", image: "https://target.scene7.com/is/image/Target/52515130?wid=328&hei=328&qlt=80&fmt=pjpeg", men_or_women: "men"}, 
    {id: 1014, name: "T-Shirt", description: "A shirt with short sleeves.", price: 15, stock: 0, vip: false, category: "tops", image: "https://target.scene7.com/is/image/Target/52698932?wid=328&hei=328&qlt=80&fmt=pjpeg", men_or_women: "men"}, 
    {id: 1015, name: "Cargo Pants", description: "Pants with pockets for all of your cargo.", price: 40, stock: 8, vip: false, category: "bottoms", image: "https://target.scene7.com/is/image/Target/52515864?wid=328&hei=328&qlt=80&fmt=pjpeg", men_or_women: "men"}, 
    {id: 1016, name: "Chinos", description: "Not jeans.", price: 33, stock: 9, vip: false, category: "bottoms", image: "https://target.scene7.com/is/image/Target/52510916?wid=328&hei=328&qlt=80&fmt=pjpeg", men_or_women: "men"}, 
    {id: 1017, name: "Jeans", description: "Denim pants", price: 48, stock: 7, vip: true, category: "bottoms", image: "https://target.scene7.com/is/image/Target/AA_RTW_OctWk3_catnav_mens_jeans_athleticstraight101827-170928_1506629391648?wid=328&hei=328&qlt=80&fmt=pjpeg", men_or_women: "men"}, 
    {id: 1018, name: "Boots", description: "These are made for walking.", price: 96, stock: 17, vip: true, category: "shoes", image: "https://target.scene7.com/is/image/Target/52846955?wid=328&hei=328&qlt=80&fmt=pjpeg", men_or_women: "men"}, 
    {id: 1019, name: "Sneakers", description: "Shoes for sneaking.", price: 79, stock: 34, vip: false, category: "shoes", image: "https://target.scene7.com/is/image/Target/52687116?wid=328&hei=328&qlt=80&fmt=pjpeg", men_or_women: "men"}, 
    {id: 1020, name: "Oxfords", description: "Fancy shoes.", price: 91, stock: 4, vip: false, category: "shoes", image: "https://target.scene7.com/is/image/Target/52474761?wid=328&hei=328&qlt=80&fmt=pjpeg", men_or_women: "men"}
  ]
  def home
    @title = "We Dress Impecably 56"
  end

  def log_in 
    @user 
  end

  def sign_up
    @user 
  end

  def customer_profile
    @user 
  end

  def women
    @inventory = $inventory_array
  end

  def men
    @inventory = $inventory_array
  end

  def vip
    @user 
    @inventory = $inventory_array
  end

  def edit_profile
    @user 
  end

  def contact
    @store_hours = [
      {day: "Monday", open: "10:00am - ", close: "9:00pm"}, 
      {day: "Tuesday", open: "10:00am - ", close: "9:00pm"}, 
      {day: "Wednesday", open: "10:00am - ", close: "9:00pm"}, 
      {day: "Thursday", open: "10:00am - ", close: "9:00pm"}, 
      {day: "Friday", open: "10:00am - ", close: "9:00pm"}, 
      {day: "Saturday", open: "11:00am - ", close: "9:00pm"}, 
      {day: "Sunday", open: "11:00am - ", close: "6:00pm"}
    ]
  end

end
