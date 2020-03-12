// get the json data
const jsonData = $.getJSON("/data/data.json", (data) => {

    // get the url of http request, find the topic
    const url = window.location.href;
    const link = url.substr(url.lastIndexOf("/") + 1);
    const topic = data.topics[`${link}`]
    if(topic != undefined){
        // display the information in the right position in html
        $('.pageTitle').html(topic.title)
        $('.description').html(`<p>${topic.description}</p>`)
        $('.codeExample').html(topic.code_example)
    } else { // if topic is not found, show 404
        $('.pageTitle').text("404 Page Not Found")
        $('.description').html(`<p>How to pronounce my name, Yewon?</p> <p>[ yeah + won ]</p>`)
        $('.codeExample').html()
        $('.subTopics').html()
    }

})

$(document).ready(function() {

    $(".collapsed").click(() => {
        console.log($(this).data("target"))
    })

})