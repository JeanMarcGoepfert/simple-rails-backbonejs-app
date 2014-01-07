class NotesController < ApplicationController
  respond_to :json

  def index
    @books = Note.all
    respond_with(@books)
  end
end