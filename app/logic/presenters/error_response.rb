# Simple presenter for all kinds of errors to return to client
class Presenters::ErrorResponse < OpenStruct

  def initialize
    super
    self.errors = []
  end

  # because open_struct's to_json gives attributes nested in "table" attribute
  def as_json(*args)
    super.as_json['table']
  end
end
