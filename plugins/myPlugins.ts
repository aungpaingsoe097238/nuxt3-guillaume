export default defineNuxtPlugin(() => {
    return {
        provide: {
            sayHelloPlugin: (msg: string) => `Hello ${msg}!`
        }
    }
});
