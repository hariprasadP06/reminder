// class Reminder {
//   id: string;
//   title: string;
//   date: Date;

//   constructor(id: string, title: string, date: Date) {
//     this.id = id;
//     this.title = title; // Fixed property assignment
//     this.date = date;
//   }
// }

// class ReminderDB {
//   reminders: Map<string, Reminder> = new Map();

//   createReminder(title: string, date: Date): Reminder {
//     const id = Math.random().toString(36).substr(2, 9);
//     const reminder = new Reminder(id, title, date);
//     this.reminders.set(id, reminder);
//     return reminder; // Return the created reminder
//   }

//   getAllReminders(): Reminder[] {
//     return Array.from(this.reminders.values());
//   }

//   getReminderById(id: string): Reminder | undefined {
//     return this.reminders.get(id);
//   }

//   removeReminder(id: string): void {
//     this.reminders.delete(id);
//   }

//   updateReminder(id: string, title: string, date: Date): Reminder | undefined {
//     const reminder = this.reminders.get(id);
//     if (reminder) {
//       if (title) {
//         reminder.title = title;
//       }
//       if (date) {
//         reminder.date = date;
//       }
//       this.reminders.set(id, reminder); // Ensure the update is applied
//       return reminder;
//     }
//     return undefined;
//   }
// }

// export const reminderDB = new ReminderDB();

// class Reminder {
//   id: string;
//   title: string;
//   completed: boolean;
//   date: Date;

//   constructor(id: string, title: string, completed: boolean, date: Date) {
//     this.id = id;
//     this.title = title;
//     this.completed = completed; // ✅ Assign correctly
//     this.date = date;
//   }
// }

// class ReminderDB {
//   reminders: Map<string, Reminder> = new Map();

//   createReminder(title: string, completed: boolean, date: Date): Reminder {
//     const id = Math.random().toString(36).substr(2, 9);
//     const reminder = new Reminder(id, title, completed, date); // ✅ Fixed missing parameter
//     this.reminders.set(id, reminder);
//     return reminder;
//   }

//   markReminderAsCompleted(id: string): Reminder | undefined {
//     const reminder = this.reminders.get(id);
//     if (reminder) {
//       reminder.completed = true;
//       this.reminders.set(id, reminder);
//       return reminder;
//     }
//     return undefined;
//   }

//   unmarkReminderAsCompleted(id: string): Reminder | undefined {
//     // ✅ Fixed typo
//     const reminder = this.reminders.get(id);
//     if (reminder) {
//       reminder.completed = false;
//       this.reminders.set(id, reminder);
//       return reminder;
//     }
//     return undefined;
//   }

//   getAllReminders(): Reminder[] {
//     return Array.from(this.reminders.values());
//   }

//   getReminder(id: string): Reminder | undefined {
//     return this.reminders.get(id);
//   }

//   getAllRemindersMarkedAsCompleted(): Reminder[] {
//     return Array.from(this.reminders.values()).filter(
//       (reminder) => reminder.completed
//     );
//   }

//   getAllRemindersMarkedAsUncompleted(): Reminder[] {
//     return Array.from(this.reminders.values()).filter(
//       (reminder) => !reminder.completed
//     );
//   }

//   getAllRemindersDueByDate(date: Date): Reminder[] {
//     return Array.from(this.reminders.values()).filter(
//       (reminder) => reminder.date <= date
//     );
//   }

//   updateReminder(
//     id: string,
//     title?: string,
//     date?: Date
//   ): Reminder | undefined {
//     // ✅ Made title & date optional
//     const reminder = this.reminders.get(id);
//     if (reminder) {
//       if (title !== undefined) {
//         reminder.title = title;
//       }
//       if (date !== undefined) {
//         reminder.date = date;
//       }
//       this.reminders.set(id, reminder);
//       return reminder;
//     }
//     return undefined;
//   }

//   removeReminder(id: string): void {
//     this.reminders.delete(id);
//   }
// }

// export const reminderDB = new ReminderDB();

class Reminder {
  id: string;
  title: string;
  completed: boolean;
  dueDate: Date;

  constructor(id: string, title: string, dueDate: Date) {
    this.id = id;
    this.title = title;
    this.completed = false;
    this.dueDate = dueDate;
  }
}

class ReminderDatabase {
  private reminders: Map<string, Reminder> = new Map();

  createReminder(title: string, dueDate: Date): Reminder {
    const id = Math.random().toString(36).substr(2, 9);
    const reminder = new Reminder(id, title, dueDate);
    this.reminders.set(id, reminder);
    return reminder;
  }

  exists(id: string): boolean {
    return this.reminders.has(id);
  }

  markReminderAsCompleted(id: string): boolean {
    const reminder = this.reminders.get(id);
    if (reminder) {
      reminder.completed = true;
      return true;
    }
    return false;
  }

  unmarkReminderAsCompleted(id: string): boolean {
    const reminder = this.reminders.get(id);
    if (reminder) {
      reminder.completed = false;
      return true;
    }
    return false;
  }

  getAllReminders(): Reminder[] {
    return Array.from(this.reminders.values());
  }

  getReminder(id: string): Reminder | null {
    return this.reminders.get(id) || null;
  }

  getAllRemindersMarkedAsCompleted(): Reminder[] {
    return Array.from(this.reminders.values()).filter(
      (reminder) => reminder.completed
    );
  }

  getAllRemindersNotMarkedAsCompleted(): Reminder[] {
    return Array.from(this.reminders.values()).filter(
      (reminder) => !reminder.completed
    );
  }

  getAllRemindersDueByToday(): Reminder[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return Array.from(this.reminders.values()).filter(
      (reminder) => reminder.dueDate <= today
    );
  }

  updateReminder(id: string, title?: string, dueDate?: Date): Reminder | null {
    const reminder = this.reminders.get(id);
    if (reminder) {
      if (title !== undefined) reminder.title = title;
      if (dueDate !== undefined) reminder.dueDate = dueDate;
      return reminder;
    }
    return null;
  }

  removeReminder(id: string): boolean {
    return this.reminders.delete(id);
  }
}

export const reminderDB = new ReminderDatabase();
