function tempo(request, response){
    const dynamicDate = new Date();

    response.json({
        date: dynamicDate.toGTMstring
    })
}

export default tempo;