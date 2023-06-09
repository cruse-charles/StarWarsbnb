class User < ApplicationRecord
  has_secure_password

  validates :username, 
  uniqueness: true, 
  length: { in: 3..30 }, 
  format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }

  validates :email, 
  uniqueness: true, 
  length: { in: 3..255 }, 
  format: { with: URI::MailTo::EMAIL_REGEXP }
  
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true

  before_validation :ensure_session_token

  has_many :listings,
    primary_key: :id,
    foreign_key: :lister_id,
    class_name: :Listing,
    dependent: :destroy

  has_many :reviews,
    primary_key: :id,
    foreign_key: :reviewer_id,
    class_name: :Review,
    dependent: :destroy

  has_one_attached :photo

  has_many :reservations,
    primary_key: :id,
    foreign_key: :reserver_id,
    class_name: :Reservation,
    dependent: :destroy


  def self.find_by_credentials(credential, password)
    field = credential =~ URI::MailTo::EMAIL_REGEXP ? :email : :username
    user = User.find_by(field => credential)
    user&.authenticate(password)
  end


  def reset_session_token!
    self.update!(session_token: generate_unique_session_token)
    self.session_token
  end






  private
  
  def generate_unique_session_token
    token = SecureRandom::urlsafe_base64
    while User.exists?(session_token: token)
        token = SecureRandom::urlsafe_base64
    end
    token
  end
  
  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end



end

