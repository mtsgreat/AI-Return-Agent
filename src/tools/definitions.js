const tools = [
  {
    type: "function",
    function: {
      name: "getOrder",
      description: "Busca informações de um pedido pelo ID.",
      parameters: {
        type: "object",
        properties: {
          orderId: {
            type: "number",
            description: "ID do pedido"
          }
        },
        required: ["orderId"]
      }
    }
  },

  {
    type: "function",
    function: {
      name: "checkReturnEligibility",
      description: "Verifica se um pedido pode ser devolvido.",
      parameters: {
        type: "object",
        properties: {
          orderId: {
            type: "number",
            description: "ID do pedido"
          }
        },
        required: ["orderId"]
      }
    }
  },

  {
    type: "function",
    function: {
      name: "createReturn",
      description: "Cria uma solicitação de devolução para um pedido.",
      parameters: {
        type: "object",
        properties: {
          orderId: {
            type: "number",
            description: "ID do pedido"
          }
        },
        required: ["orderId"]
      }
    }
  }
];

module.exports = tools;