class Review < ApplicationRecord
  belongs_to :trail 
  belongs_to :user, dependent: :destroy
  validates :rating, presence: true
  validates :user_id, uniqueness: { scope: :trail_id, message: "you have already left a review for this trail." }
end
