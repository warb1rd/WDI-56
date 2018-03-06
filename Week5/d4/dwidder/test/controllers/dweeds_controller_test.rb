require 'test_helper'

class DweedsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get dweeds_index_url
    assert_response :success
  end

  test "should get show" do
    get dweeds_show_url
    assert_response :success
  end

  test "should get new" do
    get dweeds_new_url
    assert_response :success
  end

  test "should get create" do
    get dweeds_create_url
    assert_response :success
  end

  test "should get edit" do
    get dweeds_edit_url
    assert_response :success
  end

  test "should get update" do
    get dweeds_update_url
    assert_response :success
  end

  test "should get destroy" do
    get dweeds_destroy_url
    assert_response :success
  end

end
