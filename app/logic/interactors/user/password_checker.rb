module Interactors
  module User
    class PasswordChecker < Base
      def call
        user_password = UserPassword.new(context.user, context.password)
        if user_password.valid?
          context.user.update(
              jwt: JwtCreator.call(expired_at: Time.now + 2.days),
              perishable_token: JwtCreator.call(expired_at: 1.second)
          )

        else
          fail_context('interactors.user.password_checker.invalid_password')
        end
      end

      def validate
        fail_context('interactors.user.password_checker.no_user') unless context.user
        fail_context('interactors.user.password_checker.no_password') unless context.password
      end
    end
  end
end
