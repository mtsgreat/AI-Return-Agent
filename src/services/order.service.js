const { orders, returns } = require("../data/order");

function getOrder(orderId) {
  return orders.find(order => order.id === orderId);
}

function checkReturnEligibility(orderId) {
  const order = getOrder(orderId);

  if (!order) {
    return {
      eligible: false,
      reason: "Order not found"
    };
  }

  if (order.daysSinceDelivery > 30) {
    return {
      eligible: false,
      reason: "Return period expired"
    };
  }

  return {
    eligible: true,
    reason: "Order is within the 30-day return period"
  };
}

function createReturn(orderId) {
  const eligibility = checkReturnEligibility(orderId);

  if (!eligibility.eligible) {
    return {
      success: false,
      reason: eligibility.reason
    };
  }

  const newReturn = {
    id: returns.length + 1,
    orderId,
    status: "requested"
  };

  returns.push(newReturn);

  return {
    success: true,
    return: newReturn
  };
}

module.exports = {
  getOrder,
  checkReturnEligibility,
  createReturn
};