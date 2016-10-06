module Interactors
  module User
    class ChangePassword < Base

      def call
        change_password_form = Forms::ChangePassword.new(
            password: context.password,
            password_confirmation: context.password_confirmation
        )
        valid = change_password_form.save to: context.user do |user|
          UserPassword.new(user, change_password_form.password).sync
          user.jwt = JwtCreator.call
          user.perishable_token = JwtCreator.call
          user.tmp_password = false
        end
        fail_context(change_password_form.errors) unless valid
      end

      def validate
        fail_context('interactors.user.change_password.no_user') && return unless context.user
        fail_context('interactors.user.change_password.no_password') && return unless context.password && context.password_confirmation
      end

    end
  end
end
