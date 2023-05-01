class TodolistsController < ApplicationController
  def new
    @list = List.new
  end

  def create
    list = List.new(list_params)

    list.score = Language.get_data(list_params[:body])

    list.save

    if list.image.present?
      tags = Vision.get_image_data(list.image)
      tags.each do |tag|
        unless Tag.search_for(tag).present?
          list.tags.create(name: tag)
        end
      end
    end

    redirect_to todolist_path(list.id)
  end

  def index
    @lists = List.all
  end

  def show
    @list = List.find(params[:id])
  end

  def edit
    @list = List.find(params[:id])
  end

  def update
    list = List.find(params[:id])
    list.score = Language.get_data(list_params[:body])
    list.update(list_params)
    redirect_to todolist_path(list.id)
  end

  def destroy
    list = List.find(params[:id])
    list.destroy
    redirect_to todolists_path
  end

  def search
    @content = params[:content]
    @records = Tag.search_for(@content)
  end

  private

  def list_params
    params.require(:list).permit(:title, :body, :image)
  end

end
