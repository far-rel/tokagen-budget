module Interactors
  module User
    class AuthenticateByToken < Organizer

      organize Interactors::User::JwtFinder,
               Interactors::JwtChecker
    end
  end
end
