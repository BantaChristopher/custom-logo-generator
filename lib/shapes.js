class Shape {
    constructor(color) {
        this.color = color
    }
    render() {
        throw new Error ('Render can only be used on a valid shape!')
    }
}

class Square extends Shape {
    render() {
        return `<rect x="75" y="40" width="150" height="150" style="fill:${this.color}"/>`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.color}"/>`
    }
}

module.exports = {Square, Triangle, Circle}