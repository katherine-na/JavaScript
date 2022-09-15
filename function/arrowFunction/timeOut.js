// Devolver una alarma en la consola en un tiempo determinado

const doHomeworkAlarm = () => console.log("Hey! You need to do your homework!");
const timeoutId = setTimeout(doHomeworkAlarm, 30000);

console.log(doHomeworkAlarm());
