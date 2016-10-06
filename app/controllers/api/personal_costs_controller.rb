module Api
  class PersonalCostsController < ApiController
    before_action do
      authenticate! :token
    end

    def create
      context = Interactors::PersonalCost::Create.call(
        current_user: current_user,
        personal_cost: personal_cost_params
      )
      if context.success?
        respond_with Presenters::PersonalCost.load(context.personal_cost), location: '/'
      else
        respond_with_errors context.errors
      end
    end

    def personal_cost_params
      params.require(:personal_cost).permit(:cost, :description, :date)
    end

  end
end
