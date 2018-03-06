class User < ApplicationRecord
    has_many :posts
    
    has_secure_password                         #its a validation that authenticates and encrypts password and matches passwords
    validates :name, presence: true             # validates whether the name and email inputs are filled in.
    validates :name, length: { minimum: 2 }

    validates :email, presence: true
    validates :email, uniqueness: true

    validates :password, length: { in: 6..20 }


end
