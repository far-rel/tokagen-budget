module Forms
  class PersonalCost
    include Form

    attribute :user_id, Integer
    attribute :description, String
    attribute :cost, Decimal
    attribute :date, Date

    validates :user_id, :description, :cost, :date, presence: true
    validates :cost, numericality: true

  end
end
