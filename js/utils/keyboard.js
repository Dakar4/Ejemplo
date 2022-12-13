export var keys = []

document.addEventListener("keydown", e => {
    if (keys.includes(e.key)) return
    keys.push(e.key)
})

document.addEventListener("keyup", e => {
    keys.splice(keys.indexOf(e.key), 1)
})

export function isKeyDown(key) {
    if (key == undefined) return keys.length != 0
    return keys.includes(key)
}
