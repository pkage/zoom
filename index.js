// TOP LEVEL (camera)

const lizard = anime({
    targets: '.lizard',
    keyframes: [
        {scale: 2, translateX: '-20%', duration: 200},
        {scale: 2, translateX: '-20%', duration: 200},
        {scale: 6, translateX: '-20%', translateY: '-5%', duration: 600}
    ],
    duration: 1000,
    autoplay: false,
    easing: 'linear'
})

const lizard_jaw = anime({
    targets: '.lizard__jaw',
    keyframes: [
        {duration: 200},
        {rotate: '45deg', duration: 200},
        {rotate: '45deg', duration: 800}
    ],
    duration: 1000,
    autoplay: false,
    easing: 'linear'
})

const snake = anime({
    targets: '.snake',
    keyframes: [
        {duration: 0, scale: 0.01, rotate: '100deg'},
        {duration: 200, scale: 0.01, rotate: '100deg'},
        {duration: 200, scale: 0.4, rotate: '100deg'},
        {duration: 600, scale: 0.4, rotate: '100deg'}
    ],
    duration: 1000,
    autoplay: false,
    easing: 'linear'
})

const snake_jaw = anime({
    targets: '.snake__jaw',
    keyframes: [
        {duration: 0, rotate: '0deg'},
        {duration: 600, rotate: '0deg'},
        {duration: 200, rotate: '45deg'},
        {duration: 200, rotate: '45deg'},
    ],
    duration: 1000,
    autoplay: false,
    easing: 'linear'
})

const dog = anime({
    targets: '.dog',
    keyframes: [
        {duration: 0, scale: 0.01},
        {duration: 800, scale: 0.01, translateX: 0, translateY: 0},
        {duration: 200, scale: 0.1, translateX: 1407.8, translateY: -150.9, rotate: '-465deg'}
    ],
    duration: 1000,
    autoplay: false,
    easing: 'linear'
})

const applyAnimation = (anim, p) => anim.seek(anim.duration * p)


window.onload = function() {
    window.scrollY = 0

    const updateScrolls = () => {
        // todo: link up
        const percentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);


        // apply
        applyAnimation(lizard, percentage)
        applyAnimation(lizard_jaw, percentage)
        applyAnimation(snake, percentage)
        applyAnimation(snake_jaw, percentage)
        applyAnimation(dog, percentage)

        window.requestAnimationFrame(updateScrolls)
    }

    window.requestAnimationFrame(updateScrolls)

    applyAnimation(lizard, 0)
    applyAnimation(lizard_jaw, 0)
    applyAnimation(snake, 0)
    applyAnimation(snake_jaw, 0)
    applyAnimation(dog, 0)

}
