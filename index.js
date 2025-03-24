require("dotenv").config();
const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

app.post("/generate", async (req, res) => {
  const userInput = req.body.userInput;
  const prompt = `Gere um jingle ou uma pequena música com base na seguinte entrada: ${userInput}. Forneça a letra e uma breve descrição do estilo musical.`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    res.send({ result: text });
  } catch (error) {
    console.error("Erro na geração:", error);
    res.status(500).send({ error: "Erro ao gerar a música." });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});