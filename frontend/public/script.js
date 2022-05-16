/*4 HTML metódus: get, post, put, delete
Get: kér adatot a szervertől
Post: ad adatot a szervernek
put, delete: nem nagyon használja senki, mert a posttal is meg lehet őket csinálni, tehát ezek nem fontosak

2 oldala van:
request: kérés, 2 rész: header és body
response: válasz, 2 rész: header és body


HTML vs XML vs JSON
A html jött először, annak a kiterjesztése, bővítése az XML, majd ezután volt a JSON.
A JSON az univerzális adatközlő nyelv. Az XML-nél mindig kell nyitótag és zárótag

API szerver: abban tér el a régi webszerverektől, hogy minden / jel után, azaz minden elérési útvonalján egy ...-t szolgál ki (Json fájlt kapunk)

Adatközlő API-k és műveletközlő API. A JSON adatközlésre alkalmas, műveletközlésre nem.

*/

/*Ez egy bonyolultabb mód:
const loadEvent = function () {
    const rootElement = document.getElementById("root")

    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(function (response) {
            console.log(response);
            return response.json()
        })
        .then(function (json) {
            console.log(json.date)
            rootElement.insertAdjacentHTML("beforeend", `
            <img src="${json.hdurl}">
            `)
        })

}

window.addEventListener("load", loadEvent)*/

//Ez egy egyszerűbb mód - az async szóval értem el, hogy az egész függvény aszinkron tudjon futni.

const loadEvent = async function () {
    const rootElement = document.getElementById("root")

    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")

    const responseJson = await response.json()
    rootElement.insertAdjacentHTML("beforeend", `
            <img src="${responseJson.hdurl}">
            `)
}

window.addEventListener("load", loadEvent)