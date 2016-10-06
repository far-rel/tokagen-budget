class JwtCreator
  def self.call(expired_at: nil)
    expired_at ||= Time.now + 2.days
    JWT.encode({ exp: expired_at.to_i,
                 random_key: "#{Time.now.to_i}#{SecureRandom.base64(5)}" },
               ENV['SECRET_API_KEY'])
  end
end
