export default function ConstrainDistance(point, anchor, distance) {
    let dx = point.x - anchor.x;
    let dy = point.y - anchor.y;

    let currentDistance = Math.sqrt(dx * dx + dy * dy);

    if (currentDistance > distance) {
        let scale = distance / currentDistance;
        dx *= scale;
        dy *= scale;

        return {
            x: anchor.x + dx,
            y: anchor.y + dy
        };
    }

    return point;
}