module Interactors
  module PersonalCost
    class Create < Base

      def call
        personal_cost_form = Forms::PersonalCost.new context.personal_cost.merge(user_id: context.current_user.id)
        context.personal_cost = ::PersonalCost.new
        unless personal_cost_form.save to: context.personal_cost
          fail_context personal_cost_form.errors
        end
      end

    end
  end
end
