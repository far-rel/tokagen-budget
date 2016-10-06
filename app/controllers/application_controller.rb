class ApplicationController < ActionController::Base
  protect_from_forgery with: :reset_session

  helper_method :warden, :signed_in?, :current_user

  def warden
    request.env['warden']
  end

  def current_user
    user = warden.user
    session.delete "warden.user.default.key"
    warden.user
  end

  def signed_in?
    !current_user.nil?
  end

  def authenticate!(*args)
    warden.authenticate! *args
  end
end
