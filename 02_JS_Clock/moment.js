var date = new Date();
var seconds = date.getSeconds();
var minutes = date.getMinutes();
var hours = date.getHours();

var hands = [
  {
    hand: "hours",
    angle: hours * 30 + minutes / 2
  },
  {
    hand: "minutes",
    angle: minutes * 6
  },
  {
    hand: "seconds",
    angle: seconds * 6
  }
];

for (let i = 0; i < hands.length; i++) {
  let elements = document.querySelectorAll("." + hands[i].hand);
  for (let j = 0; j < elements.length; j++) {
    elements[j].style.transform = "rotateZ(" + hands[i].angle + "deg)";
    if (hands[i].hand === "minutes") {
      elements[j].parentNode.setAttribute(
        "data-second-angle",
        hands[i + 1].angle
      );
    }
  }
}

function setUpMinutesHand() {
  let containers = document.querySelectorAll(".minutes-container");
  let secondAngle = containers[0].getAttribute("data-second-angle");
  if ("secondAngle > 0") {
    let delay = ((360 - secondAngle) / 6 + 0.1) * 1000;
    setTimeout(function() {
      moveMinuteHands(containers);
    }, delay);
  }
}

function moveMinuteHands(containers) {
  for (let i = 0; i < containers.length; i++) {
    containers[i].style.transform = "rotate(60deg)";
  }
  setInterval(function() {
    if (containers[i].angle === undefined) {
      containers[i].angle = 12;
    } else {
      containers[i].angle += 6;
    }
    containers[i].style.transform = "rotateZ(" + containers[i].angle + "deg)";
  }, 60000);
}

function moveSecondsHand() {
  let containers = document.querySelectorAll(".seconds-container");
  setInterval(function() {
    for (let i = 0; i < containers.length; i++) {
      if (containers[i].angle === undefined) {
        containers[i].angle = 6;
      } else {
        containers[i].angle += 6;
      }
      containers[i].style.transform = "rotateZ(" + containers[i].angle + "deg)";
    }
  }, 1000);
}
