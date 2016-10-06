module Presenters
  module Presentable
    extend ActiveSupport::Concern

    included do |klass|
      klass.class_eval do
        include Virtus.model
      end
    end

    attr_accessor :model

    def prepare; end

    module ClassMethods

      def load(model)
        presenter = new(model.respond_to?(:attributes) ? model.attributes : model)
        presenter.model = model
        presenter.prepare
        presenter
      end

      def from_collection(collection)
        collection.map do |single|
          load(single)
        end
      end

    end
  end
end
