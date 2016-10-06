module Presenters
  class PersonalCost
    include Presentable

    attribute :id, Integer
    attribute :user_id, Integer
    attribute :description, String
    attribute :cost, Decimal
    attribute :date, Date

  end
end
