module Interactors
  class JwtChecker < Base
    def call
      token = context.token
      begin
        fail ArgumentError if token.blank?
        JWT.decode(token, ENV['SECRET_API_KEY'])
        context.status = 200 # ok
      rescue ::JWT::ExpiredSignature
        context.status = 401 # unauthorize
        fail_context :jwt_expired
      rescue ::JWT::DecodeError, ArgumentError
        context.status = 401
        fail_context :jwt_invalid
      end
    end
  end
end
