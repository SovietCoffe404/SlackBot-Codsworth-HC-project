# Codsworth Bot ⸜(｡˃ ᵕ ˂ )⸝♡

Hi! Well this is a little guided project for Hack Club
This is a Slack Bot with few functions, since I created it just for curiosity, I'll add more functions if I get a good idea

## Based on this guide:

**[Guide right here! ◝(ᵔᗜᵔ)◜](https://stardance.hackclub.com/missions/slack-bot/guide)**

## Commands:

- 🛑 **/codsworth-help** U can see all of the available commands
- 🤡 **/codsworth-joke** Codsworth will tell u a joke, just that HAHAHA
- 🤔 **/codsworth-catfact** U will receive a fun fact about anything!
- 📶 **/codsworth-ping** It shows you the ping of the bot

## Scopes:

| Required | OAuth Scope | Description |
|----------|-------------|--------------|
| Yes | `app_mentions:read` | View messages that directly mention @Codsworth in conversations that the app is in |
| Yes | `channels:history` | View messages and other content in public channels that "Codsworth" has been added to |
| Yes | `chat:write` | Send messages as @Codsworth |
| Yes | `commands` | Add shortcuts and/or slash commands that people can use |

## How it works

Codsworth runs two things at once from a single node process:
1. A Slack bot connected via Socket Mode
2. An Express web server that serves a small static site and mirrors the same commands as a REST API, so you can try the bot's functionality without getting Slack on ur device

## 💻 Run it locally ദ്ദി(ᵔᗜᵔ) 

1. Clone the repo:
```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
```
2. Install dependencies:
```bash
   npm install
```
3. Copy `.env.example` to `.env` and fill in with your own Slack tokens
```
   SLACK_BOT_TOKEN=xoxb-...
   SLACK_APP_TOKEN=xapp-...
```
4. Start the bot:
```bash
   npm start
```
## Demo :D

Try Codsworth by joining this channel!

**[🤖 Open Codsworth Demo](https://hackclub.enterprise.slack.com/archives/C0P5NE354)**

You can test all of Codsworth's commands (˶˃⤙˂˶)

## Screen Shots & videos!

<img width="959" height="499" alt="Screenshot 2026-09-21 203926" src="https://github.com/user-attachments/assets/b02d93f1-471d-43e2-8252-cb9274b46251" />

<img width="959" height="500" alt="Screenshot 2026-09-21 203830" src="https://github.com/user-attachments/assets/3815c95e-7954-4d33-8d80-c09a57a35f59" />

<img width="958" height="502" alt="Screenshot 2026-09-21 203817" src="https://github.com/user-attachments/assets/52c70fbc-53b1-4533-8136-0638798e9cc0" />

<img width="959" height="500" alt="Screenshot 2026-09-21 203838" src="https://github.com/user-attachments/assets/fb2ea37b-1eb3-4108-a752-9f5de5394cf9" />

https://github.com/user-attachments/assets/03f310cd-80a7-42bf-a385-114edef4fdf1

## ★ Special thanks to:
`hackclub.com` for the guide and funding! <3

`Official Joke API`

`catfact.ninja`
