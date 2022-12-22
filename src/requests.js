// must get from config
const host = 'http://0.0.0.0'
const port = '5000'
const base_url = `${host}:${port}/api`
const headers = ''

const requests = {
    pot: {
        get_all: async () => {
            await fetch(base_url + '/pots', {
                method: 'GET'
            })
            .then(response => response.json())
            //.then(json => {return json})
            .catch(e => alert('Connection lost'))
        },
        get_one: async (pot_id) => {
            await fetch(base_url + '/pot/' + pot_id, {
                method: 'POST',
                
            })
        }
    },
    create_pot: async (plant_id, name) => {
        await fetch(`${base_url}/create_pot`, {
            method: 'POST',
            body: {
                plant_id: plant_id,
                name: name,
            }
        }).catch(e => alert(e))
    }
}

