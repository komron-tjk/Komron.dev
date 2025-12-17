# 👨‍💻 Komron Rezmonov - Personal Portfolio

Welcome to my personal portfolio website! This project showcases my skills, projects, and services as a Full-Stack Developer and Automation Engineer. It is built with performance, aesthetics, and user experience in mind.

🔗 **Live Demo:** [https://komron-it.vercel.app](https://komron-gyxjcpvk1-komron-tjks-projects.vercel.app)

## ✨ Features

*   **🎨 Modern UI/UX:** Clean, dark-themed design (inspired by "Dark Neon") with glassmorphism effects.
*   **🌓 Dark/Light Mode:** Fully supported theme toggle with persistent preference saving.
*   **🌍 Multi-Language Support:** Content is available in **Tajik (TG)** and **English (EN)**.
*   **📱 Fully Responsive:** Optimized for Desktops, Tablets, and Mobile devices.
*   **🚀 Fast & Lightweight:** Built using Vanilla HTML, CSS, and JavaScript (no heavy frameworks).
*   **📩 Functional Contact Form:** Securely sends messages directly to Telegram using **Vercel Serverless Functions**.
*   **✨ Animations:** Particle effects, scroll reveal animations, and interactive elements.

## 🛠️ Tech Stack

*   **Frontend:** HTML5, CSS3 (Custom Properties), JavaScript (ES6+)
*   **Backend (API):** Node.js (Vercel Serverless Functions) for secure message handling.
*   **Libraries:** `particles.js` (Background effect), FontAwesome (Icons).

## 🚀 Getting Started

### Prerequisites

To run this project locally with the working contact form, you need:
*   [Node.js](https://nodejs.org/) installed.
*   [Vercel CLI](https://vercel.com/docs/cli) installed (`npm i -g vercel`).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/komron-tjk/Komron.it.git
    cd Komron.it
    ```

2.  **Run Locally (with API support):**
    ```bash
    vercel dev
    ```
    *Note: Opening `index.html` directly will not allow the contact form to send messages because it relies on the `/api` endpoint.*

## ☁️ Deployment (Vercel)

This project is optimized for deployment on **Vercel**.

1.  Push your code to GitHub.
2.  Import the project in Vercel.
3.  **IMPORTANT:** Add the following **Environment Variables** in your Vercel Project Settings:

    | Variable Name | Description |
    | :--- | :--- |
    | `TELEGRAM_BOT_TOKEN` | Your Telegram Bot Token (from @BotFather) |
    | `TELEGRAM_CHAT_ID` | Your numeric Telegram User ID |

4.  Deploy! 🚀

## 📂 Project Structure

```
├── 📁 api/               # Serverless Functions
│   └── send-message.js   # Secure Telegram message handler
├── 📁 images/            # Project assets
├── index.html            # Main HTML structure
├── style.css             # Styles and Logic
├── script.js             # Frontend Logic (DOM, APIs, UI)
└── README.md             # Documentation
```

## 📬 Contact

*   **Telegram:** [@Blacktime_03](https://t.me/Blacktime_03)
*   **Email:** rezmonkomron@gmail.com
*   **GitHub:** [komron-tjk](https://github.com/komron-tjk)

---
*© 2025 Komron Rezmonov. All rights reserved.*



