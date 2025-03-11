class Reminder {
  id: string;
  title: string;
  date: Date;

  constructor(id: string, title: string, date: Date) {
    this.id = id;
    this.title = title; // Fixed property assignment
    this.date = date;
  }
}

class ReminderDB {
  reminders: Map<string, Reminder> = new Map();

  createReminder(title: string, date: Date): Reminder {
    const id = Math.random().toString(36).substr(2, 9);
    const reminder = new Reminder(id, title, date);
    this.reminders.set(id, reminder);
    return reminder; // Return the created reminder
  }

  getAllReminders(): Reminder[] {
    return Array.from(this.reminders.values());
  }

  getReminderById(id: string): Reminder | undefined {
    return this.reminders.get(id);
  }

  removeReminder(id: string): void {
    this.reminders.delete(id);
  }

  updateReminder(id: string, title: string, date: Date): Reminder | undefined {
    const reminder = this.reminders.get(id);
    if (reminder) {
      if (title) {
        reminder.title = title;
      }
      if (date) {
        reminder.date = date;
      }
      this.reminders.set(id, reminder); // Ensure the update is applied
      return reminder;
    }
    return undefined;
  }
}

export const reminderDB = new ReminderDB();
