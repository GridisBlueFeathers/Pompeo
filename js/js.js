$('.modal').click(function(e){
    switch ($(e.target).closest('.modal__window').length == 0){
        case true:
            $(this).fadeOut()
        case false:
            if($(e.target)[0] == $('.modal__close').children('img')[0]){
                $(this).fadeOut()
            }
    }
})
