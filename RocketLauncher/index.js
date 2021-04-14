const URL = 'https://rocket-launcher-api.herokuapp.com/rocket/rocket_info';

document.addEventListener('DOMContentLoaded', () => {
    getRocket()
})

const getRocket = () => {
    fetch(URL)
        .then(res => res.json())
        .then(rocketData => renderRocket(rocketData))
}

const renderRocket = (rocketData) => {
    let rocketName = document.querySelector('.rocket-name')
        rocketName.innerText = rocketData.name

    let rocketYear = document.querySelector('.rocket-year')
        rocketYear.innerText = rocketData.year

    let rocketModel = document.querySelector('.rocket-model')
        rocketModel.innerText = rocketData.model

    let launch = document.querySelector('.go-for-launch')
        launch.innerText = rocketData.goForLaunch

    let rocketTests = document.querySelector('.rocket-tests')
        rocketTests.innerText = rocketData.tests

    let rocketUpgrades = document.querySelector('.rocket-upgrades')
        rocketUpgrades.innerText = rocketData.upgrades

    let rocketImage = document.querySelector('.rocket-img')
        rocketImage.innerText = rocketData.image

    let testButton = document.querySelector('.tests-button')
        testButton.addEventListener('click', () => testRocket(rocketTests))

    let upgradeButton = document.querySelector('.upgrade-button')
        upgradeButton.addEventListener('click', () => upgradeRocket(rocketUpgrades))

    let launchButton = document.querySelector('.launch-button')
        launchButton.addEventListener('click', () => launchRocket(rocketTests, rocketUpgrades, launch))
}

const testRocket = (rocketTests) => {
    rocketTests.innerText = parseInt(rocketTests.innerText) + 1
}

const upgradeRocket = (rocketUpgrades) => {
    rocketUpgrades.innerText = parseInt(rocketUpgrades.innerText) + 1
}

const launchRocket = (rocketTests, rocketUpgrades, launch) => {
    if (rocketTests.innerText >= 3 && rocketUpgrades.innerText >= 1) {
        launch.innerText = "true"
    } else {
        launch.innerText = "false"
    }
}