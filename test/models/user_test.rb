# frozen_string_literal: true

require "test_helper"

class UserTest < ActiveSupport::TestCase
  test "create User" do
    user = User.create(
      username: "Tester",
      email: "test@lobby.com",
      password: "test123"
    )
    assert user.valid?
  end
end
