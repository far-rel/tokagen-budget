module Api
  class ApiController < ::ApplicationController

    respond_to :json

    def require_no_user
      if signed_in?
        respond_with_errors("errors.controllers.no_user", 403)
        false
      end
    end

    private

    def respond_with_errors(errors, status = nil)
      status ||= 422
      errors_presenter = Presenters::ErrorResponse.new
      errors_presenter.errors = Array(errors)
      errors_presenter.status = status
      respond_to do |f|
        f.json { render json: errors_presenter, status: status, location: ''}
      end
    end
  end
end
