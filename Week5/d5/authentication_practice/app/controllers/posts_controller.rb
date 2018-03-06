class PostsController < ApplicationController
  
  before_action :authorize_post_view, only: :edit


  def index
  end

  def show
    @post = Post.find(params[:id])
    @user = User.find(@post.user_id)          #find the user of the current post. 
  end

  def new
    # @user = User.find params[:id]
    # @post = @user.posts.new

    @post = current_user.posts.new
  end

  def create
    @post = current_user.posts.new(posts_params)
    @post.save
    redirect_to post_path(@post.id)
    
  end

  def edit
  end

  def update
  end

  def destroy
  end

  def authorize_post_view
    @post = Post.find(params[:id])
    if @post.user_id != current_user.id
      redirect_to root_path
    end
  end

  private                                     #any methods declared after this word is going to be private and can only be accessed inside this class
  
  def posts_params
    return params.require(:post).permit(:title, :body)
  end


end
