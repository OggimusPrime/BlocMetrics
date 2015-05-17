class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :set_user
  layout :another_by_method

  private

  def set_user
    cookies[:token] = current_user.token if current_user
  end

  def another_by_method
    if current_user.nil?
      'application.html.erb'
    else
      'member_layout.html.erb'
    end
  end
end
