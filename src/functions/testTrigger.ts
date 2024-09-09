import { app, InvocationContext, Timer } from "@azure/functions";

export async function testTrigger(
  myTimer: Timer,
  context: InvocationContext
): Promise<void> {
  context.log("Timer function processed request!!!.");
  context.log(`
      
        Processing complete.
      
        _______
       /       \\
      |  ✓✓✓   |
      |  ✓✓✓   |
      |  ✓✓✓   |
       \\_______/
        
        All tasks have been completed. If you have any questions, please contact support.
      `);
}

app.timer("testTrigger", {
  schedule: "0 0 18 * * *",
  handler: testTrigger,
});
