# 🤖 AI Return Agent

Projeto de estudo desenvolvido em **Node.js** para aprender os conceitos básicos de **AI Agents e Tool Calling**.

O objetivo é criar um agente de IA responsável por auxiliar clientes em processos de devolução de pedidos.

## 🎯 Objetivo

Entender na prática como um LLM pode utilizar funções disponíveis no backend através de **Tool Calling**.

O fluxo básico implementado é:

```text
Usuário
   ↓
LLM
   ↓
Seleciona uma Tool
   ↓
Backend executa a função
   ↓
Resultado retorna para o LLM
   ↓
LLM gera a resposta final
```

## 🧠 Exemplo

Usuário:

```text
Posso devolver o pedido 456?
```

O LLM identifica que precisa verificar a elegibilidade do pedido e solicita:

```text
checkReturnEligibility({ orderId: 456 })
```

O backend executa a regra de negócio e retorna:

```json
{
  "eligible": false,
  "reason": "Return period expired"
}
```

O resultado é enviado novamente ao LLM, que gera uma resposta natural para o usuário.

## 🛠 Tecnologias

- Node.js
- Express
- OpenAI SDK
- OpenRouter
- Tool / Function Calling
- dotenv

## 📁 Estrutura

```text
src/
├── agents/
│   └── return.agent.js
├── config/
│   └── ai.js
├── data/
│   └── order.js
├── routes/
│   └── chat.routes.js
├── services/
│   └── order.service.js
├── tools/
│   ├── definitions.js
│   └── handlers.js
├── app.js
└── server.js
```

### Responsabilidades

- `agents/` — orquestra a comunicação com o LLM.
- `config/` — configuração do provedor de IA.
- `data/` — dados mockados para estudo.
- `routes/` — endpoints da API.
- `services/` — regras de negócio.
- `tools/definitions.js` — ferramentas disponibilizadas ao LLM.
- `tools/handlers.js` — conecta as Tool Calls às funções do backend.

## 🚀 Executando o projeto

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env`:

```env
OPENROUTER_API_KEY=your_openrouter_api_key
```

Execute:

```bash
node src/server.js
```

A API ficará disponível em:

```text
http://localhost:3000
```

## 💬 Testando

Faça uma requisição:

```http
POST /chat
Content-Type: application/json
```

Body:

```json
{
  "message": "Posso devolver o pedido 456?"
}
```

O agente analisará a mensagem, selecionará a Tool adequada e utilizará o resultado para responder ao usuário.

## 📚 Conceitos estudados

- Large Language Models (LLMs)
- AI Agents
- Tool Calling / Function Calling
- JSON Schema para definição de Tools
- Execução de funções pelo backend
- Separação entre LLM e regras de negócio
- Orquestração LLM → Tool → Backend → LLM

## 🔜 Próximos passos

- Implementar criação de devoluções
- Adicionar múltiplas Tool Calls
- Implementar Agent Loop
- Manter contexto da conversa
- Adicionar confirmação antes de ações
- Implementar persistência em banco de dados

## 📌 Status

Projeto em desenvolvimento para fins de estudo sobre **AI Agents e automação com LLMs**.
