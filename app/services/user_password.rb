# Class manages User's password. Checking if it's valid,
# generate new one if necessary, updates model if needed.
class UserPassword
  attr_reader :password

  def initialize(user, pass = nil)
    @user = user
    @password = pass
    generate if @password.nil?
  end

  def valid?
    return unless @user.encrypted_password
    @bcrypt_password ||= BCrypt::Password.new(@user.encrypted_password)
    @bcrypt_password == salted
  end

  def generate
    @password = SecureRandom.base64
  end

  def sync
    @user.password = @password
    @user.salt = BCrypt::Engine.generate_salt
    @user.encrypted_password = hashed
    @user
  end

  def salted
    BCrypt::Engine.hash_secret(password, @user.salt)
  end

  def hashed
    BCrypt::Password.create(salted)
  end

end
