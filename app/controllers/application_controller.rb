class ApplicationController < ActionController::Base
  include Clearance::Controller

  helper_method :current_cart

  def current_cart
    if session[:order_id]
      Order.find(session[:order_id])
    else
      Order.new
    end
  end

  def current_cart_or_create
    c = current_cart
    if c.new_record?
      c.save
      session[:order_id] = c.id
    end
    c
  end
end
