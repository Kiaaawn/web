// window.onscroll = function () {
//   myFunction();
// };
window.onload = function () {
  changeCommentSlider();
  let url = window.location.href;
  let item = url.split("%27")[1];
  this.getDoctorList(item);
  console.log(url.split("%27")[1]);
};

function getDoctorList(item) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      doctor(JSON.parse(this.responseText));
    }
  };
  xhttp.open(
    "GET",
    `https://intense-ravine-40625.herokuapp.com/doctors/${item}`,
    true
  );
  xhttp.send();
}

function doctor(data) {
  console.log(data);
  document.getElementById("doctor-name").innerHTML = data.name;
  document.getElementById("doctor-spec").innerHTML = data.spec;
  document.getElementById("doctor-nezam").innerHTML += data.number;
  let doctorImg = `
  <img style="width: 105px;
            height: 105px;
              border-radius: 50%!important;"
               src="${data.avatar}" alt="docPic">`;
  document.getElementById("doctor-image").innerHTML = doctorImg;
  document.getElementById("doctor-address").innerHTML = data.address;
  document.getElementById("doctor-phone").innerHTML = data.phone;
  let doctorWeek = "";
  //   for(let i = 0 ; i < data.week_days.length; i++){
  //     if(data.week_days[i] == true){
  //         doctorweek = `
  //         <li class="li_frst">
  //  <h6>شنبه</h6>
  //  p
  // </li>`
  //     }
  //   }
  let week = document.getElementById("doctor-week").getElementsByTagName("li");
  for (let i = 0; i < week.length; i++) {
    if (data.week_days[i] == true) {
      week[i].getElementsByTagName("span")[0].innerHTML = "دارد";
    } else week[i].getElementsByTagName("span")[0].innerHTML = "ندارد";
    console.log(week[i]);
  }
}

$(".comment-slider").slick({
  autoplay: true,
  autoplaySpeed: 1500,
  infinite: true,
  dots: true,
});
$(document).on("ready", function () {
  $(".comment-slider").slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
  });
});
var head = document.getElementById("myHeader");
var stick = head.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
var com = false;

function changeCommentSlider() {
  comment1 = document.getElementById("com1");
  comment2 = document.getElementById("com2");
  console.log("inja");

  setInterval(function () {
    console.log("com1");
    if (com == true) {
      comment1.classList.remove("active");
      comment1.classList.add("diactive");
      comment2.classList.add("active");
      comment2.classList.remove("diactive");
      com = false;
    } else {
      console.log("com2");
      comment2.classList.remove("active");
      comment2.classList.add("diactive");
      comment1.classList.add("active");
      comment1.classList.remove("diactive");
      com = true;
    }
  }, 2000);
}

function showTab(i) {
  var tab;
  var otherTab;
  if (i == 1) {
    tab = document.getElementById("tab1");
    otherTab = document.getElementById("tab2");
  } else {
    tab = document.getElementById("tab2");
    otherTab = document.getElementById("tab1");
  }

  tab.classList.add("active");
  tab.classList.remove("tab-pane");
  otherTab.classList.remove("active");
  otherTab.classList.add("tab-pane");
}
