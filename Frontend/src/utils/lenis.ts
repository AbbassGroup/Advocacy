import Lenis from 'lenis'

const lenis = new Lenis({
    autoRaf: true,
    smoothWheel: true,
    easing: (x: number) => 1 - Math.pow(1 - x, 5),
})

export default lenis
