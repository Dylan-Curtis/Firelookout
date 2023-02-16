class UsersController < ApplicationController
    # before_action :find_user, only: [:login]
    skip_before_action :authorized_user, only: [:create]

    def create
       user = User.create!(user_params)
       sessions[:user_id] = user.id
       render json: user, status: :created
    end      
    
    def show       
        render json: @user, status: :ok
    end    
   
        private 
    def user_params
        params.permit(:password, :name, :email)
    end

    def find_user
        @user = User.find(params[:id])
    end
end
