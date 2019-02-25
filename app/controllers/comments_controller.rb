class CommentsController < ApplicationController
  before_action :set_comment, only: [:show, :edit, :update, :destroy]

  # GET /comments
  # GET /comments.json
  def index
    @comments = Comment.all
    render json: @comments
  end

  # GET /comments/1
  # GET /comments/1.json
  def show
    render json: @comment
  end

  # GET /comments/new
  def new
    @comment = Comment.new
  end

  # GET /comments/1/edit
  def edit
  end

  # POST /comments
  # POST /comments.json
  def create
    @comment = Comment.new(comment_params)

    
      if @comment.save
       render json: @comment
      else
        render json: {message: @comment.errors}
      end
  end

  # PATCH/PUT /comments/1
  # PATCH/PUT /comments/1.json
  def update
    
      if @comment.update(comment_params)
        render json: @comment
      else
        render json: {message: @comment.errors}
      end
  end

  # DELETE /comments/1
  # DELETE /comments/1.json
  def destroy
    if @comment.destroy
      render status: 204
    else
      render json: { message: "Comment is stuck here forever!!!!"}
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def comment_params
      params.require(:comment).permit(:content)
    end
end
