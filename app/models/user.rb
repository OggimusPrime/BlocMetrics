class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  before_create :generate_access_token

  def generate_access_token
    loop do
      self.token = SecureRandom.hex
      break token unless self.class.exists?(token: token)
    end
    
  end
end
