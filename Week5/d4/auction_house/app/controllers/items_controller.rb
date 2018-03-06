class ItemsController < ApplicationController

  def index
    @items = Item.all
  end

  def show

    @items = Item.all
    @item = Item.find(params[:id])
  end

  def new
    @category = Category.find(params[:id])
    @item = @category.items.new  
  end

  def create
    @category = Category.find(params[:id])                  

    @item = @category.items.new 
    @item.name = params[:item][:name]
    @item.artist = params[:item][:artist]
    
    @item.save

    redirect_to("/items") 
  end

  def edit
  end

  def update
  end

  def destroy
  end

end
