import { Alert } from "react-native"

// must get from config
const host = 'http://172.20.10.14'
const port = '5000'
const base_url = `${host}:${port}/api`
const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }

const post_request = (data) => {
    return {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    }
}

const requests = {
    pot: {
        toogle_all: async (value) => {
            return await fetch(base_url + '/pot/toogle/all', post_request({value: value}))
            .catch(e => Alert.alert('Connection lost', e))
        },
        toogle: async (pot_id) => {
            return await fetch(base_url + '/pot/toogle/' + pot_id, {
                method: 'GET'
            })
            .catch(e => Alert.alert('Connection lost', e))
        },
        get_all: async () => {
            return await fetch(base_url + '/pot/get/all', {
                method: 'GET'
            })
            .then(response => response.json())
            .then(json => { return json })
            .catch(e => Alert.alert('Connection lost', e))
        },
        get: async (pot_id) => {
            return await fetch(base_url + '/pot/get/' + pot_id, {
                method: 'GET',
            })
            .then(response => response.json())
            .then(json => { return json })
            .catch(e => Alert.alert('Connection lost', e))
        },

        create: async (pot) => {
            return await fetch(base_url + '/pot/create', post_request({
                plant_id: pot.plant_id,
                name: pot.name,
                description: pot.description
            }))
            .then(response => { return response.status })
            .catch(e => console.log('Connection lost', e))
        },
        delete: async (pot_id) => {
            return await fetch(base_url + '/pot/delete/' + pot_id, {
                method: 'GET',
            })
            .then(response => { return response.status })
            .catch(e => Alert.alert('Connection lost', e))
        },
        update_period: async (pot) => {
            return await fetch(base_url + '/pot/update', post_request({
                pot_id: pot.id,
                watering_period: pot.watering_period,
                name: pot.name,
                description: pot.description
            }))
            .then(response => { return response.status })
            .catch(e => Alert.alert('Connection lost', e))
        },
        info: async (pot_id) => {
            return await fetch(base_url + '/system/pot/info/' + pot_id, {
                method: 'GET'
            })
            .then(response => { return response.status })
            .catch(e => Alert.alert('Connection lost', e))
        },
        count: async () => {
            return await fetch(base_url + '/system/pot/count', {
                method: 'GET'
            })
            .then(response => { return response.status })
            .catch(e => Alert.alert('Connection lost', e))
        }
    },
    plant: {
        get_all: async () => {
            return await fetch(base_url + '/plant/get/all', {
                method: 'GET'
            })
            .then(response => response.json())
            .then(json => { return json })
            .catch(e => console.log('Connection lost', e))
        },
        get: async (plant_id) => {
            return await fetch(base_url + '/plant/get/' + plant_id, {
                method: 'GET'
            })
            .then(response => response.json())
            .then(json => { return json })
            .catch(e => Alert.alert('Connection lost'))
        },
        create: async (plant) => {
            return await fetch(base_url + '/plant/create', post_request({
                name: plant.name,
                description: plant.description,
                watering_period: plant.watering_period,
                soil_type: plant.soil_type,
                wet: plant.wet
            }))
            .then(response => { return response.status })
            .catch(e => Alert.alert('Connection lost', e))
        },
        delete: async (plant_id) => {
            return await fetch(base_url + '/plant/delete/' + plant_id, {
                method: 'GET'
            })
            .then(response => { return response.status })
            .catch(e => Alert.alert('Connection lost', e))
        }
    },
    sensor: {
        get_all: async () => {
            return await fetch(base_url + '/sensors', {
                method: 'POST'
            })
            .then(response => response.json)
            .catch(e => Alert.alert('Connection lost'))
        },
        get: async (pot_id) => {
            return await fetch(base_url + '/sensor/' + pot_id, {
                method: 'POST'
            })
            .then(response => response.json)
            .catch(e => Alert.alert('Connection lost'))
        }
    },
    system: {
        water: async () => {
            return await fetch(base_url + '/requests/CountofWater', {
                method: 'POST'
            }).then(response => response.json)
            .catch(e => Alert.alert('Connection lost', e))
        },
        connect: async () => {
            return await fetch(base_url + '/connect', {
                method: 'POST'
            }).then(res => {return res.status})
            .catch(e => {return 404})
        }
    }
}

export default requests