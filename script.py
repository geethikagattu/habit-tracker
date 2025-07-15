from datetime import datetime

def check_habits():
    now = datetime.now()
    print("✅ Habit Tracker Daily Job Ran")
    print("📅", now.strftime("%Y-%m-%d %H:%M:%S"))

if __name__ == "__main__":
    check_habits()
