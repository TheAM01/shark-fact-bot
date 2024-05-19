import cron from "node-cron";

// Function to execute at the scheduled time
const taskFunction = () => {
console.log('Task is running at 3:26 AM');
// Add your task logic here
};

// Schedule the task to run every day at 3:21 PM
const task = cron.schedule('40 26 3 * * *', taskFunction);

console.log('Cron job scheduled to run daily at 3:26 AM');