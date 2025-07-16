# 🌟 Habit Tracker App with Daily GitHub Action

This is a simple and elegant Habit Tracker built with **React**, **Zustand**, and **GitHub Actions**.

You can:
- ✅ Add new habits
- 🗑️ Delete or ✏️ Edit existing ones
- 📆 Mark habits as "done" for today
- 🎯 Track your daily progress visually
- ⚙️ Run a **daily automation script** via GitHub Actions

---

## ✨ Features

### 🧠 State Management
Uses [Zustand](https://github.com/pmndrs/zustand) to manage global habit state in a lightweight way.

### 🎨 UI Tech
- Built using **React**
- Styled with inline CSS for simplicity
- Clean, soft background with playful colors

### ⚙️ GitHub Action
Runs a Python script (`script.py`) every day at 3 AM UTC.
The script prints the current date + time to show that automation works.

---

## 🧪 How to Run Locally

```bash
git clone https://github.com/geethikagattu/habit-tracker.git
cd habit-tracker
npm install
npm start
