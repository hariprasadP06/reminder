// import { reminderDB } from "./reminderdb";

// reminderDB.createReminder("Buy milk", new Date("2021-12-24"));
// reminderDB.createReminder("Buy eggs", new Date("2021-12-25"));

// const reminders = reminderDB.getAllReminders();
// console.log("Reminders:", reminders);

// import { reminderDB } from "./reminderdb";

// reminderDB.createReminder("Buy milk", true, new Date("2021-12-24"));
// reminderDB.createReminder("Buy eggs", true, new Date("2021-12-25"));

// const reminders = reminderDB.getAllReminders();
// console.log("Reminders:", reminders);

// import { reminderDB } from "./reminderdb";

// // ✅ Create reminders
// const reminder1 = reminderDB.createReminder(
//   "Buy groceries",
//   new Date("2025-03-12")
// );
// const reminder2 = reminderDB.createReminder("Doctor's appointment", new Date());

// // ✅ Check if a reminder exists
// console.log("Exists:", reminderDB.exists(reminder1.id));

// // ✅ Mark as completed
// reminderDB.markReminderAsCompleted(reminder1.id);

// // ✅ Get all reminders
// console.log("All Reminders:", reminderDB.getAllReminders());

// // ✅ Get completed reminders
// console.log(
//   "Completed Reminders:",
//   reminderDB.getAllRemindersNotMarkedAsCompleted()
// );

// // ✅ Get due reminders
// console.log("Reminders Due Today:", reminderDB.getAllRemindersDueByToday());

// // ✅ Update a reminder
// reminderDB.updateReminder(reminder1.id, "Buy groceries and medicine");

// // ✅ Remove a reminder
// reminderDB.removeReminder(reminder2.id);

import { reminderDB } from "./reminderdb";

const reminder1 = reminderDB.createReminder(
  "Buy groceries", 
  new Date("2025-03-12")
);
const reminder2 = reminderDB.createReminder("Doctor's appointment", new Date());

console.log("Created Reminders:");
console.log(reminder1);
console.log(reminder2);

console.log("Exists:", reminderDB.exists(reminder1.id));

reminderDB.markReminderAsCompleted(reminder1.id);
console.log(`Reminder ${reminder1.id} marked as completed.`);

console.log("All Reminders:", reminderDB.getAllReminders());

console.log(
  "Completed Reminders:",
  reminderDB.getAllRemindersMarkedAsCompleted()
);

console.log("Reminders Due Today:", reminderDB.getAllRemindersDueByToday());

reminderDB.updateReminder(
  reminder1.id,
  "Buy groceries and medicine",
  new Date("2025-03-15")
);
console.log(
  `Updated Reminder ${reminder1.id}:`,
  reminderDB.getReminder(reminder1.id)
);

reminderDB.removeReminder(reminder2.id);
console.log(`Reminder ${reminder2.id} removed.`);

console.log("All Reminders After Removal:", reminderDB.getAllReminders());
