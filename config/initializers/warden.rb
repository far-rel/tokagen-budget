require 'authentication/strategies/password'
require 'authentication/strategies/token'
# Inserting warden into rack middleware after Flash to have full access to it.
Rails.configuration.middleware.insert_after ActionDispatch::Flash, RailsWarden::Manager do |manager|
  manager.default_strategies :password, :token
  manager.failure_app = ->(env){
    Api::SessionsController.action(:failure).call(env)
  }
end
Warden::Strategies.add(:password, Authentication::Strategies::Password)
Warden::Strategies.add(:token, Authentication::Strategies::Token)

# setup session serialization
class Warden::SessionSerializer
  def serialize(record)
    [record.class.name, record.id]
  end

  def deserialize(keys)
    klass, id = keys
    klass.constantize.find_by id: id
  end
end
