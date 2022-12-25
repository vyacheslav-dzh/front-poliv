import { Alert } from "react-native"

// must get from config
const host = 'http://172.20.10.14'
const port = '5000'
const base_url = `${host}:${port}/api`
const headers = ''

const requests = {
    pot: {
        get_all: async () => {
            return await fetch(base_url + '/pots', {
                method: 'GET'
            })
            .then(response => response.json())
            //.then(json => {return json})
            .catch(e => Alert.alert('Connection lost', e))
        },
        get: async (pot_id) => {
            return await fetch(base_url + '/pot/' + pot_id, {
                method: 'POST',
            })
            .catch(e => Alert.alert('Connection lost', e))
        },
        create: async (pot) => {
            return await fetch(base_url + '/pot/create', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    plant_id: pot.plant_id,
                    sensor_id: pot.sensor_id,
                    name: pot.name,
                    soil_type: pot.soil_type,
                    date_watering: pot.date_watering,
                    watering_period: pot.watering_period,
                    check_wet: pot.check_wet,
                    wet: pot.wet,
                })
            }).then(res => res.status)
            .catch(e => console.log('Connection lost', e))
        },
        delete: async (pot_id) => {
            return await fetch(base_url + '/pot/delete/' + pot_id, {
                method: 'POST',
            })
            .catch(e => Alert.alert('Connection lost', e))
        },
        update_period: async (pot_id, watering_period) => {
            return await fetch(base_url + '/pot/update/period', {
                method: 'POST',
                body: {
                    pot_id: pot_id,
                    watering_period: watering_period
                }
            })
            .catch(e => Alert.alert('Connection lost', e))
        },
        info: async (pot_id) => {
            return await fetch(base_url + '/requests/Pot/' + pot_id, {
                method: 'POST'
            })
            .then(response => response.json)
            .catch(e => Alert.alert('Connection lost', e))
        },
        count: async () => {
            return await fetch(base_url + '/requests/CountOfPot', {
                method: 'POST'
            }).then(response => response.json)
            .catch(e => Alert.alert('Connection lost', e))
        },
        on: async (pot_id) => {
            return await fetch(base_url + '/requests/StartWatering/' + pot_id, {
                method: 'POST'
            }).then(res => {return res.status})
            .catch(e => Alert.alert('Connection lost', e))
        },
        off: async (pot_id) => {
            return await fetch(base_url + '/requests/EndWatering/' + pot_id, {
                method: 'POST'
            }).then(res => {return res.status})
            .catch(e => Alert.alert('Connection lost', e))
        }
    },
    plant: {
        get_all: async () => {
            return await fetch(base_url + '/plants', {
                method: 'POST'
            })
            .then(response => response.json())
            .then(json => {return json})
            .catch(e => console.log('Connection lost', e))
        },
        get: async (plant_id) => {
            return await fetch(base_url + '/plant/' + plant_id, {
                method: 'POST'
            })
            .then(response => response.json)
            .catch(e => Alert.alert('Connection lost'))
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
        on: async () => {
            return await fetch(base_url + '/requests/On', {
                method: 'POST'
            }).catch(e => Alert.alert('Connection lost', e))
        },
        off: async () => {
            return await fetch(base_url + '/requests/Off', {
                method: 'POST'
            }).catch(e => Alert.alert('Connection lost', e))
        },
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