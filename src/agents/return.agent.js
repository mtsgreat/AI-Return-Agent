const openai = require("../config/ia");
const tools = require("../tools/definitions");
const executeTool = require("../tools/handlers");

async function runReturnAgent(userMessage) {

  const messages = [
    {
      role: "system",
      content: `
        Você é um agente responsável por devoluções.

        Utilize as ferramentas disponíveis quando precisar
        consultar pedidos ou realizar devoluções.

        Nunca invente informações sobre pedidos.
      `
    },
    {
      role: "user",
      content: userMessage
    }
  ];

  const completion = await openai.chat.completions.create({
    model: "openrouter/free",
    messages,
    tools
  });

  const response = completion.choices[0].message;

  messages.push(response);

  if (response.tool_calls) {

    for (const toolCall of response.tool_calls) {

      const toolName = toolCall.function.name;

      const args = JSON.parse(
        toolCall.function.arguments
      );

      const result = await executeTool(
        toolName,
        args
      );

      messages.push({
        role: "tool",
        tool_call_id: toolCall.id,
        content: JSON.stringify(result)
      });
    }

    const finalCompletion =
      await openai.chat.completions.create({
        model: "openrouter/free",
        messages,
        tools
      });

    return finalCompletion.choices[0].message;
  }

  return response;
}

module.exports = runReturnAgent;