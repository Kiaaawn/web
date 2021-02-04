function doctors(data) {
  let doctor = [];
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);

    doctor[i] = `
    <a href="../ExpertPage/expertPage.html/id=${data[i].id}">
    <div class="m-card">
    <div class="m-right">
    <div class="m-cardpic">
      <img src="${data[i].avatar}" width="100%" />
    </div>
    <div class="m-cardname">
      <h3 style="margin: 0">${data[i].name}</h3>
      <p style="margin: 0">${data[i].spec}</p>
      <p style="color: #6f7895">${data[i].comment_text}</p>
    </div>
  </div>
  <div class="m-left">
              <div class="m-details">
                <p style="margin: 0">${data[i].location}</p>
                <p style="margin: 0">تجربه کاری ${data[i].experience_years} سال</p>
                <p style="margin: 0">${data[i].user_percent} درصد رضایت مشتری</p>
              </div>
              <div class="m-buttonbox">
                <button style="width: 70%" type="">نوبت بگیر!</button>
                <button style="width: 25%" type="">♡</button>
              </div>
              <p style="margin: 0; color: #4dcc6b; font-size: 14px">
                اولین نوبت خالی ${data[i].first_empty_date}
              </p>
            </div>
            </div>
            </a>`;

    document.getElementById("doctor-item").innerHTML = doctor;
  }
}

function getDoctorList() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      let myArr = JSON.parse(this.responseText);
      doctors(myArr);
    }
  };
  xhttp.open("GET", "https://intense-ravine-40625.herokuapp.com/doctors", true);
  xhttp.send();
}

window.onload = function () {
  this.getDoctorList();
};
