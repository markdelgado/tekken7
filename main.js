let fighters =['byran', 'anna', 'king', 'kuma', 'lili', 'panda', 'gigas','alisa', 'josie', 'lee', 'nina', 'noctis' ]


const fighterUrl = (name) => {

    return `https://tk7.tekken.com/assets/images/fighters-final/${name}-standard/thumbnail-headshot.png`
}

const fightersArray= fighters.map(fighter=> {
    return (
    <div>
    console.log(fighter)
    </div >
    )
})
