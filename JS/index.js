let queryKey = "api_key=FIiBibpW5TwIT2xgX70x5KXIkdvYX6VCf3TGcByq"
let queryURL = `https://api.nasa.gov/planetary/apod?${queryKey}`
console.log(queryURL)



$('#enviar').on('click', requiApi)

function requiApi () {
    const dataApi = $('#datas').val()

    $.ajax({url: queryURL + '&date=' + dataApi, 
        success: function (retorno) {
            return enviaApi(retorno)
        }
    })
}

function enviaApi (obj) {
    let imagens = obj.url
    let tipo = JSON.stringify (obj.media_type)

    $('#data').html(` Data ${obj.date}`)
    $('#autoria').html(` Créditos da Imagem/Video: ${obj.copyright}`)
    $('#legenda').html(obj.explanation)

    if (tipo === '"image"') {
        $('#imagem').css('display', 'block')
        $('#video').css('display', 'none')
        $('#img').attr('src', imagens)
        
    } else {
        $('#video').css('display', 'block')
        $('#imagem').css('display', 'none')
        $('#vid').attr('src', imagens)
    
    }  
    
}