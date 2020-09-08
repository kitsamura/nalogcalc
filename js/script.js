$(document).ready(function () {

    //разный стиль подсказок для разного расширения

    function windowSize() {
        if ($(window).width() <= '720') {
            $('.quest__img').click(function () {
                $('.hints').css('animation-name', 'fadein');
                $('.hints').show();
                $('.blur').css('filter', 'blur(10px)');
            });
            $('.hints__hint').click(function () {
                let more = $(this).attr('data-target');
                $(`#${more}`).slideToggle('fast');
            });
            $('.hints__close').click(function () {
                $('.hints').css('animation-name', 'fadeout');
                 $('.blur').css('filter', 'none');
                 setTimeout(() => {
                    $('.hints').hide();
                }, 800)
            })
        } else {
            $('.quest__img').click(function () {
                let more = $(this).attr('data-target');
                $(`#${more}`).slideToggle('fast')
            });
        }
    };
    windowSize();

    //объект со стилями для переключения годов

    let styleYears = {

        activeColor: '#5eab42',
        activeBorder: '1px solid #5eab42',
        inactiveColor: '#a0a0a0',
        inactiveBorder: '1px solid #eaeaea',
    };

    // массив годов для переключения

    function getYears() {
        let years = [];
        $('.yearMenu .yearMenu__item').each((index, element) => {
            years.push(element);
        });
        console.log(years);
        return years;
    };

    // функция переключения блока с годами

    function switchYears() {
        let years = getYears();
        for (let m = 0; m < years.length; m++) {
            $(years[m]).click(function () {
                $(years).css('color', styleYears.inactiveColor);
                $(years).css('border', styleYears.inactiveBorder);

                $(years[m]).css('color', styleYears.activeColor);
                $(years[m]).css('border', styleYears.activeBorder);
            });
        };
    };
    switchYears();

    // работа экранов 


    // состояние первого экрана при открытие сайта 

    $('#itemOne').addClass('active');
    $('#iconOne').addClass('first');
    $('#backButton').css('display', 'none');


    // массив иконок с цифрами во вкладках шагов калькулятора

    function getIcons() {
        var icons = [];
        $('.calcMenu span').each((index, element) => {
            icons.push(element);
        });
        console.log(icons);
        return icons;
    };

    // массив экранов калькулятора

    function getCalcs() {
        var calcs = [];
        $('#calculator .none').each((index, element) => {
            calcs.push(element);
        });
        console.log(calcs);
        return calcs;
    };

    // массив вкладок шагов калькулятора

    function getItems() {
        var items = [];
        $('.calcMenu .menuItem').each((index, element) => {
            items.push(element);
        });
        console.log(items);
        return items;
    };

    // функция переключения вкладок шагов калькулятора

    function checkItems() {
        let items = getItems();
        let icons = getIcons();
        let calcs = getCalcs();
        for (let i = 0; i < items.length; i++) {
            $(items[i]).click(function () {
                $('.none').css('display', 'none');
                $('.menuItem').removeClass('active');
                $('.step').removeClass('first');
                $('#calc__footer').show();
                $(calcs[i]).css('display', 'block');
                $(items[i]).addClass('active');
                $(icons[i]).addClass('first');
                switch (i) {
                    case 0:
                        $('#backButton').css('display', 'none');
                        break;
                    case 1:
                        $('#backButton').css('display', 'block');
                        $('#footerButton').text('Получить вычет');
                        break;
                    case 2:
                        $('#calc__footer').hide();
                        break;
                }
            });
        }
    };
    checkItems();

    //

    $('.help').click(function () {
        $('.none').css('display', 'none');
        $('#calcFour').css('display', 'block');
        $('.menuItem').removeClass('active');
        $('.step').removeClass('first');
        $('#itemFour').addClass('active');
        $('#iconFour').addClass('first');
        $('#backButton').css('display', 'block');
    });



    // переключение шагов кнопкой вперед

    $('#footerButton').click(function () {
        let target = $('.menuItem.active').attr('data-target');
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        let items = getItems();
        let icons = getIcons();
        let calcs = getCalcs();
        $('.none').css('display', 'none');
        $('#backButton').css('display', 'block');
        $('.menuItem').removeClass('active');
        $('.step').removeClass('first');
        $('#calc__footer').show();
        switch (target) {
            case 'one':
                $(calcs[1]).css('display', 'block');
                $(items[1]).addClass('active');
                $(icons[1]).addClass('first');
                $('#footerButton').text('Получить вычет');
                break;
            case 'two':
                $(calcs[2]).css('display', 'block');
                $(items[2]).addClass('active');
                $(icons[2]).addClass('first');
                $('#calc__footer').hide();
                break;
        }

    });

    // переключение шагов кнопкой назад

    $('#backButton').click(function () {
        let target = $('.menuItem.active').attr('data-target');
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        let calcs = getCalcs();
        let items = getItems();
        let icons = getIcons();
        $('#backButton').css('display', 'none');
        $('.none').css('display', 'none');
        $('.step').removeClass('first');
        $('.menuItem').removeClass('active');
        switch (target) {
            case 'two':
                $(calcs[0]).css('display', 'block');
                $(items[0]).addClass('active');
                $(icons[0]).addClass('first');
                $('#footerButton').text('Продолжить');
                break;
        }
    });

    $('#agree').click(function () {
        console.log('hbkjnlkm;l,');
        if ($('#agree').is(':checked')) {
            console.log('ftgjh');
            $('.pens_about_work').slideToggle();

        } else {
            $('.pens_about_work').slideToggle();
        }
    });

    $('#date_build').mask("99.99.9999", {
        placeholder: "дд.мм.гггг"
    });



    // недвижимость
    $('.cat__check').click(function () {
        console.log('cat');
        let catcheck = $(this).attr('id');
        $(`[data-categories='${catcheck}']`).slideToggle();
        if (catcheck !== 'pensi__check') {
            $(this).closest('.category').toggleClass('category_active')

        }
    });



    $('.children__label').click(function () {
        let op = $(this).parent().next('.children__coll')


        $(op).slideToggle('fast')
    });

    //  количество детей  
    $('.coll__btn').click(function () {
        if ($(this).text() == '-') {
            if ($('.col__point').text() == '1') {
                $('.col__point').text('1')
            } else {
                let child = $('.col__point').text();
                child = +child - 1;
                $('.col__point').text(child);
                $('.children__pay .item__row').last().remove()
            }
        }
        if ($(this).text() == '+') {
            if ($('.col__point').text() == '10') {
                $('.col__point').text('10')
            } else {
                let child = $('.col__point').text();
                child = +child + 1;
                $('.col__point').text(`${child}`)
                $('.children__pay').append(`<div class="item__row"><div class="item__rowTitle">На обучение ${child} ребенка</div><div class="item__valueWrap ndfl__valueWrap"><input type="number" class="item__rowValue"></div></div>`)
            }
        }
    });

    // благотворительность 
    $('.charity__select').click(function () {
        console.log('char');
        $(this).toggleClass('select_active');
        $('.charity__choise').slideToggle();
    });


    $('.choise__item').click(function () {
        let choise = $(this).text();
        $('.charity__select').text(choise).css('color', '#000000');
        $('.charity__choise').slideToggle('fast');
        $('.charity__select').toggleClass('select_active');
        setTimeout(() => {
            $('.choise__label').slideDown('fast');
        }, 200)

    });


    // пенсионеры и их дела

    $('.year__item').click(function () {
        $(this).parent().find('div').removeClass('active-year');
        $(this).addClass('active-year');

        if ($(this).parent().hasClass('years__list')) {
            $('.this_year').text(" в " + $(this).attr('data-value') + " году");
        }
        if (($(this).parent().hasClass('years__list')) && ($(this).attr('data-value') == "2019")) {
            $('.year_error').show();
        } else {
            $('.year_error').hide();
        }
    });

    $('.year__item').click(function () {
        if ($(this).parent().find('.active-year')) {
            $('.for_year').text('за ' + $(this).attr('data-value') + " год")
        }
        if (($(this).attr('data-value') == "2015") && ($('#pensi__check').is(':checked'))) {
            // $('.categories__block .category').hide();
            $('.build').show();
        } else {
            $('.categories__block .category').show();
        }
    })
    $('.pension-years div').click(function () {
        let action_year = $(this).attr('data-value');
        if (action_year == "2014") {
            $('.years div.active-year').removeClass('active-year');
            $('.years').parent().addClass('hidden');
            $('.ndfl__block, .category').addClass('hidden');
            $('.pens').removeClass('hidden')
            // $('.pension-error').removeClass('hidden');
            $('.ndfl__block input').val('');
            $('.ndfl__block input').keyup();
        } else if (action_year == "2019") {
            $('.pension-error').addClass('hidden');
            $('.years div[data-value="2019"]').addClass('hidden');
            $('.years li').each(function () {

                if ($(this).attr('data-value') > action_year) {
                    $(this).addClass('hidden');
                    // console.log('first')
                } else if ($(this).attr('data-value') == "2019") {
                    $('.years div[data-value="2019"]').addClass('hidden');
                } else {
                    // console.log('third');

                    $(this).removeClass('hidden');
                }
            })

        } else {
            $('.years div.active-year').removeClass('active-year');
            $('.for_year, .this_year').text('');

            // $('.pension-error').addClass('hidden');
            $('.years').parent().removeClass('hidden');
            $('.years div').each(function () {

                if ($(this).attr('data-value') > action_year) {
                    $(this).addClass('hidden')
                } else {
                    $(this).removeClass('hidden');
                }
            })
        }
    });
    $('#pens__check').change(function () {
        if ($(this).is(':checked')) {
            $('.hidden__year').removeClass('hidden')
        } else {
            $('.hidden__year').addClass('hidden')
            $('.categories__block .category').show();
            $('.ndfl__block').removeClass('hidden');
            // $('.pension-error').addClass('hidden');
            $('.years').parent().removeClass('hidden');
            $('.pens').find('div.active-year').removeClass('active-year');
            $('.years div').not('.years div[data-value="2015"]').each(function () {
                $(this).removeClass('hidden');

            })
        }
    });
    $('#pensi__check').change(function () {
        if ($(this).is(':checked')) {
            $('.years div[data-value="2019"]').addClass('hidden')
        } else {
            $('#ndfl__block').removeClass('hidden');
            // $('.pension-error').addClass('hidden');
            $('#categories__block .category').show();
            $('.years').parent().removeClass('hidden');
            $('.pens').find('div.active-year').removeClass('active-year');
            $('.years div').not('.years div[data-value="2015"]').each(function () {
                $(this).removeClass('hidden');

            })
            $('.years div[data-value="2019"]').removeClass('hidden')
        }
    });


    // Подсчет удержанных НДФЛ без учета всех последующих факторов
    var for_me = 0;
    var for_childs = 0;
    var home_out_date;
    var retained = 0;
    var income_before = 0;
    var income_after = 0;
    var pension, property_limit, totalsum = 0,
        ipoteka = 0,
        property = 0,
        insurence = 0;
    studying = 0,
        heal = 0,
        charity = 0,
        investition = 0;

    function monthy() {
        // let month = parseInt($('#income_month').val().replace(/\s+/g, ''));
        income_after = parseInt($('#income_after').val().replace(/\s+/g, ''));
        income_before = parseInt($('#income_before').val().replace(/\s+/g, ''));
        $('#income_before').val(Math.round(month * 12));
        $('#income_after').val(Math.round(month * 12 * 0.87));
        income_before = parseInt($('#income_before').val().replace(/\s+/g, ''));
        retained = Math.round(income_before * 0.13);
        // console.log(income_after)
        // $('#extended').removeClass('hidden')
    }

    function get_total() {
        totalsum = property + studying + heal + insurence + charity + investition + ipoteka;
        if (totalsum > 0) {
            if (totalsum > 0) {
                $('.example__btn_sec').removeAttr('disabled').removeClass('disabled_button')
            } else {
                $('.example__btn_sec').attr('disabled', 'disabled').addClass('disabled_button');

            }
        }
        if (totalsum > retained) {
            $('.you_can').text(retained.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 "))
        } else {
            // console.log('you')
            // console.log(totalsum + ' total')
            // console.log(property_limit)
            $('.you_can').text(totalsum.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 "))
        }
    }


    $('.ndfl__block input').keyup(function () {
        if ($(this).attr('id') == "income_before") {
            if (($(this).val().replace(/\s+/g, '').length == 0) || (isNaN(parseInt($(this).val().replace(/\s+/g, ''))) == true)) {
                $('#your_income input').val("");
                retained = Math.round(0 * 0.13);
            } else {
                income_before = parseInt($('#income_before').val().replace(/\s+/g, ''));
                // $('#income_month').val(Math.round(income_before / 12));
                $('#income_after').val(Math.round(income_before * 0.87));
                retained = Math.round(income_before * 0.13);
                // $('#extended').removeClass('hidden')
            }

        } else if ($(this).attr('id') == "income_after") {

            if ($(this).val().replace(/\s+/g, '').length == 0) {
                $(this).val("");
                income_before = 0;

                income_after = 0;
                $('#income_before').val("")
                retained = Math.round(income_before * 0.13);
            } else {

                income_after = parseInt($('#income_after').val().replace(/\s+/g, ''));
                income_before = parseInt($('#income_before').val().replace(/\s+/g, ''));
                $('#income_before').val(Math.round(income_after / 0.87))
                income_before = parseInt($('#income_before').val().replace(/\s+/g, ''));
                retained = Math.round(income_before * 0.13);
                // console.log(income_after)
            }
        }
    })

    $('input').keyup(function () {

        if ((retained.length == 0) || (isNaN(retained) == true)) {
            retained = 0;
            $('.retained').text(retained.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
            $('.retain').text(retained.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
            get_total();
        } else {
            console.log('asdas')
            $('.retained').text(retained.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
            $('.retain').text(retained.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 '));
            get_total();
        }
    })
    // функция сброса расчета 
    function Nuller() {
        $('#income_month').val('');
        $('#income_before').val('');
        $('#income_after').val('');
        $('#property_summ').val('');
        $('.retained').text('0');
        $('.you_can').text('0')
    }
    // конец
    $('#mortgage_summ').keyup(function () {
        if ($('#build__check').is(':checked') && ($('#credit').is(':checked')) && (isNaN(parseInt($(this).val().replace(/\s+/g, ''))) == false)) {
            console.log('ипотека')
            if (parseInt($(this).val().replace(/\s+/g, '')) <= 3000000) {
                ipoteka = Math.round(parseInt($(this).val().replace(/\s+/g, '')) * 0.13);
                get_total()
            } else {
                ipoteka = 390000;
                get_total()
            }
        } else {
            ipoteka = 0;
            get_total()
        }
    });

    $('#property_summ').keyup(function () {
        if (Math.round(parseInt($(this).val().replace(/\s+/g, '')) * 0.13) > property_limit) {
            property = property_limit;
            get_total();
        } else if (isNaN(parseInt($(this).val().replace(/\s+/g, ''))) == true) {
            property = 0;
        } else {
            property = Math.round(parseInt($(this).val().replace(/\s+/g, '')) * 0.13);
            get_total()
        }
    });

    $('#date_build').change(function () {
        let str = $(this).val().replace(/\s+/g, '');
        home_out_date = str[6] + str[7] + str[8] + str[9];
        if (parseInt(home_out_date) < 2003) {
            property_limit = 78000;
        } else if ((parseInt(home_out_date) >= 2003) && (parseInt(home_out_date) < 2008)) {
            property_limit = 130000;
        } else if (parseInt(home_out_date) >= 2008) {
            property_limit = 260000;
        }
        // else if ((parseInt(home_out_date) >= 2014)) {
        //     property_limit = 260000;
        // plimit = Math.round(3000000 * 0.13);
        // }
        $('#property_summ').val("")

    });

    // обучение

    $(document).on('keyup', '.study input', function () {
        console.log('sss');
        if (($('#study__check').is(':checked')) && ($('#myself').is(':checked')) && ($(this).parent().hasClass('mylearn'))) {
            console.log('в учебе')
            if (parseInt($(this).val().replace(/\s+/g, '')) < 120000) {
                console.log('< 120000')
                for_me = Math.round(parseInt($(this).val().replace(/\s+/g, '')) * 0.13);
            } else {
                console.log('else')
                for_me = 15600;
            }
            studying = for_me + for_childs;

        } else if (($('#study__check').is(':checked')) && ($('#children').is(':checked')) && ($(this).parent().parent().parent().hasClass('children__pay'))) {
            for_childs = 0;
            $('.children__pay input').each(function () {

                if (parseInt($(this).val().replace(/\s+/g, '')) <= 50000) {

                    for_childs += Math.round(parseInt($(this).val().replace(/\s+/g, '')) * 0.13);

                } else if (parseInt($(this).val().replace(/\s+/g, '')) > 50000) {
                    for_childs += 6500;


                }

            })
        } else {
            for_me = 0;
            for_childs = 0;

        }
        studying = for_me + for_childs;
        get_total();
        $('#studyinghidden').val(studying);

    });
    // конец обучения

    var usual = 0;
    var expensive = 0;
    $('.cat__label').change(function () {
        if (($(this).is(':checked') == false) && ($(this).attr('id') == "heal__check")) {
            usual = 0;
            expensive = 0;
            treatment = usual + expensive;
            get_total();
        } else if (($(this).is(':checked') == false) && ($(this).attr('id') == "invest__check")) {
            investition = 0;
            get_total();
        } else if (($(this).is(':checked') == false) && ($(this).attr('id') == "strah__check")) {
            insurence = 0;
            get_total();
        } else if (($(this).is(':checked') == false) && ($(this).attr('id') == "study__check")) {
            for_me = 0;
            for_childs = 0;
            studying = for_me + for_childs;
            get_total();
        } else if (($(this).is(':checked') == false) && ($(this).attr('id') == "build__check")) {
            property = 0;
            ipoteka = 0;
            get_total();
        } else if (($(this).is(':checked') == false) && ($(this).attr('id') == "charity__check")) {
            charity = 0;
            get_total()
        }

    });


    // //  Лечение 

    //  $('.title-usual__check').change(function() {
    //      if(!$('.usual_summ').hasClass('hidden')){
    //          usual = 0;
    //      }
    //  });
    //  $('#expensive').change(function() {
    //      if(!$('.expensive_summ').hasClass('hidden')){
    //          expensive = 0;
    //     }
    //  });


    $('.heal__inside input').keyup(function () {

        // console.log(treatment);
        if ($('#heal__check').is(':checked') && ($('#norm__heal').is(':checked')) && ($(this).parent().parent().hasClass('normal__heal'))) {
            console.log('inheal')
            if (parseInt($(this).val().replace(/\s+/g, '')) < 120000) {
                console.log('normal<12000')
                usual = Math.round(parseInt($(this).val().replace(/\s+/g, '')) * 0.13);
                // console.log(usual);
            } else {
                usual = 15600;


            }

        } else if ($('#heal__check').is(':checked') && ($('#expensive').is(':checked')) && ($(this).parent().parent().hasClass('expensive_heal')) && (isNaN(parseInt($(this).val().replace(/\s+/g, ''))) == false)) {
            expensive = Math.round(parseInt($(this).val().replace(/\s+/g, '')) * 0.13);

        } else {
            console.log('0000000')
            usual = 0;
            expensive = 0;

        }
        heal = usual + expensive;
        console.log('heal', heal)
        get_total()
    })
    // благотворительность
    $('.charity input').keyup(function () {
        console.log('charity');
        if ($('#charity__check').is(':checked')) {

            charity = Math.round(parseInt($(this).val().replace(/\s+/g, '')) * 0.13);
            if (charity >= retained) {
                charity = Math.round(retained * 0.25);
            } else if ((charity < retained) && (isNaN(charity) == false) && (charity < retained * 0.25)) {
                charity = Math.round(parseInt($(this).val().replace(/\s+/g, '')) * 0.13);
            } else if (charity >= retained * 0.25) {
                charity = Math.round(retained * 0.25);

            } else {
                charity = 0;
            }
        } else {
            retained = parseInt($('#income_before').val().replace(/\s+/g, '')) - parseInt($('#income_after').val().replace(/\s+/g, ''))
        }
        get_total()
    })

    // Инвестиции 
    $('.invest input').keyup(function () {
        console.log('invest');
        if ($('#invest__check').is(':checked')) {
            if (parseInt($(this).val().replace(/\s+/g, '')) < 400000) {
                investition = Math.round(parseInt($(this).val().replace(/\s+/g, '')) * 0.13);

            } else if (isNaN(parseInt($(this).val().replace(/\s+/g, ''))) == true) {
                investition = 0;
            } else {
                investition = 52000;
            }
        } else {
            investition = 0;
        }
        get_total()
    });

    // страхование 
    $('.strah__open').change(function () {
        if (($(this).is(":checked")) && ($('#strah1__check').is(':checked')) && ($('#strah2__check').is(':checked'))) {
            $('.strah__info').slideDown('fast');
        } else {
            $('.strah__info').slideUp('fast');
        }
    });

    $('.strah__inside input').keyup(function () {
        if ($('#strah__check').is(':checked') && ($(this).val() > 0)) {
            console.log('strah')
            if (parseInt($(this).val().replace(/\s+/g, '')) < 120000) {
                insurence = Math.round(+($(this).val().replace(/\s+/g, '')) * 0.13);
                // console.log(usual);
            } else {
                insurence = 15600;


            }
        } else {
            insurence = 0;
        }
        get_total()
        // console.log(insurence);
    })
});