// get the json data
const jsonData = $.getJSON("/data/data.json", (data) => {

    // get the url of http request, find the topic
    const url = window.location.href;
    const link = url.substr(url.lastIndexOf("/") + 1);
    const topic = data.topics[`${link}`]
    console.log("data", data)
    console.log("link", link)
    console.log("topic", topic)
    if(topic != undefined){
        // display the information in the right position in html
        $('.pageTitle').html(topic.title)
        $('.description').html(`<p>${topic.description}</p>`)
        $('.codeExample').html(`<p>Code example</p><image class="image" src=${topic.code_example}></image>`)
        // if there are sub topics
        if (topic.sub_topics) {
            const subTopics = topic.sub_topics
            let listOfTopics = Object.values(subTopics)
            let numOfTopics = listOfTopics.length
        
            for(i = 0; i < numOfTopics; i++) {
                $("#accordionForSubTopics").append(
                    `<div class="card">
                    <div class="card-header" id="heading${i}">
                      <h2 class="mb-0">
                        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
                          ${listOfTopics[i].title}
                        </button>
                      </h2>
                    </div>
                
                    <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordionForSubTopics">
                      <div class="card-body">                        
                        ${listOfTopics[i].description}
                         <image class="image" src=${listOfTopics[i].code_example}></image>
                      </div>
                    </div>
                  </div>`
                )
            }

        }

    } else { // if topic is not found, show 404
        $('.pageTitle').text("404 Page Not Found")
        $('.description').html(`<p>How to pronounce my name, Yewon?</p> <p>[ yeah + won ]</p>`)
        $('.codeExample').html()
        $('.subTopics').html()
    }


})
