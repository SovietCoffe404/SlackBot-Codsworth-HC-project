require("dotenv").config();

const axios = require("axios");
const { App } = require("@slack/bolt");
const express = require("express");
const path = require("path");

// Validar variables de entorno requeridas
const requiredEnv = ["SLACK_BOT_TOKEN", "SLACK_APP_TOKEN"];
const missingEnv = requiredEnv.filter((key) => !process.env[key]);
if (missingEnv.length > 0) {
  console.error(`Faltan variables de entorno: ${missingEnv.join(", ")}`);
  process.exit(1);
}

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true
});

const web = express();

web.use(express.json());
web.use(express.static(path.join(__dirname, "public")));

app.command("/codsworth-ping", async ({ command, ack, respond }) => {
  const start = Date.now();
  await ack();
  const latency = Date.now() - start; // latencia del ack, no del round-trip completo
  await respond({ text: `Pong!\nLatency: ${latency}ms` });
});

app.command("/codsworth-help", async ({ ack, respond }) => {
  await ack();
  await respond({
  text:
`Available Commands:
 /codsworth-help - See all available commands
 /codsworth-ping - Check bot latency
 /codsworth-catfact - Get a cat fact
 /codsworth-joke - Get a random joke`
  });
});

app.command("/codsworth-catfact", async ({ ack, respond }) => {
  await ack();
  try {
    const response = await axios.get("https://catfact.ninja/fact");
    await respond({ text: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    await respond({ text: "Failed to fetch a cat fact." });
  }
});

app.command("/codsworth-joke", async ({ ack, respond }) => {
  await ack();
  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    await respond({
      text: `${response.data.setup}\n\n${response.data.punchline}`
    });
  } catch (err) {
    await respond({ text: "Failed to fetch a joke." });
  }
});

const PORT = process.env.PORT || 3000;

web.get("/api/ping", (req, res) => {
  res.json({ message: "Pong!" });
});

web.get("/api/help", (req, res) => {
  res.json({
    message:
`Available Commands:

/codsworth-ping - Check bot latency
/codsworth-catfact - Get a cat fact
/codsworth-joke - Get a random joke`
  });
});

web.get("/api/catfact", async (req, res) => {
  try {
    const response = await axios.get("https://catfact.ninja/fact");
    res.json({ message: `Cat Fact:\n${response.data.fact}` });
  } catch (err) {
    res.status(502).json({ message: "Failed to fetch a cat fact." });
  }
});

web.get("/api/joke", async (req, res) => {
  try {
    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
    res.json({ message: `${response.data.setup}\n${response.data.punchline}` });
  } catch (err) {
    res.status(502).json({ message: "Failed to fetch a joke." });
  }
});

(async () => {
  try {
    await app.start();
    console.log("bot is running!");
  } catch (err) {
    console.error("Error al iniciar el bot de Slack:", err);
    process.exit(1);
  }

  web.listen(PORT, "0.0.0.0", () => {
    console.log(`Demo running on port ${PORT}`);
  });
})();
