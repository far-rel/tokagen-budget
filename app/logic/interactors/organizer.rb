module Interactors
  class Organizer < Base
    include Interactor::Organizer

    def self.chain(*args)
      self.tap do |interactor|
        interactor.organize(*args)
      end
    end
  end
end
