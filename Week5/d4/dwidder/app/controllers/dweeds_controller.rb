class DweedsController < ApplicationController
  def index
    @dweeds = Dweed.all
  end

  def show
    @user = User.find(params[:id])

  end

  def new
    @user = User.find(params[:id])
    @dweed = @user.dweeds.new

  end

  def create
    @user = User.find(params[:id])                  # find the user
    @dweed = @user.dweeds.new                       # create new dweed for the user
    @dweed.body = params[:dweed][:body]
    @dweed.save

    redirect_to("/dweeds")
    
  end

  def edit
  end

  def update
  end

  def destroy

    @dweed = Dweed.find(params[:id])
    @dweed.destroy

    redirect_to("/dweeds") 

  end
end
