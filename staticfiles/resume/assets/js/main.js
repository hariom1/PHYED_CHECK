(function($) {
    "use strict";
    jQuery(document).on('ready', function() {
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 120) {
                $('.navbar-area').addClass("is-sticky");
            } else {
                $('.navbar-area').removeClass("is-sticky");
            }
        });
        $(".burger-menu").on('click', function() {
            $('.sidebar-modal').toggleClass('active');
        });
        $(".sidebar-modal-close-btn").on('click', function() {
            $('.sidebar-modal').removeClass('active');
        });
        $('.close-btn').on('click', function() {
            $('.search-overlay').fadeOut();
            $('.search-btn').show();
            $('.close-btn').removeClass('active');
        });
        $('.search-btn').on('click', function() {
            $(this).hide();
            $('.search-overlay').fadeIn();
            $('.close-btn').addClass('active');
        });
        jQuery('.mean-menu').meanmenu({
            meanScreenWidth: "991"
        });
        $(function() {
            $('.default-btn').on('mouseenter', function(e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({
                    top: relY,
                    left: relX
                })
            }).on('mouseout', function(e) {
                var parentOffset = $(this).offset(),
                    relX = e.pageX - parentOffset.left,
                    relY = e.pageY - parentOffset.top;
                $(this).find('span').css({
                    top: relY,
                    left: relX
                })
            });
        });
        $('.odometer').appear(function(e) {
            var odo = $(".odometer");
            odo.each(function() {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });
        $('.popup-btn').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
            }
        });
        $('.projects-slides').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            autoplayHoverPause: true,
            autoplay: true,
            margin: 30,
            navText: ["<i class='flaticon-left-chevron'></i>", "<i class='flaticon-right-chevron'></i>"],
            responsive: {
                0: {
                    items: 1,
                },
                576: {
                    items: 2,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 3,
                }
            }
        });
        (function($) {
            $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
            $('.tab ul.tabs li a').on('click', function(g) {
                var tab = $(this).closest('.tab'),
                    index = $(this).closest('li').index();
                tab.find('ul.tabs > li').removeClass('current');
                $(this).closest('li').addClass('current');
                tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
                tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
                g.preventDefault();
            });
        })(jQuery);
        $('.popup-youtube').magnificPopup({
            disableOn: 320,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
        $('.feedback-slides').owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            autoplayHoverPause: true,
            autoplay: true,
            navText: ["<i class='flaticon-left-chevron'></i>", "<i class='flaticon-right-chevron'></i>"],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2,
                },
                1200: {
                    items: 3,
                },
                1550: {
                    items: 4,
                }
            }
        });
        $('.partner-slides').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            autoplayHoverPause: true,
            autoplay: true,
            margin: 30,
            navText: ["<i class='flaticon-left-chevron'></i>", "<i class='flaticon-right-chevron'></i>"],
            responsive: {
                0: {
                    items: 2,
                },
                576: {
                    items: 3,
                },
                768: {
                    items: 4,
                },
                1200: {
                    items: 5,
                }
            }
        });
        $('select').niceSelect();
        $('.input-counter').each(function() {
            var spinner = jQuery(this),
                input = spinner.find('input[type="text"]'),
                btnUp = spinner.find('.plus-btn'),
                btnDown = spinner.find('.minus-btn'),
                min = input.attr('min'),
                max = input.attr('max');
            btnUp.on('click', function() {
                var oldValue = parseFloat(input.val());
                if (oldValue >= max) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue + 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
            btnDown.on('click', function() {
                var oldValue = parseFloat(input.val());
                if (oldValue <= min) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue - 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
        });
        $(function() {
            $('.accordion').find('.accordion-title').on('click', function() {
                $(this).toggleClass('active');
                $(this).next().slideToggle('fast');
                $('.accordion-content').not($(this).next()).slideUp('fast');
                $('.accordion-title').not($(this)).removeClass('active');
            });
        });
        $(".newsletter-form").validator().on("submit", function(event) {
            if (event.isDefaultPrevented()) {
                formErrorSub();
                submitMSGSub(false, "Please enter your email correctly.");
            } else {
                event.preventDefault();
            }
        });

        function callbackFunction(resp) {
            if (resp.result === "success") {
                formSuccessSub();
            } else {
                formErrorSub();
            }
        }

        function formSuccessSub() {
            $(".newsletter-form")[0].reset();
            submitMSGSub(true, "Thank you for subscribing!");
            setTimeout(function() {
                $("#validator-newsletter").addClass('hide');
            }, 4000)
        }

        function formErrorSub() {
            $(".newsletter-form").addClass("animated shake");
            setTimeout(function() {
                $(".newsletter-form").removeClass("animated shake");
            }, 1000)
        }

        function submitMSGSub(valid, msg) {
            if (valid) {
                var msgClasses = "validation-success";
            } else {
                var msgClasses = "validation-danger";
            }
            $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
        }
        $(".newsletter-form").ajaxChimp({
            url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",
            callback: callbackFunction
        });
        $(function() {
            $(window).on('scroll', function() {
                var scrolled = $(window).scrollTop();
                if (scrolled > 600) $('.go-top').addClass('active');
                if (scrolled < 600) $('.go-top').removeClass('active');
            });
            $('.go-top').on('click', function() {
                $("html, body").animate({
                    scrollTop: "0"
                }, 500);
            });
        });
    });
    $(window).on('load', function() {
        if ($(".wow").length) {
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 20,
                mobile: true,
                live: true,
            });
            wow.init();
        }
    });
    $(window).on('load', function() {
        $('.preloader').addClass('preloader-deactivate');
    });
}(jQuery));
var offsetcv = 12;

function loadMoreCVTemplate() {
    $("#cvmorebtn").html("Loading...");
    $.get("action/load_more_cv_temp.php?offset=" + offsetcv + '&limit=' + 6, function(data) {
        if (data.trim() == "none") {
            swal("Oops", "No Template Found ...", "error");
            $("#cvmorebtn").html("Load More");
        } else {
            $("#loadresumetemp").append(data);
            $("#cvmorebtn").html("Load More");
        }
    });
    offsetcv += 6;
}

function loadMoreCVTemplateInner() {
    $("#cvmorebtn").html("Loading...");
    $.get("../action/load_more_cv_temp_inner.php?offset=" + offsetcv + '&limit=' + 6, function(data) {
        if (data.trim() == "none") {
            swal("Oops", "No Template Found ...", "error");
            $("#cvmorebtn").html("Load More");
        } else {
            $("#loadresumetemp").append(data);
            $("#cvmorebtn").html("Load More");
        }
    });
    offsetcv += 6;
}
var offsetletter = 12;

function loadMoreLetterTemplate() {
    $("#lettermorebtn").html("Loading...");
    $.get("action/load_more_letter_temp.php?offset=" + offsetletter + '&limit=' + 6, function(data) {
        if (data.trim() == "none") {
            swal("Oops", "No Template Found ...", "error");
            $("#lettermorebtn").html("Load More");
        } else {
            $("#loadlettertemp").append(data);
            $("#lettermorebtn").html("Load More");
        }
    });
    offsetletter += 6;
}

function loadMoreLetterTemplateInner() {
    $("#lettermorebtn").html("Loading...");
    $.get("../action/load_more_letter_temp_inner.php?offset=" + offsetletter + '&limit=' + 6, function(data) {
        if (data.trim() == "none") {
            swal("Oops", "No Template Found ...", "error");
            $("#lettermorebtn").html("Load More");
        } else {
            $("#loadlettertemp").append(data);
            $("#lettermorebtn").html("Load More");
        }
    });
    offsetletter += 6;
}
var offsetwebsite = 12;

function loadMoreWebsiteTemplate() {
    $("#websitemorebtn").html("Loading...");
    $.get("action/load_more_website_temp.php?offset=" + offsetwebsite + '&limit=' + 6, function(data) {
        if (data.trim() == "none") {
            swal("Oops", "No Template Found ...", "error");
            $("#websitemorebtn").html("Load More");
        } else {
            $("#loadwebsitetemp").append(data);
            $("#websitemorebtn").html("Load More");
        }
    });
    offsetwebsite += 6;
}

function loadMoreWebsiteTemplateinner() {
    $("#websitemorebtn").html("Loading...");
    $.get("../action/load_more_website_temp_inner.php?offset=" + offsetwebsite + '&limit=' + 6, function(data) {
        if (data.trim() == "none") {
            swal("Oops", "No Template Found ...", "error");
            $("#websitemorebtn").html("Load More");
        } else {
            $("#loadwebsitetemp").append(data);
            $("#websitemorebtn").html("Load More");
        }
    });
    offsetwebsite += 6;
}
var offsetblog = 12;

function loadMoreBlogPost() {
    $("#blogmorebtn").html("Loading...");
    $.get("action/load_more_blog_post.php?offset=" + offsetblog + '&limit=' + 6, function(data) {
        if (data.trim() == "none") {
            swal("Oops", "No Template Found ...", "error");
            $("#blogmorebtn").html("Load More");
        } else {
            $("#loadblogtemp").append(data);
            $("#blogmorebtn").html("Load More");
        }
    });
    offsetblog += 6;
}
var offsetbloginner = 12;

function loadMoreBlogPostinner() {
    $("#blogmorebtn").html("Loading...");
    $.get("../action/load_more_blog_post_inner.php?offset=" + offsetbloginner + '&limit=' + 6, function(data) {
        if (data.trim() == "none") {
            swal("Oops", "No Template Found ...", "error");
            $("#blogmorebtn").html("Load More");
        } else {
            $("#loadblogtemp").append(data);
            $("#blogmorebtn").html("Load More");
        }
    });
    offsetbloginner += 6;
}
var offsetblogcat = 10;

function loadMoreBlogPostCategory(category) {
    $("#blogmorebtncat").html("Loading...");
    $.get("../action/load_more_blog_post_category.php?category=" + category + "&offset=" + offsetblogcat + '&limit=' + 6, function(data) {
        if (data.trim() == "none") {
            swal("Oops", "No Data Found ...", "error");
            $("#blogmorebtncat").html("Load More");
        } else {
            $("#loadmorepostcat").append(data);
            $("#blogmorebtncat").html("Load More");
        }
    });
    offsetblogcat += 6;
}
var offsetblogsearch = 10;

function loadMoreBlogPostSearch(search) {
    $("#blogmorebtnsearch").html("Loading...");
    $.get("../action/load_more_blog_post_search.php?search=" + search + "&offset=" + offsetblogsearch + '&limit=' + 6, function(data) {
        if (data.trim() == "none") {
            swal("Oops", "No Data Found ...", "error");
            $("#blogmorebtnsearch").html("Load More");
        } else {
            $("#loadmorepostsearch").append(data);
            $("#blogmorebtnsearch").html("Load More");
        }
    });
    offsetblogsearch += 6;
}
var offsetjob = 24;

function loadMoreJob(userCountry) {
    $("#jobmorebtn").html("Loading...");
    $.get("action/load_more_job.php?country=" + userCountry + "&offset=" + offsetjob + '&limit=' + 12, function(data) {
        if (data.trim() == "none") {
            swal("Oops", "No job Found ...", "error");
            $("#jobmorebtn").html("Load More");
        } else {
            $("#loadmorejobs").append(data);
            $("#jobmorebtn").html("Load More");
        }
    });
    offsetjob += 12;
}
var offsetjobinnner = 24;

function loadMoreJobInner(userCountry) {
    $("#jobmorebtn").html("Loading...");
    $.get("../action/load_more_job_inner.php?userCountry=" + userCountry + "&offset=" + offsetjobinnner + '&limit=' + 12, function(data) {
        if (data.trim() == "none") {
            swal("Oops", "No job Found ...", "error");
            $("#jobmorebtn").html("Load More");
        } else {
            $("#loadmorejobs").append(data);
            $("#jobmorebtn").html("Load More");
        }
    });
    offsetjobinnner += 12;
}
var offsetjobinnnertwo = 24;

function loadMoreJobInnerTwo(userCountry) {
    $("#jobmorebtn").html("Loading...");
    $.get("../action/load_more_job_inner2.php?userCountry=" + userCountry + "&offset=" + offsetjobinnnertwo + '&limit=' + 12, function(data) {
        if (data.trim() == "none") {
            swal("Oops", "No job Found ...", "error");
            $("#jobmorebtn").html("Load More");
        } else {
            $("#loadmorejobs").append(data);
            $("#jobmorebtn").html("Load More");
        }
    });
    offsetjobinnnertwo += 12;
}
var offsetjobsearch = 15;

function loadMoreJobSearch(thetextsearch, thelocation) {
    $("#jobsearchbtn").html("Loading...");
    $.get("../action/load_more_job_search.php?thetextsearch=" + thetextsearch + "&thelocation=" + thelocation + "&offset=" + offsetjobsearch + '&limit=' + 9, function(data) {
        if (data.trim() == "none") {
            swal("Oops", "No job Found ...", "error");
            $("#jobsearchbtn").html("Load More");
        } else {
            $("#loadmorejobssearch").append(data);
            $("#jobsearchbtn").html("Load More");
        }
    });
    offsetjobsearch += 9;
}
var offsetjobcat = 15;

function loadMoreJobCategory(category, country) {
    $("#jobmorecatbtn").html("Loading...");
    $.get("../action/load_more_job_category.php?category=" + category + "&country=" + country + "&offset=" + offsetjobcat + '&limit=' + 9, function(data) {
        if (data.trim() == "none") {
            swal("Oops", "No job Found ...", "error");
            $("#jobmorecatbtn").html("Load More");
        } else {
            $("#loadmorejobscategory").append(data);
            $("#jobmorecatbtn").html("Load More");
        }
    });
    offsetjobcat += 9;
}

function thedownload() {
    $("#thedownload").html("Processing...");
    setTimeout(function() {
        swal("Downloaded!", "File has been downloaded to the Document section of your device !", "success");
        $("#thedownload").html("Download Again");
    }, 3000);
}
var offsetWordTemp = 12;

function loadMoreWordTemp() {
    $("#loadmoreWordtempbtn").html("Loading...");
    $.get("../action/load_more_word_temp.php?offset=" + offsetWordTemp + '&limit=' + 9, function(data) {
        if (data.trim() == "none") {
            swal("Oops", "No template Found ...", "error");
            $("#loadmoreWordtempbtn").html("Load More");
        } else {
            $("#showloadwordtemp").append(data);
            $("#loadmoreWordtempbtn").html("Load More");
        }
    });
    offsetWordTemp += 9;
}
var offsetWordTempInner = 12;

function loadMoreWordTempInner() {
    $("#loadmoreWordtempbtn").html("Loading...");
    $.get("../action/load_more_word_temp_inner.php?offset=" + offsetWordTempInner + '&limit=' + 9, function(data) {
        if (data.trim() == "none") {
            swal("Oops", "No template Found ...", "error");
            $("#loadmoreWordtempbtn").html("Load More");
        } else {
            $("#showloadwordtemp").append(data);
            $("#loadmoreWordtempbtn").html("Load More");
        }
    });
    offsetWordTempInner += 9;
}
var offsetWordCategory = 12;

function loadMoreTempCategory(tempcate, temptype) {
    $("#loadmoreWordtempCategorybtn").html("Loading...");
    $.get("../action/load_more_word_temp_category.php?offset=" + offsetWordCategory + '&limit=' + 9 + '&tempcate=' + tempcate + '&temptype=' + temptype, function(data) {
        if (data.trim() == "none") {
            swal("Oops", "No template Found ...", "error");
            $("#loadmoreWordtempCategorybtn").html("Load More");
        } else {
            $("#showloadwordtemp").append(data);
            $("#loadmoreWordtempCategorybtn").html("Load More");
        }
    });
    offsetWordCategory = 9;
}
var offsetWordCategoryinner = 12;

function loadMoreTempCategoryInner(tempcate, temptype) {
    $("#loadmoreWordtempCategorybtn").html("Loading...");
    $.get("../action/load_more_word_temp_category_inner.php?offset=" + offsetWordCategoryinner + '&limit=' + 9 + '&tempcate=' + tempcate + '&temptype=' + temptype, function(data) {
        if (data.trim() == "none") {
            swal("Oops", "No template Found ...", "error");
            $("#loadmoreWordtempCategorybtn").html("Load More");
        } else {
            $("#showloadwordtemp").append(data);
            $("#loadmoreWordtempCategorybtn").html("Load More");
        }
    });
    offsetWordCategoryinner = 9;
}
var offsetWordType = 12;

function loadMoreTempType(temptype, tempcate) {
    $("#loadmoreWordtempCategorybtn").html("Loading...");
    $.get("../action/load_more_word_temp_type.php?offset=" + offsetWordType + '&limit=' + 9 + '&tempcate=' + tempcate + '&temptype=' + temptype, function(data) {
        if (data.trim() == "none") {
            swal("Oops", "No template Found ...", "error");
            $("#loadmoreWordtempCategorybtn").html("Load More");
        } else {
            $("#showloadwordtemp").append(data);
            $("#loadmoreWordtempCategorybtn").html("Load More");
        }
    });
    offsetWordType = 9;
}
var offsetWordTypeInner = 12;

function loadMoreTempTypeInner(temptype, tempcate) {
    $("#loadmoreWordtempCategorybtn").html("Loading...");
    $.get("../action/load_more_word_temp_type_inner.php?offset=" + offsetWordTypeInner + '&limit=' + 9 + '&tempcate=' + tempcate + '&temptype=' + temptype, function(data) {
        if (data.trim() == "none") {
            swal("Oops", "No template Found ...", "error");
            $("#loadmoreWordtempCategorybtn").html("Load More");
        } else {
            $("#showloadwordtemp").append(data);
            $("#loadmoreWordtempCategorybtn").html("Load More");
        }
    });
    offsetWordTypeInner = 9;
}

function loadTempCate() {
    var tempcate = document.getElementById("templatecategory").value;
    var temptype = document.getElementById("templatetype").value;
    if (tempcate.trim() == "") {
        console.log(tempcate);
    } else {
        $.get("../action/load_word_temp_cate.php?tempcate=" + tempcate + '&temptype=' + temptype, function(data) {
            if (data.trim() == "none") {
                swal("Oops", "No template Found ...", "error");
            } else {
                $("#showWordTemp").html(data);
            }
        });
    }
}

function loadTempCateInner() {
    var tempcate = document.getElementById("templatecategory").value;
    var temptype = document.getElementById("templatetype").value;
    if (tempcate.trim() == "") {
        console.log(tempcate);
    } else {
        $.get("../action/load_word_temp_cate_inner.php?tempcate=" + tempcate + '&temptype=' + temptype, function(data) {
            if (data.trim() == "none") {
                swal("Oops", "No template Found ...", "error");
            } else {
                $("#showWordTemp").html(data);
            }
        });
    }
}

function loadTempType() {
    var tempcate = document.getElementById("templatecategory").value;
    var temptype = document.getElementById("templatetype").value;
    if (temptype.trim() == "") {
        console.log(temptype);
    } else {
        $.get("../action/load_word_temp_type.php?tempcate=" + tempcate + '&temptype=' + temptype, function(data) {
            if (data.trim() == "none") {
                swal("Oops", "No template Found ...", "error");
            } else {
                $("#showWordTemp").html(data);
            }
        });
    }
}

function loadTempTypeInner() {
    var tempcate = document.getElementById("templatecategory").value;
    var temptype = document.getElementById("templatetype").value;
    if (temptype.trim() == "") {
        console.log(temptype);
    } else {
        $.get("../action/load_word_temp_type_inner.php?tempcate=" + tempcate + '&temptype=' + temptype, function(data) {
            if (data.trim() == "none") {
                swal("Oops", "No template Found ...", "error");
            } else {
                $("#showWordTemp").html(data);
            }
        });
    }
}

function freeWordTemplatedownload() {
    var name = document.getElementById("buyernamefree").value;
    var email = document.getElementById("buyeremailfree").value;
    if (name.trim() == "") {
        swal("Oops", "Please enter your name", "error");
        return false;
    } else if (email.trim() == "") {
        swal("Oops", "Please enter your Email Address", "error");
        return false;
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        swal("", "You have entered an invalid email address!", "error");
        return false;
    } else {
        $("#freeFrom").hide();
        $("#freeUsername").html(name);
        $("#freedownloaddiv").show();
    }
}

function saveWordTempDownloadFree(temp_name, the_country) {
    var name = document.getElementById("buyernamefree").value;
    var email = document.getElementById("buyeremailfree").value;
    $.get("../action/save_word_temp_download.php?name=" + name + "&email=" + email + "&temp_name=" + temp_name + "&the_country=" + the_country, function(data) {
        console.log(data);
    });
}

function buyWordTemplatePayStack(price, temp_name, the_country) {
    var name = document.getElementById("buyername").value;
    var email = document.getElementById("buyeremail").value;
    if (name.trim() == "") {
        swal("Oops", "Please enter your name", "error");
        return false;
    } else if (email.trim() == "") {
        swal("Oops", "Please enter your Email Address", "error");
        return false;
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
        swal("", "You have entered an invalid email address!", "error");
        return false;
    } else {
        makepaymentPayStack(price, temp_name, email, name, the_country);
    }
}

function makepaymentPayStack(price, temp_name, email, name, the_country) {
    $("#payment_btn").html(" Processing Please wait ...");
    var handler = PaystackPop.setup({
        key: 'pk_live_3c6b24b3ba16471c18e1710c5003867d9fe0a223',
        email: email,
        amount: price + "00",
        ref: '' + Math.floor((Math.random() * 1000000000) + 1),
        metadata: {
            custom_fields: [{
                display_name: "Mobile Number",
                variable_name: "mobile_number",
                value: "+234"
            }]
        },
        callback: function(response) {
            $("#payment_btn").html("Make Payment");
            paymentForWordTemp(price, temp_name, email, name, the_country);
        },
        onClose: function() {
            $("#payment_btn").html("Make Payment");
            paymentFail();
        }
    });
    handler.openIframe();
}

function paymentForWordTemp(price, temp_name, email, name, the_country) {
    $.get("../action/has_paid_word_temp.php?price=" + price + "&temp_name=" + temp_name + "&email=" + email + "&name=" + name + "&the_country=" + the_country, function(data) {
        $("#wordTempPaymentModal").html(data);
    });
}

function paymentFail() {
    swal("Payment error", "There is an error with your order..", "error");
}

function saveWordTempDownload(name, email, temp_name, the_country) {
    $.get("../action/save_word_temp_download.php?name=" + name + "&email=" + email + "&temp_name=" + temp_name + "&the_country=" + the_country, function(data) {
        console.log(data);
    });
}

function convertUrlToPdf() {
    var theurl = document.getElementById("theurl").value;
    if (theurl.trim() == "") {
        swal("Url error", "Please Enter a Url", "error");
    } else {
        $("#convert_btn").html("Processing...");
        $("#showdownloadlink").html("");
        $.get("../app/pdfapi/url_to_pdf.php?theurl=" + theurl, function(data) {
            $("#showdownloadlink").html(data);
            $("#convert_btn").html("Convert");
        });
    }
}

function convertUrlToImage() {
    var theurl = document.getElementById("theurl").value;
    if (theurl.trim() == "") {
        swal("Url error", "Please Enter a Url", "error");
    } else {
        $("#convert_btn").html("Processing...");
        $("#showdownloadlink").html("");
        $.get("../app/pdfapi/url_to_image.php?theurl=" + theurl, function(data) {
            $("#showdownloadlink").html(data);
            $("#convert_btn").html("Convert");
        });
    }
}