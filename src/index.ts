import { reminderDB } from "./reminderdb";

reminderDB.createReminder("Buy milk", new Date("2021-12-24"));
reminderDB.createReminder("Buy eggs", new Date("2021-12-25"));

const reminders = reminderDB.getAllReminders();
console.log("Reminders:", reminders);
