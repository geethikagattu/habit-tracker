# ⚙️ GitHub Actions Workflow Guide — Habit Tracker 🧠

This document explains how the **Daily Habit Checker GitHub Action** works and how you can test/run it yourself.

---

## 🔄 What It Does

- ⏰ **Runs daily at 3 AM UTC** to simulate a habit check
- 🐍 Executes `script.py` (a simple Python script that logs the current date & time)
- ✅ Can also be **manually triggered** from the GitHub UI

---

## 📂 Project Structure

habit-tracker/
├── script.py # Python script that runs daily
└── .github/
└── workflows/
└── daily-check.yml # GitHub Actions workflow file

scss
Copy
Edit

---

## 🐍 `script.py` (What Gets Run)

from datetime import datetime

def check_habits():
    now = datetime.now()
    print("✅ Habit Tracker Daily Job Ran")
    print("📅", now.strftime("%Y-%m-%d %H:%M:%S"))

if __name__ == "__main__":
    check_habits()
🔧 daily-check.yml (GitHub Actions File)
yaml
Copy
Edit
name: Daily Habit Checker

on:
  schedule:
    - cron: '0 3 * * *'     # Runs every day at 3 AM UTC
  workflow_dispatch:        # Adds a manual "Run workflow" button

jobs:
  check:
    runs-on: ubuntu-latest

    steps:
      - name: 📥 Checkout code
        uses: actions/checkout@v3

      - name: 🐍 Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'

      - name: 🚀 Run Daily Script
        run: python script.py
# 🧪 How to Test It
🔘 Option 1: Manually
Go to your repo on GitHub

Click "Actions" tab

Select "Daily Habit Checker"

Click "Run workflow"

You’ll see logs like:

yaml
Copy
Edit
✅ Habit Tracker Daily Job Ran
📅 2025-07-15 03:00:00
🕒 Option 2: Wait for the Daily Run
No manual action needed

The job will auto-run every day at 3:00 AM UTC

You’ll see logs under the Actions > Daily Habit Checker tab
