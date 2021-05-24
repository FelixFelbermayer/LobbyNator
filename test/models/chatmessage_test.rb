# frozen_string_literal: true

require "test_helper"

class ChatmessageTest < ActiveSupport::TestCase
  setup do
    @msg = chatmessages(:message_1)
  end

  test "can not create chatmessage because it has no user" do
    c = chatmessages(:message_1)
    assert_not c.valid?
  end
  test "create chatmessage" do
    c = chatmessages(:message_1)
    c.user = users(:user_1)
    assert c.valid?
  end

  test "delete chatmessage" do
  end
end
