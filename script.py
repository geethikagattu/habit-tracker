import json
from datetime import date

def check_habits():
    today = str(date.today())

    try:
        with open("habits.json", "r") as f:
            habits = json.load(f)

        undone = [h['name'] for h in habits if today not in h.get('doneDates', [])]

        if undone:
            print(f"❌ Undone habits for {today}:")
            for habit in undone:
                print(f"- {habit}")
        else:
            print(f"✅ All habits completed for {today}!")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    check_habits()
