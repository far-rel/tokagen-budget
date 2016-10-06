u = User.new(
    first_name: 'Paul',
    last_name: 'Tarczykowski',
    email: 'paul@tokagen.com',
    jwt: JwtCreator.call(expired_at: 1.second.ago),
    perishable_token: JwtCreator.call(expired_at: 1.second.ago)
)

UserPassword.new(u, '1qaz@').sync.save
