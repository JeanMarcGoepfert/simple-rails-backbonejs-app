class NotesController < ApplicationController
  respond_to :json, :html

  def index
    @books = Note.all
    respond_with(@books)
  end
end