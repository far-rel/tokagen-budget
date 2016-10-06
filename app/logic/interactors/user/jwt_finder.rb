module Interactors
  module User
    class JwtFinder < Base
      def call
        context.user = ::User.where{ users.encrypted_password != nil }.find_by(jwt: context.token)
        unless context.user
          context.status = 401
          fail_context :jwt_invalid
        end
      end

      def validate
        fail_context :jwt_invalid unless context.token
      end
    end
  end
end
