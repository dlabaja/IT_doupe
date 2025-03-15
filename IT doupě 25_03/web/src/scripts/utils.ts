export function getRandomNumber(end: number) {
    return Math.floor(Math.random() * end)
}

export function cn(...classes: (string | boolean | undefined)[]) {
    const strings = classes.filter(item => typeof item === "string"); // aby tam neskočila třeba třída "false"

    return strings.join(" ");
}