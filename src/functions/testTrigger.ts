import { app, InvocationContext, Timer } from "@azure/functions";

export async function testTrigger(myTimer: Timer, context: InvocationContext): Promise<void> {
    context.log('Timer function processed request!!!.');
}

app.timer('testTrigger', {
    schedule: '*/5 * * * * *',
    handler: testTrigger
});
