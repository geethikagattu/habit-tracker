from datetime import datetime    # For current date & time

#Function to simulate a daily check (or ping)
def check_habits():
    now = datetime.now()    #Get current timestamp
    print("Habit Tracker Daily Job Ran")     # Confirmation message
    print(" ", now.strftime("%Y-%m-%d %H:%M:%S"))  #Print current date & time nicely

# Runs only if this script is executed directly (not imported)
if __name__ == "__main__":
    check_habits()
