require 'rest-client'

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  after_create :set_token

  def generate_token
    loop do
      token = SecureRandom.hex
      break token unless self.class.exists?(token: token)
    end
  end

  def set_token
    token = generate_token
    # TODO: set environment URLs
    response = RestClient.post 'http://localhost:3001/users',
                               user: { token: token }
    update_attribute(:token, token) if response.code == 201
  rescue RestClient::RequestFailed
    # TODO: Regenerate token and/or user flow with error-message
    return false
  end
end
