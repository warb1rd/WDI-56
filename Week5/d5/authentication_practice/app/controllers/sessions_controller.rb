class SessionsController < ApplicationController
  def new                                               #To show the form

  end

  def create                                            #creates cookie once user hits submit
  #check to see if user exists
  @user = User.find_by_email(params[:email])

    if @user and @user.authenticate(params[:password])
      #generate a cookie with their id in it
      session[:user_id] = @user.id                      #sessions is like a hash like params. Sets cookie using user id
      #take them to their profile
      redirect_to user_path(@user.id)
    else
      #Try again
      redirect_to new_session_path
    end
  end

  def destroy
    session[:user_id] = nil                             #clears cookies and sets id to nil.
    redirect_to root_path
  end
end
