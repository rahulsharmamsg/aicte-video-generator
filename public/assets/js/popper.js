function Pop() {
  var cssRuleFile = "";
  let lnk = document.createElement("link");
  lnk.setAttribute("rel", "stylesheet");
  lnk.setAttribute("type", "text/css");
  lnk.setAttribute("href", cssRuleFile);
  document.getElementsByTagName("head")[0].appendChild(lnk);
  let styl = "undefined";
  var conDivObj;
  var fadeInTime = 10;
  var fadeOutTime = 10;
  let cookie = {
    name: "cookieconsent_status",
    path: "/",
    expiryDays: 365 * 24 * 60 * 60 * 5000,
  };
  let content = {
    message: "<span>We use cookies</span> to give you a better experience.",
    btnText: "Sweet!",
    btnText2: "Sorry, I’m on a diet",
    mode: "  banner bottom",
    theme: " theme-classic",
    palette: " palette1",
  };
  let createPopUp = function () {
    console.log(content);
    if (typeof conDivObj === "undefined") {
      conDivObj = document.createElement("DIV");
      conDivObj.style.opacity = 0;
      conDivObj.setAttribute("id", "spopupCont");
    }
    conDivObj.innerHTML =
      '<div id="poper" className="window ' +
      content.mode +
      content.theme +
      content.palette +
      '"><img src="./assets/images//cookies.svg"><span id="msg" className="message">' +
      content.message +
      // '<a id="plcy-lnk" className="policylink" href="#"'+
      // content.href+
      // '"'+
      // " target="+
      // content.target+
      // ">"+
      content.link +
      '</a></span><div id="btn" className="compliance"><a href="#" id="cookie-btn" className="spopupbtnok button green" style="padding: 11px;border-radius: 6px;margin-right: 11px;background: linear-gradient(to right, #01d5f5, #52df84);color: #fff">' +
      content.btnText +
      '</a><a href="#" id="cookie-btn" className="spopupbtnok2 button" >' +
      content.btnText2 +
      "</a></div></div>";
    document.body.appendChild(conDivObj);
    fadeIn(conDivObj);
    document
      .getElementById("cookie-btn")
      .addEventListener("click", function () {
        saveCookie();
        fadeOut(conDivObj);
      });
  };
  let fadeOut = function (element) {
    var op = 1;
    var timer = setInterval(function () {
      if (op <= 0.1) {
        clearInterval(timer);
        conDivObj.parentElement.removeChild(conDivObj);
      }
      element.style.opacity = op;
      element.style.filter = "alpha(opacity=" + op * 100 + ")";
      op -= op * 0.1;
    }, fadeOutTime);
  };
  let fadeIn = function (element) {
    var op = 0.1;
    var timer = setInterval(function () {
      if (op >= 1) {
        clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = "alpha(opacity=" + op * 100 + ")";
      op += op * 0.1;
    }, fadeInTime);
  };
  let checkCookie = function (key) {
    var keyValue = document.cookie.match("(^|;) ?" + key + "=([^;]*)(;|$)");
    return keyValue ? true : false;
  };
  let saveCookie = function () {
    var expires = new Date();
    expires.setTime(expires.getTime() + cookie.expiryDays);
    document.cookie =
      cookie.name +
      "=" +
      "ok" +
      ";expires=" +
      expires.toUTCString() +
      "path=" +
      cookie.path;
  };
  this.init = function (param) {
    if (checkCookie(cookie.name)) return;
    if (typeof param === "object") {
      if ("ButtonText" in param) content.btnText = param.ButtonText;
      if ("Mode" in param) content.mode = " " + param.Mode;
      if ("Theme" in param) content.theme = " " + param.Theme;
      if ("Palette" in param) content.palette = " " + param.Palette;
      if ("Message" in param) content.message = param.Message;
      if ("LinkText" in param) content.link = param.LinkText;
      if ("Location" in param) content.href = param.Location;
      if ("Target" in param) content.target = param.Target;
      if ("Time" in param)
        setTimeout(function () {
          createPopUp();
        }, param.Time * 100);
      else createPopUp();
    }
  };
}
window.start = new Pop();
