var btnTranslate= document.querySelector("#btn-translate") ;
var txtArea= document.querySelector("#inputText");
var outputDiv= document.querySelector("#output");
var serverURL= "https://api.funtranslations.com/translate/yoda.json";

function getTranslationURL(text){
    return serverURL+"?"+"text="+text;
}

function errorHandler(error) {
    console.log("error occured",error)
    alert("Something wrong with the server! Try again after some time")
}

function clickHandler(){
    var inputTxt= txtArea.value;


     fetch(getTranslationURL(inputTxt))
        .then(response => response.json())
        .then (json => {
            var translatedTxt =  json.contents.translated;
            outputDiv.innerText= translatedTxt
        })
        .catch(errorHandler)
};

btnTranslate.addEventListener ("click", clickHandler)
