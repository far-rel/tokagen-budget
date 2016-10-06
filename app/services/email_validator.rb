class EmailValidator
  EMAIL_NAME_REGEX  = '[A-Z0-9_\.%\+\-\']+'
  DOMAIN_HEAD_REGEX = '(?:[A-Z0-9\-]+\.)+'
  DOMAIN_TLD_REGEX  = '(?:[A-Z]{2,13})'
  REGEXP = /\A#{EMAIL_NAME_REGEX}@#{DOMAIN_HEAD_REGEX}#{DOMAIN_TLD_REGEX}\z/i

  def self.validate_email(email)
    !!(email =~ REGEXP)
  end
end
