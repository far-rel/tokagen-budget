module Interactors
  module User
    class Logout < Base
      def call
        context.user.update jwt: JwtCreator.call
        context.warden.logout
      end

      def validate
        fail_context('interactors.logout.fail') unless context.user && context.warden
      end
    end
  end
end
