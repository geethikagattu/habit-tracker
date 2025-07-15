name: Daily Habit Checker

on:
  schedule:
    - cron: '0 3 * * *'  # every day at 3:00 AM UTC
  workflow_dispatch:  # also allows manual run

jobs:
  check:
    runs-on: ubuntu-latest

    steps:
      - name: 📥 Checkout Code
        uses: actions/checkout@v3

      - name: 🐍 Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'

      - name: 🚀 Run Habit Checker
        run: python script.py
