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

  def set_env
    if Rails.env.development?
      blocmetrics_api = 'http://localhost:3001'
    else
      blocmetrics_api = 'https://ryanhaase-api-simplemetrics.herokuapp.com'
    end
    blocmetrics_api
  end

  def set_token
    token = generate_token

    blocmetrics_api = set_env

    response = RestClient.post "#{blocmetrics_api}/users",
                               user: { token: token }
    update_attribute(:token, token) if response.code == 201
  rescue RestClient::RequestFailed
    # TODO: Regenerate token and/or user flow with error-message
    return false
  end
end
