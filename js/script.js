var openForm = document.querySelector(".search-form-btn");
var searchForm = document.querySelector(".search-form");
var checkIn = document.querySelector("#check-in-date");
var checkOut = document.querySelector("#check-out-date");
var amountAdult = searchForm.querySelector("#adults");
var amountChild = searchForm.querySelector("#children");

var isStorageSupport = true;
var storage = "";

document.addEventListener("DOMContentLoaded", function() {
  searchForm.classList.remove("search-form-open");
});

try {
  storage = localStorage.getItem("adult");
  storage = localStorage.getItem("child");
} catch (err) {
  isStorageSupport = false;
};

openForm.addEventListener("click", function(evt) {
  evt.preventDefault();
  searchForm.classList.toggle("search-form-transition");
});

openForm.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 32) {
    evt.preventDefault();
    searchForm.classList.toggle("search-form-transition");
  }
});

searchForm.addEventListener("submit", function(evt) {
  if (!checkIn.value || !checkOut.value || (amountAdult.value <= 0)) {
    evt.preventDefault();
  };
  if (!checkIn.value) {
    checkIn.classList.remove("empty");
    checkIn.offsetWidth = checkIn.offsetWidth;
    checkIn.classList.add("empty");
  };
  if (!checkOut.value) {
    checkOut.classList.remove("empty");
    checkOut.offsetWidth = checkOut.offsetWidth;
    checkOut.classList.add("empty");
  };
  if (amountAdult.value <= 0) {
    amountAdult.classList.remove("empty");
    amountAdult.offsetWidth = amountAdult.offsetWidth;
    amountAdult.classList.add("empty");
  };
  if (amountAdult.value && amountChild.value) {
    if (isStorageSupport) {
      localStorage.setItem("adult", amountAdult.value);
      localStorage.setItem("child", amountChild.value);
    }
  };
});
