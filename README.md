# 🎙️ VoiceDOM: Universal Multilingual AI Voice Web Navigator & Form Autopilot

> **🏆 Built for Major League Hacking (MLH) — Best Open-Source AI Project Challenge**  
> *An open-source, 3-in-1 accessibility suite enabling zero-code voice navigation and autonomous form-filling on **ANY** website on the internet, powered by **OpenAI Whisper Large v3** and **Qwen 2.5 / 3.8-27B**.*

[![License: MIT](https://img.shields.io/badge/License-MIT-emerald.svg)](https://opensource.org/licenses/MIT)
[![Whisper STT](https://img.shields.io/badge/STT-Whisper%20Large%20v3-orange.svg)](https://github.com/openai/whisper)
[![Qwen LLM](https://img.shields.io/badge/LLM-Qwen%202.5%20%2F%203.8--27B-blue.svg)](https://github.com/QwenLM/Qwen2.5)
[![Manifest V3](https://img.shields.io/badge/Extension-Chrome%20Manifest%20V3-4285F4.svg)](https://developer.chrome.com/docs/extensions/)
[![Agent Skill](https://img.shields.io/badge/Standard-Agent%20Skill%20Open%20Standard-purple.svg)](./SKILL.md)

---

## 📌 Table of Contents
- [💡 Problem & Breakthrough](#-problem--breakthrough)
- [✨ The 3-in-1 Ecosystem](#-the-3-in-1-ecosystem)
- [🤖 Open-Weight AI & DOM Architecture](#-open-weight-ai--dom-architecture)
- [🎬 Live Demo Showcase](#-live-demo-showcase)
- [💻 1. Drop-In Web SDK (For Developers)](#-1-drop-in-web-sdk-for-developers)
- [🌐 2. Universal Chrome Extension (For End Users)](#-2-universal-chrome-extension-for-end-users)
- [📝 3. VoiceForm Autopilot (For Multi-Step Forms)](#-3-voiceform-autopilot-for-multi-step-forms)
- [🚀 Quick Start & Installation](#-quick-start--installation)
- [📜 Open-Source License](#-open-source-license)

---

## 💡 Problem & Breakthrough

Digital accessibility today is fundamentally broken for **hundreds of millions of non-English speakers, elderly users, and individuals with visual/motor impairments**:
1. **Developers Don't Have Time**: Writing custom voice intents for every page, button, and route is tedious and unmaintainable.
2. **Users Are Trapped**: Traditional voice assistants only work inside proprietary apps and cannot navigate generic websites on the web.
3. **Form Abandonment**: Complex multi-field forms (KYC, banking, e-commerce, government registrations) have over 65% drop-off rates among rural users.

### 🚀 The VoiceDOM Breakthrough:
VoiceDOM turns **ANY webpage into a fully voice-navigable interface with ZERO manual intent coding**:
- Dynamically scans the live DOM accessibility tree in real-time.
- Uses **Whisper Large v3** and **Qwen 2.5 / 3.8-27B** to understand natural multi-dialect speech (**English**, **বাংলা / Bengali**, **मराठी / Marathi**, **हिन्दी / Hindi**).
- Autonomously clicks buttons, scrolls pages, and auto-fills entire multi-field forms from a single spoken sentence.

---

## ✨ The 3-in-1 Ecosystem

```
                                  ┌─────────────────────────────────────────────────────────┐
                                  │      Spoken Voice Audio (Multilingual: EN, BN, MR)      │
                                  └────────────────────────────┬────────────────────────────┘
                                                               │
                                                               ▼
                                  ┌─────────────────────────────────────────────────────────┐
                                  │    Open-Source Kernel: Whisper Large v3 + Qwen 2.5/3.8   │
                                  │    • Real-time speech transcription                     │
                                  │    • Dynamic DOM Tree Reasoning & Entity Extraction     │
                                  └────────────────────────────┬────────────────────────────┘
                                                               │
                                                               ▼
                                  ┌─────────────────────────────────────────────────────────┐
                                  │            VoiceDOM Action Dispatcher Engine            │
                                  │    (CLICK, AUTO-FILL, SCROLL, TRANSLATE, NAVIGATE)      │
                                  └───────────────┬─────────────────────────┬───────────────┘
                                                  │                         │
                 ┌────────────────────────────────┴────────┐                │
                 ▼                                         ▼                ▼
┌─────────────────────────────────┐   ┌─────────────────────────────┐   ┌─────────────────────────────┐
│ 1. 📦 Drop-In Web SDK / NPM     │   │ 2. 📝 VoiceForm Autopilot   │   │ 3. 🌐 Universal Chrome Ext  │
│ For Web Developers (1 line tag) │   │ Auto-detects & fills forms  │   │ For End Users on ANY site   │
└─────────────────────────────────┘   └─────────────────────────────┘   └─────────────────────────────┘
```

---

## 💻 1. Drop-In Web SDK (For Developers)

Add full multilingual voice navigation to any React, Next.js, Vue, or Vanilla HTML website with just **one line of code**:

```html
<script src="https://unpkg.com/@voicedom/sdk/dist/bundle.js" data-lang="en"></script>
```

Or in React / Next.js:
```tsx
import { VoiceWidget } from "@voicedom/sdk";

export default function App() {
  return <VoiceWidget theme="dark" defaultLang="en" />;
}
```

---

## 🌐 2. Universal Chrome Extension (For End Users)

Take VoiceDOM with you across the entire internet:
1. Load `packages/extension` as an unpacked extension in **Chrome / Brave / Edge**.
2. Visit **Amazon**, **Wikipedia**, **Government Portals**, or **GitHub**.
3. Click **"Speak"** and control the site entirely by voice:
   - *"Search for mechanical keyboard"* $\rightarrow$ Focuses search bar, types, and submits.
   - *"Scroll down"* / *"নিচে নামো"* $\rightarrow$ Smooth scroll.
   - *"Click the first article link"* $\rightarrow$ Triggers native click.

---

## 📝 3. VoiceForm Autopilot (For Multi-Step Forms)

Speak an entire sentence naturally in regional dialects:
> *"My name is Ramesh Kumar, mobile 9876543210, I live in Pune and want to register as a farmer."*  
> Or in Bengali: *"আমার নাম রমেশ কুমার, মোবাইল ৯৮৭৬৫৪৩২১০, আমি পুনে থাকি"*

**VoiceDOM automatically:**
1. Maps entities to `name`, `phone`, `city`, and `role`.
2. Selects the correct `<option>` inside `<select>` dropdowns.
3. Triggers input event bubbling and visual radar pulse.

---

## 🚀 Quick Start & Running the Demo

### 1. Open the Interactive Showcase
Open [`demo/index.html`](./demo/index.html) directly in your browser, or run:
```bash
npx serve demo
```

### 2. Test Voice Commands:
- **E-Commerce Store**: *"Add organic wheat to cart"*, *"Click fresh tomatoes"*.
- **Form Autopilot**: *"My name is Ramesh, mobile 9876543210, register as buyer"*.
- **Navigation**: *"Scroll down"*, *"Top of page"*, *"Open Agritech portal"*.

---

## 📜 Open-Source License
Distributed under the **[MIT License](./LICENSE)**. Built for the MLH Best Open-Source AI Project Challenge.
