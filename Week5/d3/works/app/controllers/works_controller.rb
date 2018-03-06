class WorksController < ApplicationController
  def index
    @quotes = Quote.all
  end

  def show
    @quote = Quote.find(params[:id])
  end

  def new
    @quote = Quote.new
  end

  def create

    @quote = Quote.new
    @quote.body = params[:quote][:body]
    @quote.author = params[:quote][:author]
    @quote.save                                         
  
    redirect_to("/works/#{@quote.id}")  

  end

  def edit

    @quote = Quote.find(params[:id])
    @quote.body = params[:quote][:body]
    @quote.author = params[:quote][:author]
    @quote.save                                         
  
    redirect_to("/works/#{@quote.id}") 

  end

  def update

    @quote = Quote.find(params[:id])
    @quote.body = params[:quote][:body]
    @quote.author = params[:quote][:author]
    @quote.save                                         
  
    redirect_to("/works/#{@quote.id}") 

  end

  def destroy

    @quote = Quote.find(params[:id])
    @quote.destroy

    redirect_to("/works")     

  end
end
