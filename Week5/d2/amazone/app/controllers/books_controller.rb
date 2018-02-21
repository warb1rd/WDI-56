class BooksController < ApplicationController
  def index
    @books = Book.all #.shuffle can be added here to show the items randomly each time page is shuffled
  end

  def show
    @book = Book.find(params[:id])

  end
end
