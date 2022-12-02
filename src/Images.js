
export const plants_page = {
    background: require('../assets/page-plants/background.png'),
    card_img: require('../assets/page-plants/item-img.png')
}

export const main_page =  {
    background: require('../assets/page-main/background.png'),
    icons: {
        liters: require('../assets/page-main/icon-liters.png'),
        temp: require('../assets/page-main/icon-temp.png'),
        plants: require('../assets/page-main/icon-plants.png'),
        power: require('../assets/page-main/icon-power.png')
    },
    water_lvl: require('../assets/page-main/water-lvl.png')
}

export const tab_icons = {
    inactive : {
        watering: require('../assets/navigation/icon-watering.png'),
        main: require('../assets/navigation/icon-main.png'),
        plants: require('../assets/navigation/icon-plants.png')
    },
    active: {
        watering: require('../assets/navigation/icon-watering-active.png'),
        main: require('../assets/navigation/icon-main-active.png'),
        plants: require('../assets/navigation/icon-plants-active.png')
    }
}


export default {
    plants_page: plants_page,
    main_page: main_page,
    tab_icons: tab_icons
}