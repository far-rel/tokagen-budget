module Interactors
  class Base
    include Interactor

    def self.inherited(klass)
      klass.class_eval do
        around do |interactor|
          Rails.logger.info("  Processing by #{klass}")
          with_valid_context do
            interactor.call
          end
        end

        before do
          context.errors ||= []
          validate if self.respond_to?(:validate)
        end
      end
    end

    def params
      context.params
    end

    def with_valid_context(&block)
      yield unless context.failure?
    end

    def fail_context(*reasons)
      context.errors.push(*reasons)
      context.fail!
    end
  end
end
