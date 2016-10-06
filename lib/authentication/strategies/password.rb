# Strategy for Warden
# This strategy is all about password and email pair
module Authentication
  module Strategies
    class Password < ::Warden::Strategies::Base
      def authenticate!
        result = Interactors::User::AuthenticateByPassword.call(authentication_params)
        if result.success?
          success! result.user
        else
          fail_auth errors: result.errors
        end
      end

      # prevent from serializing user into session
      def store?
        false
      end

      private

      def authentication_params
        {email: params['user']['email'], password: params['user']['password']}
      end

      def fail_auth errors: 
        errors_presenter = Presenters::ErrorResponse.new
        errors_presenter.errors += errors
        fail! errors_presenter
      end

    end
  end
end
