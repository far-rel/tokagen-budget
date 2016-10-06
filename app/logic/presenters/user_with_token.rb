module Presenters
  # Presenters which gives jwt beside basic user's fields
  class UserWithToken < Presenters::User
    attribute :jwt, String
  end
end
