module Presenters
  class User
    include Presentable

    attribute :id, Integer
    attribute :email, String
    attribute :first_name, String
    attribute :last_name, String
  end
end
