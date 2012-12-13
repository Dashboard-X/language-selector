/*
 * Language Selector - http://www.soyos.net/language-selector-a-la-google.html
 *
 * Uses the Language Selector 
 * to offer your Website in multiple languages
 *
 * Copyright (c) 2010 Christian Goldbach
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */
            $(document).ready(function(){
                $.translate(function(){ 
                    function translateTo( destLang ){ 
                        originalColor = '#262c33';
                        var tlc = $.translate().toLanguageCode 
                        if( tlc( destLang ) == "de" && tlc($.cookie("destLang")) == "de") {
                          $('#flags ul').find('a').removeClass('load');
                          return;
                        }
                        $('#article').translate( 'de', destLang, {  
                            not: '#jq-translate-ui', 
                            fromOriginal:true,   
                            start: function(){ 
                                $('#article').css('color', '#a0a8b2');
                                $('#throbber').show() 
                            },   
                            complete: function(){ 
                                $('#article').css('color', originalColor);
                                $('#throbber').hide();
                                $('#flags ul').find('a.load').removeClass('load').addClass('finish');
                                //Change Contact Ad Information
                                if (destLang == 'de') {
                                  $('#contact-ad').html('<span class="ico"><img src="images/contact-ad-icon-phone.gif">+49</span>'); 
                                } else if (destLang == 'es') {
                                  $('#contact-ad').html('<span class="ico"><img src="images/contact-ad-icon-phone.gif">+34</span>'); 
                                } else {
                                  $('#contact-ad').html('<span>info@....net</span>'); 
                                }
                            },  
                            error: function(){ 
                                $('#article').css('color', originalColor);
                                $('#throbber').hide() 
                            } 
                        }); 
                    } 
                    $('#flags ul').find('a').click(function(){
                        $('#flags ul').find('a').removeClass('finish');
                        $(this).addClass('load');
                        var lang = $(this).attr('id');
                        translateTo( lang );
                        $.cookie('destLang', lang );
                        return false;
                    }); 
                    var destLang = $.cookie('destLang'); 
                    if( destLang ) translateTo( destLang ); 
                }); 
            })