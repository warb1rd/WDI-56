class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  def current_user
    return @current_user ||= User.find(session[:user_id]) if session[:user_id]   #go into the User database and find the user's id only if theres a session with a user id to begin with.
  end

  def logged_in?
    !!current_user                  #turns current_user to boolean with !!
  end

  def authorize
    redirect_to new_session_path unless logged_in?
  end


end


#if there;s a current user, return. If that hasnt been defined yet. go into the session and find the id and set that to current user. only do that if current session is in progress

#if there's a question mark at the end of the method name, its a boolean