module Forms
  module Form
    extend ActiveSupport::Concern

    included do |klass|
      klass.class_eval do
        include Virtus.model
        include ActiveModel::Validations
      end
    end

    def save to:, &block
      sync to: to, &block
      valid? ? to.save : false
    end

    def sync to:
      to.attributes = to_h
      yield(to) if block_given?
      to
    end

    module ClassMethods
      def load from:, with: {}
        new_form = new from.attributes
        new_form.attributes = with.delete_if {|k, v| v.nil? }
        new_form
      end
    end
  end
end
