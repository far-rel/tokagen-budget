# This is a token-based-authentication strategy for warden
# Token is in format of JWT
module Authentication
  module Strategies
    class Token < ::Warden::Strategies::Base

      def authenticate!
        result = Interactors::User::AuthenticateByToken.call(
          token: request.headers['HTTP-X-JWT'] || params[:jwt]
        )
        if result.success?
          success! result.user
        else
          fail_auth(result.status)
        end
      end

      # prevent from serializing user into session
      def store?
        false
      end

      private

      def fail_auth status
        status ||= 401
        errors_presenter = Presenters::ErrorResponse.new
        errors_presenter.errors << "authentication.token.invalid"
        errors_presenter.status = status
        fail! errors_presenter
      end
    end
  end
end
