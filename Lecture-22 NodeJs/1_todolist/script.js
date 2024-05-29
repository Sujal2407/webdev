$('body')
    .append(
        $('<h1>').text('todo list').addclass('heading')
    )
    .append(
        $('<div>')
            .addClass('inputdetails')
            .append(
                $('<input>')
                    .attr('placeholder','enter new task')
                    .attr('type','text')
                    .addclass('newtask')

            )
            .append(
                $('button')
                    .text('add task')
                    .addclass('btn')
                    .click(ev => {
                        if($('.newtask').val().trim()!=''){
                            $('.tasklist')
                                append(
                                    $('<li>')
                                        .addClass('task')
                                        .text(
                                            $('<li>')
                                            .addclass('task')
                                            .text(
                                                $('.newtask').val()
                                            )
                                            .append(
                                                $('<button>').text('↑').addclass('upbtn')
                                            )
                                            .append(
                                                $('<button>').text('↓').addclass('doenbtn')
                                            )
                                            .append(
                                                $('<button></button>').text('❌').addclass('deletebtn')
                                            )
                                        )
                                )
                            $('.newtask').val('')
                        }
                    })
            )
    )
    .append(
        $('<ul>')
            .addclass('tasklist')
            .click(ev=>{
                if($(ev.target).hasclass('upbtn')){
                $(ev.target).parent().parent()
                    .insertbefore($(ev.target).parent().parent().prev())
                }
                else if($(ev.target).hasclass('downbtn')){
                    $(ev.target).parent().parent()
                        .insertafter()
                }
            })
    )