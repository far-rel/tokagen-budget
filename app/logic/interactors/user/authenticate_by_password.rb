module Interactors
  module User
    class AuthenticateByPassword < Organizer
      before do
        context.user = ::User.where{ users.encrypted_password != nil }.find_by(email: context.email)
      end

      organize Interactors::User::PasswordChecker

    end
  end
end
