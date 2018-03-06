class UsersController < ApplicationController
  before_action :authorize, only: [:show, :edit, :update, :destroy]
  
  def index

  end

  def show
    @user = User.find(params[:id])            #showing clicked/or current user page using their id
  end

  def new

    @user = User.new                          #creates an empty object for the form
  
  end

  def create
    
    @user = User.new(user_params)
    if @user.save                             # It also saves the user automatically before spittig out true or false value
      redirect_to root_path
    else 
      redirect_to new_user_path
    end
      # @user.name = params[:user][:name]
      # @user.save
      # redirect_to user_path(@user.id)         ##use aliases here as plain english
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private                                     #any methods declared after this word is going to be private and can only be accessed inside this class
  
  def user_params
    return params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

end
