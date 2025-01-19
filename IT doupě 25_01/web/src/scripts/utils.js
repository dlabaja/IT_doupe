export function getRandomNumber(end) {
    return Math.floor(Math.random() * end)
}

export function cn(...classes) {
    const strings = classes.filter(item => typeof item === "string"); // aby tam neskočila třeba třída "false"

    return strings.join(" ");
}