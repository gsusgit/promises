console.log('Starting...')

let promesa = new Promise((resolve, reject) => {
    let suma = 1 + 1
    if (suma === 2) {
        resolve('Success!')
    } else {
        reject('Error!')
    }
})

promesa
    .then((message) => console.log(message))
    .catch((error) => console.error(error))
    .finally(() => console.log('Finished!'))

console.log('3 promesas a la vez')

let p1 = new Promise((resolve, reject) => {
    resolve('Promesa 1 resuelta')
})

let p2 = new Promise((resolve, reject) => {
    resolve('Promesa 2 resuelta')
})

let p3 = new Promise((resolve, reject) => {
    resolve('Promesa 3 resuelta')
})

Promise.all([
    p1,
    p2,
    p3
]).then((messages) => {
    console.log(messages)
})


const youTube = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(
            {
                promiseName: 'Youtube',
                data:
                    {
                        channel: 'My Youtube Channel',
                        videos:
                            [
                                'video1',
                                'video2',
                                'video3'
                            ]
                    }
            }
        )
    }, 3000)
})

const faceBook = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(
            {
                promiseName: 'FaceBook',
                data:
                    {
                        username: 'John Doe'
                    }
            }
        )
    }, 1500)
})

Promise.all([youTube, faceBook]).then(result => {
    console.log(JSON.stringify(result))
})

