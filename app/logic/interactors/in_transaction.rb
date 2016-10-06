module Interactors
  # Wraps interactor's execution in transaction
  #
  module InTransaction
    extend ActiveSupport::Concern

    EXCEPTION = ActiveRecord::Rollback

    included do
      around do |interactor|
        ActiveRecord::Base.transaction do
          interactor.call
          fail EXCEPTION if @context.failure?
        end
      end
    end
  end
end

