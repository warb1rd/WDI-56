require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get pages_home_url
    assert_response :success
  end

  test "should get log_in" do
    get pages_log_in_url
    assert_response :success
  end

  test "should get sign_up" do
    get pages_sign_up_url
    assert_response :success
  end

  test "should get customer_profile" do
    get pages_customer_profile_url
    assert_response :success
  end

  test "should get men" do
    get pages_men_url
    assert_response :success
  end

  test "should get women" do
    get pages_women_url
    assert_response :success
  end

  test "should get vip" do
    get pages_vip_url
    assert_response :success
  end

  test "should get edit_profile" do
    get pages_edit_profile_url
    assert_response :success
  end

  test "should get contact" do
    get pages_contact_url
    assert_response :success
  end

end
