async function tempo(request, response){
    const apiSecret = process.env.CONVERTKIT_APISECRET;
    const dynamicDate = new Date();

    const subscribersResponse = await fetch();

    response.json({
        date: dynamicDate.toGMTString("")
    })
}

export default tempo;