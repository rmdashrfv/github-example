let request = async () => {
    let req = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    let res = await req.json()
    console.log(res)
    return res
}


request()