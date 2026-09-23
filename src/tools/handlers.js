const {
  getOrder,
  checkReturnEligibility,
  createReturn
} = require("../services/order.service");

const toolHandlers = {
  getOrder: (args) => getOrder(args.orderId),

  checkReturnEligibility: (args) =>
    checkReturnEligibility(args.orderId),

  createReturn: (args) =>
    createReturn(args.orderId)
};

async function executeTool(toolName, args) {
  const handler = toolHandlers[toolName];

  if (!handler) {
    throw new Error(`Unknown tool: ${toolName}`);
  }

  return await handler(args);
}

module.exports = executeTool;