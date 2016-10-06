module Api
  # Controllers which takes care of logging in and logging out
  class SessionsController < Api::ApiController
    before_action :require_no_user, only: [:create]

    def create
      authenticate! :password
      if signed_in?
        respond_with Presenters::UserWithToken.load(current_user), status: 200, location: ''
      else
        respond_with_errors(warden.message.errors, warden.message.status)
      end
    end

    def show
      authenticate! :token
      respond_with Presenters::UserWithToken.load(current_user), status: 200, location: ''
    end

    def failure
      respond_with_errors warden.message.errors, warden.message.status || 422
    end

    def logout
      actual_user = User.find_by jwt: request.headers['HTTP-X-JWT']
      if actual_user
        result = Interactors::User::Logout.call(user: actual_user, warden: warden)
        if result.success?
          respond_with({}, location: '')
        else
          respond_with_errors(result.errors)
        end
      else
        head 204
      end
    end
  end
end
