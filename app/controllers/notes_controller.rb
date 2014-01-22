class NotesController < ApplicationController
  respond_to :json

  def index
    @notes = Note.all
    respond_with(@notes)
  end

  def create
    @note = Note.new(note_params)
    respond_to do |format|
      format.json { render json: @note }
    end
    @note.save
  end

  def destroy
    @note = Note.find(params[:id])
    @note.destroy
  end

  def update
    @note = Note.find(params[:id])
    @note.update_attributes(note_params)
    respond_with(@note)
  end

  def note_params
    params.require(:note).permit(:title, :details)
  end
end
