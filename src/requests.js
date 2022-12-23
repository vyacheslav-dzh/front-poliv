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
            .catch(e => alert('Connection lost', e))
        },
        get: async (pot_id) => {
            await fetch(base_url + '/pot/' + pot_id, {
                method: 'POST',
            })
            .catch(e => alert('Connection lost', e))
        },
        create: async (pot) => {
            await fetch(base_url + './pot/create', {
                method: 'POST',
                body: {
                    plant_id: pot.plant_id,
                    sensor_id: pot.sensor_id,
                    name: pot.name,
                    soil_type: pot.soil_type,
                    date_watering: pot.date_watering,
                    watering_period: pot.watering_period,
                    check_wet: pot.check_wet,
                    wet: pot.wet,
                }
            })
            .catch(e => alert('Connection lost', e))
        },
        delete: async (pot_id) => {
            await fetch(base_url + '/pot/delete' + pot_id, {
                method: 'POST',
            })
            .catch(e => alert('Connection lost', e))
        },
        update_period: async (pot_id, watering_period) => {
            await fetch(base_url + '/pot/update/period', {
                method: 'POST',
                body: {
                    pot_id: pot_id,
                    watering_period: watering_period
                }
            })
            .catch(e => alert('Connection lost', e))
        },
        info: async (pot_id) => {
            await fetch(base_url + '/requests/Pot/' + pot_id, {
                method: 'POST'
            })
            .then(response => response.json)
            .catch(e => alert('Connection lost', e))
        },
        count: async () => {
            await fetch(base_url + '/requests/CountOfPot', {
                method: 'POST'
            }).then(response => response.json)
            .catch(e => alert('Connection lost', e))
        },
        on: async (pot_id) => {
            await fetch(base_url + 'requests/OnPot/' + pot_id, {
                method: 'POST'
            })
            .catch(e => alert('Connection lost', e))
        },
        off: async (pot_id) => {
            await fetch(base_url + 'requests/OffPot/' + pot_id, {
                method: 'POST'
            })
            .catch(e => alert('Connection lost', e))
        }
    },
    plant: {
        get_all: async () => {
            await fetch(base_url + 'api/plants', {
                method: 'POST'
            })
            .then(response => response.json)
            .catch(e => alert('Connection lost'))
        },
        get: async (plant_id) => {
            await fetch(base_url + 'api/plant/' + plant_id, {
                method: 'POST'
            })
            .then(response => response.json)
            .catch(e => alert('Connection lost'))
        }
    },
    sensor: {
        get_all: async () => {
            await fetch(base_url + '/sensors', {
                method: 'POST'
            })
            .then(response => response.json)
            .catch(e => alert('Connection lost'))
        },
        get: async (pot_id) => {
            await fetch(base_url + '/sensor/' + pot_id, {
                method: 'POST'
            })
            .then(response => response.json)
            .catch(e => alert('Connection lost'))
        }
    },
    system: {
        on: async () => {
            await fetch(base_url + '/requests/On', {
                method: 'POST'
            }).catch(e => alert('Connection lost', e))
        },
        off: async () => {
            await fetch(base_url + '/requests/Off', {
                method: 'POST'
            }).catch(e => alert('Connection lost', e))
        },
        water: async () => {
            await fetch(base_url + '/requests/CountofWater', {
                method: 'POST'
            }).then(response => response.json)
            .catch(e => alert('Connection lost', e))
        }
    }
}

export default requests