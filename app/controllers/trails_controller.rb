class TrailsController < ApplicationController
    before_action :find_trail, only: [:show, :average_rating, :num_ratings]
  
    def index
      trails = Trail.all
      render json: trails
    end
  
    def show
      reviews_with_username = @trail.reviews.map { |review| { name: review.user.name, condition: review.condition, rating: review.rating, body: review.body, date: review.date} }
      render json: { trail: @trail, reviews: reviews_with_username }
    end
    
  
    def create
      trail = Trail.create!(trail_params)
      render json: trail, status: :created
    end
 
    def num_ratings
      num_reviews = @trail.reviews.count
      render json: { trail: @trail, num_ratings: num_reviews }
    end
  
    private
  
    def trail_params
      params.permit(:name, :elevation_gain, :length, :body, :image, :map)
    end
  
    def find_trail
      @trail = Trail.find(params[:id])
    end

   def average_rating
  average = calculate_average_rating(trail)
  render json: { trail: @trail, average_rating: average }
    end
  
    def calculate_average_rating(trail)
      reviews = @trail.reviews
      if reviews.empty?
        0
      else
        total_rating = reviews.sum(&:rating)
        total_rating.to_f / reviews.count
      end
    end
  end
  