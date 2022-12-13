export function getRadiusFromEllipseAngle(width, height, angle) {
    let a = width / 2
    let b = height / 2
    let z = angle

    let r = (a * b) / Math.sqrt(a*a * Math.pow(Math.sin(z), 2) + b*b * Math.pow(Math.cos(z), 2))
    return r
}
