function distanceFromHqInBlocks(location) {
    let scuberHq = 42;
    return Math.abs(location - scuberHq);
}
distanceFromHqInBlocks();

function distanceFromHqInFeet(location) {
    let scuberHq = 42;
    return Math.abs((location - scuberHq) * 264);
}
distanceFromHqInFeet();

function distanceTravelledInFeet(start, end) {
    return Math.abs((start - end) * 264);
}
distanceTravelledInFeet(48, 43);

function calculatesFarePrice(start, end) {
    let distance = distanceTravelledInFeet(start, end)

    if (distance <= 400) {
        return 0;
    } else if (distance >400 && distance <=2000) {
        return 0.02 * (distance-400);
    } else if (distance >2000 && distance <=2500) {
        return 25; 
    } else if (distance >2500) {
        return 'cannot travel that far'
    }
}