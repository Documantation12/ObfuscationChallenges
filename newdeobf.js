(() => {
  var IREadySUcks = {
    637: () => {
      window.addEventListener("resize", function () {
        if (window.outerWidth - window.innerWidth > 150 || window.outerHeight - window.innerHeight > 150) {
          document.documentElement.innerHTML = "<!DOCTYPE html><html><head><style>body{background-color:#4a235a;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;font-family:'Courier New',monospace}.error-container{max-width:500px;padding:40px;background-color:#333333;box-shadow:0 15px 30px rgba(0,0,0,.6);border-radius:8px;text-align:center}h1{color:#d35400;font-size:72px;margin:0;text-shadow:2px 2px 4px rgba(0,0,0,.8)}p{color:#fff;font-size:24px;margin:20px 0;text-shadow:1px 1px 2px rgba(0,0,0,.8)}.animated-text{animation:pulsate 1s ease-in-out infinite}@keyframes pulsate{0%{transform:scale(1)}50%{transform:scale(1.05)}100%{transform:scale(1)}}</style><link href=\"https://fonts.googleapis.com/css?family=Courier+New\" rel=\"stylesheet\"></head><body><div class=\"error-container\"><h1 class=\"animated-text\">Restricted!</h1><p>DevHaxx highly restricts Inspect!</p></div></body></html>";
        }
      });
      window["Date.now"] = Date.now;
      ATint = setInterval(() => {
        var DEvhaXXOntop = window["Date.now"]();
        eval("debugger;");
        if (window["Date.now"]() - DEvhaXXOntop > 300) {
          document.documentElement.innerHTML = "<!DOCTYPE html><html><head><style>body{background-color:#4a235a;display:flex;justify-content:center;align-items:center;height:100vh;margin:0;font-family:'Courier New',monospace}.error-container{max-width:500px;padding:40px;background-color:#333333;box-shadow:0 15px 30px rgba(0,0,0,.6);border-radius:8px;text-align:center}h1{color:#d35400;font-size:72px;margin:0;text-shadow:2px 2px 4px rgba(0,0,0,.8)}p{color:#fff;font-size:24px;margin:20px 0;text-shadow:1px 1px 2px rgba(0,0,0,.8)}.animated-text{animation:pulsate 1s ease-in-out infinite}@keyframes pulsate{0%{transform:scale(1)}50%{transform:scale(1.05)}100%{transform:scale(1)}}</style><link href=\"https://fonts.googleapis.com/css?family=Courier+New\" rel=\"stylesheet\"></head><body><div class=\"error-container\"><h1 class=\"animated-text\">Restricted!</h1><p>DevHaxx highly restricts Inspect!</p></div></body></html>";
        }
      }, 15);
      document.addEventListener("keyup", daRiaNWAshere => {
        if (daRiaNWAshere.key === "D" && daRiaNWAshere.ctrlKey && daRiaNWAshere.shiftKey) {
          daRiaNWAshere.preventDefault();
          clearInterval(ATint);
          ATint = null;
        }
      });
    },
    549: () => {
      window.dragElement = iReaDYSUcks => {
        fade = iReaDYSUcks;
        var dOntSKID = 0;
        var IReaDYIStrash = 0;
        var IReaDYSUcks = 0;
        var DOntSKID = 0;
        function DEvhAXXOntop(IrEaDYSUcks) {
          fade.style.opacity = "0.9";
          (IrEaDYSUcks = IrEaDYSUcks || window.event).preventDefault();
          IReaDYSUcks = IrEaDYSUcks.clientX;
          DOntSKID = IrEaDYSUcks.clientY;
          document.onmouseup = irEaDYIStrash;
          document.onmousemove = DAriANWAshere;
        }
        function DAriANWAshere(iREaDYIStrash) {
          (iREaDYIStrash = iREaDYIStrash || window.event).preventDefault();
          dOntSKID = IReaDYSUcks - iREaDYIStrash.clientX;
          IReaDYIStrash = DOntSKID - iREaDYIStrash.clientY;
          IReaDYSUcks = iREaDYIStrash.clientX;
          DOntSKID = iREaDYIStrash.clientY;
          iReaDYSUcks.style.top = iReaDYSUcks.offsetTop - IReaDYIStrash + "px";
          iReaDYSUcks.style.left = iReaDYSUcks.offsetLeft - dOntSKID + "px";
        }
        function irEaDYIStrash() {
          document.onmouseup = null;
          document.onmousemove = null;
          fade.style.opacity = "1";
        }
        if (document.getElementById(iReaDYSUcks.id + "header")) {
          document.getElementById(iReaDYSUcks.id + "header").onmousedown = DEvhAXXOntop;
        } else {
          iReaDYSUcks.onmousedown = DEvhAXXOntop;
        }
      };
      showToast = (DONtSKID, devHAXXOntop) => {
        const irEADYIStrash = document.createElement("div");
        const daRIANWAshere = document.createElement("div");
        irEADYIStrash.style.cssText = "position: fixed; bottom: -100px; right: 20px; background-color: " + (devHAXXOntop || "purple") + "; color: white; border-radius: 10px; z-index: 9999; transition: bottom 0.5s ease-in-out; max-width: 300px; padding: 10px;";
        daRIANWAshere.style.cssText = "font-size: 18px; word-wrap: break-word;";
        daRIANWAshere.textContent = DONtSKID;
        irEADYIStrash.appendChild(daRIANWAshere);
        document.body.appendChild(irEADYIStrash);
        setTimeout(() => {
          irEADYIStrash.style.bottom = "20px";
        }, 100);
        setTimeout(() => {
          irEADYIStrash.style.bottom = "-" + (irEADYIStrash.offsetHeight + 20) + "px";
          setTimeout(() => {
            document.body.removeChild(irEADYIStrash);
          }, 500);
        }, Math.max(3000, DONtSKID.length * 50));
      };
      showPrompt = (DArianwaShere, IReadyisTrash, daRianwaShere, deVhaxxoNtop) => {
        const IReAdysuCks = document.createElement("div");
        const IReAdyisTrash = document.createElement("div");
        const DEvHaxxoNtop = document.createElement("input");
        IReAdysuCks.style.cssText = "position: fixed; top: 20px; left: -100%; background: linear-gradient(to right, " + (deVhaxxoNtop || "purple") + " 5px, rgba(20, 20, 20, 0.8) 5px); color: white; z-index: 9999; opacity: 0; transition: left 0.5s ease-in-out, opacity 0.5s ease-in-out; max-width: 300px; padding: 10px;";
        IReAdyisTrash.style.cssText = "font-size: 18px; word-wrap: break-word;";
        IReAdyisTrash.textContent = DArianwaShere;
        DEvHaxxoNtop.setAttribute("type", "text");
        DEvHaxxoNtop.setAttribute("placeholder", IReadyisTrash || "");
        DEvHaxxoNtop.style.cssText = "width: 100%; padding: 5px; background-color: rgba(0, 0, 0, 0.5); border: none; color: white; margin-top: 10px;";
        DEvHaxxoNtop.addEventListener("keydown", DArIanwaShere => {
          if (DArIanwaShere.key === "Enter") {
            const irEaDyisTrash = DEvHaxxoNtop.value;
            if (daRianwaShere && typeof daRianwaShere == "function") {
              daRianwaShere(irEaDyisTrash);
            }
            IReAdysuCks.style.transition = "left 0.5s ease-in-out, opacity 0.5s ease-in-out";
            IReAdysuCks.style.left = "-100%";
            IReAdysuCks.style.opacity = "0";
            setTimeout(() => {
              document.body.removeChild(IReAdysuCks);
            }, 500);
          }
        });
        IReAdysuCks.appendChild(IReAdyisTrash);
        IReAdysuCks.appendChild(DEvHaxxoNtop);
        document.body.appendChild(IReAdysuCks);
        setTimeout(() => {
          IReAdysuCks.style.left = "0";
          IReAdysuCks.style.opacity = "1";
        }, 100);
      };
    },
    119: () => {
      iModal = {
        constants: {
          container: "presentation",
          headerClass: "css-19hcsz9-Typography",
          descriptionClass: "css-1ql0wvf-Typography",
          errorRoute: "/student/error/modal",
          dashRoute: "/student/dashboard/home",
          buttonId: "continue-button-button",
          dashId: "StudentDashboard-g38",
          cardClass: "e1vvjwpf1-card-body",
          get dashHook() {
            return Object.values(document.getElementById(this.dashId))[1].children[0]._owner.stateNode;
          }
        },
        cachedGoto: null,
        closeModal: function () {
          iModal.goto(iModal.constants.dashRoute);
        },
        goto: function (IreadYsuCks) {
          return this.cachedGoto(IreadYsuCks);
        },
        showModal: function (dEvhaXxoNtop) {
          var DEvhaXxoNtop = {
            childList: !0,
            subtree: !0
          };
          if (iModal.cachedGoto === null) {
            iModal.cachedGoto = iModal.constants.dashHook.props.navigationToPageByRelativeUrl;
          }
          new MutationObserver(function (DAriaNwaShere, IReadYsuCks) {
            for (const DEVhaXxoNtop of DAriaNwaShere) {
              if (DEVhaXxoNtop.type === "childList") {
                DEVhaXxoNtop.addedNodes.forEach(ireAdYsuCks => {
                  if (ireAdYsuCks.role === iModal.constants.container && document.getElementById(iModal.constants.dashId) === null) {
                    let DEvHaXxoNtop = document.getElementsByClassName(iModal.constants.cardClass)[0];
                    let DArIaNwaShere = document.getElementsByClassName(iModal.constants.headerClass)[0];
                    let daRIaNwaShere = document.getElementsByClassName(iModal.constants.descriptionClass)[0];
                    let irEAdYsuCks = document.getElementById(iModal.constants.buttonId);
                    if (dEvhaXxoNtop.width) {
                      DEvHaXxoNtop.style.width = dEvhaXxoNtop.width;
                    }
                    DArIaNwaShere[dEvhaXxoNtop.useInnerHTML ? "innerHTML" : "textContent"] = dEvhaXxoNtop.title;
                    daRIaNwaShere[dEvhaXxoNtop.useInnerHTML ? "innerHTML" : "textContent"] = dEvhaXxoNtop.description;
                    if (dEvhaXxoNtop.callback) {
                      irEAdYsuCks.onclick = dEvhaXxoNtop.callback;
                    } else {
                      irEAdYsuCks.onclick = iModal.closeModal;
                    }
                  }
                });
              }
            }
          }).observe(document, DEvhaXxoNtop);
          iModal.goto(iModal.constants.errorRoute);
        }
      };
    }
  };
  var DEVhaxXOntop = {};
  function DONtskID(IrEAdYisTrash) {
    var dEVHaXxoNtop = DEVhaxXOntop[IrEAdYisTrash];
    if (dEVHaXxoNtop !== undefined) {
      return dEVHaXxoNtop.exports;
    }
    var dARIaNwaShere = DEVhaxXOntop[IrEAdYisTrash] = {
      exports: {}
    };
    IREadySUcks[IrEAdYisTrash](dARIaNwaShere, dARIaNwaShere.exports, DONtskID);
    return dARIaNwaShere.exports;
  }
  DONtskID.n = DevhAXxoNtop => {
    var IreaDYsuCks = DevhAXxoNtop && DevhAXxoNtop.__esModule ? () => DevhAXxoNtop.default : () => DevhAXxoNtop;
    DONtskID.d(IreaDYsuCks, {
      a: IreaDYsuCks
    });
    return IreaDYsuCks;
  };
  DONtskID.d = (dAriANwaShere, iReaDYsuCks) => {
    for (var iReaDYisTrash in iReaDYsuCks) {
      if (DONtskID.o(iReaDYsuCks, iReaDYisTrash) && !DONtskID.o(dAriANwaShere, iReaDYisTrash)) {
        Object.defineProperty(dAriANwaShere, iReaDYisTrash, {
          enumerable: true,
          get: iReaDYsuCks[iReaDYisTrash]
        });
      }
    }
  };
  DONtskID.o = (DARiANwaShere, IREaDYisTrash) => Object.prototype.hasOwnProperty.call(DARiANwaShere, IREaDYisTrash);
  var ireAdySUcks = {};
  (() => {
    'use strict';

    DONtskID(119);
    DONtskID(549);
    DONtskID(637);
    const IrEADYsuCks = window.XMLHttpRequest;
    window.XMLHttpRequest = function () {
      const devhaxXoNtop = new IrEADYsuCks();
      const darianWaShere = devhaxXoNtop.open;
      devhaxXoNtop.open = function (ireadySuCks, IreadyIsTrash) {
        if (ireadySuCks === "POST" && IreadyIsTrash.includes("logger")) {
          showToast("DevHaxx has detected a silent log. This would mean your account is banned but DevHaxx has prevented this. Stay safe!", "orange");
        } else {
          darianWaShere.apply(this, arguments);
        }
      };
      return devhaxXoNtop;
    };
    const dARIANwaShere = window.fetch;
    window.fetch = function (IreadySuCks, DevhaxXoNtop) {
      if (IreadySuCks.includes("logger") || JSON.stringify(DevhaxXoNtop).includes("logger")) {
        showToast("DevHaxx has detected a silent log. This would mean your account is banned but DevHaxx has prevented this. Stay safe!", "orange");
        return Promise.reject(new Error("DevHaxx AntiLog"));
      } else {
        return dARIANwaShere.apply(this, arguments);
      }
    };
    document.addEventListener("contextmenu", function (DEvhaxXoNtop) {
      DEvhaxXoNtop.preventDefault();
    });
    var IREaDYsuCks = document.createElement("div");
    IREaDYsuCks.style.cssText = "position: fixed; bottom: 10px; width: 100%; color: white; font-size: 12px; text-align: center;";
    IREaDYsuCks.textContent = "Copyright © DevTech 2023 All Rights Reserved";
    document.body.appendChild(IREaDYsuCks);
    iModal.showModal({
      useInnerHTML: !0,
      title: "DevHaxx",
      description: "DevHaxx Created by discord.gg/haxx | devhaxx.xyz",
      width: "610px",
      callback: iModal.closeModal
    });
    if (document.getElementsByClassName("css-1lvadjd-Typography-Username e15psnz0")[0]) {
      showToast("Welcome back to DevHaxx, " + document.getElementsByClassName("css-1lvadjd-Typography-Username e15psnz0")[0].outerText + "!", "green");
    }
    var ireADYsuCks = document.createElement("div");
    ireADYsuCks.innerHTML = "<div id=\"devhaxx\" style=\"position: absolute; top: 158px; left: 122px; padding: 3pt; background: linear-gradient(to top, rgba(128, 0, 128), rgb(128, 128, 128)); color: rgb(128, 128, 128); font-size: 13px; backdrop-filter: blur(5px); z-index: 9999; border-radius: 17pt; box-shadow: rgba(50, 50, 50, 0.7) 0px 0px 10px; width: 200px; display: block;\">\n<div class=\"dh-box\" style=\"background-color: rgba(16, 16, 24, 255); border-radius: 15pt; backdrop-filter: blur(5px); padding: 25px;\">\n\n\n    <div class=\"devhaxxheader\" style=\"\n    font-weight: bold; text-align: center; font-size: 45px; cursor: move; background: linear-gradient(to left, rgba(128, 128, 128), rgb(128, 0, 128)); color: transparent; font-family: 'Roboto', sans-serif; font-weight: 500; \n        -webkit-background-clip: text; line-height:80px; margin-top:-25px; text-align: center;\">\n      HAXX\n    </div>\n\n    <div style=\"font-weight: bold; font-size: 10px; background: text-align: left;color: white\">\n        RSHIFT TO HIDE\n    </div>\n  <br>\n  \n    <div style=\"padding: 0.8pt; background: linear-gradient(to left, rgba(128, 0, 128), rgb(128, 128, 128)); color: rgb(128, 128, 128); margin-bottom: 8px; border-radius: 10px;\">\n    <div class=\"modMenuItem\" style=\"cursor: pointer; padding:8px; background-color: rgba(16, 16, 24, 255); border-radius: 12px; text-align: center; transition: all .2s ease-out;\">\n      <span id=\"skip\" style=\"font-family: 'Roboto', sans-serif; letter-spacing: 0.8px; font-weight: 300;\">Question Skipper</span>\n    </div>\n    </div>\n\n    <div style=\"padding: 0.8pt; background: linear-gradient(to left, rgba(128, 0, 128), rgb(128, 128, 128)); color: rgb(128, 128, 128); margin-bottom: 8px; border-radius: 10px;\">\n    <div class=\"modMenuItem\" style=\"cursor: pointer; padding:8px; background-color: rgba(16, 16, 24, 255); border-radius: 12px; text-align: center; transition: all .2s ease-out;\">\n      <span id=\"admin\" style=\"font-family: 'Roboto', sans-serif; letter-spacing: 0.8px; font-weight: 300;\">Toggle Dash Admin</span>\n    </div>\n    </div>\n    \n    <div style=\"font-weight: bold; font-size: 12px; background: text-align: left;color: white\">\n        devhaxx.xyz | discord.gg/haxx\n    </div>\n</div>\n";
    document.body.appendChild(ireADYsuCks);
    window.dragElement(ireADYsuCks.firstElementChild);
    document.getElementById("skip").addEventListener("click", () => {
      if (document.getElementById("html5Iframe")) {
        if (html5Iframe.src.includes("QUIZ")) {
          showToast("Quiz Skipper is a DevHaxx premium feature", "orange");
        } else {
          Object.values(html5Iframe.contentWindow.document.getElementById("nav-forward"))[1].onClick();
          showToast("Skipped Question!", "purple");
        }
      } else {
        showToast("Not in a lesson!", "red");
      }
    });
    let iREADYsuCks = !1;
    document.getElementById("admin").addEventListener("click", () => {
      if (iREADYsuCks === false) {
        Object.values(document.getElementById("StudentDashboard-g38"))[1].children[0]._owner.stateNode.props.dispatchToggleCheatButtonsAction();
        showToast("You have access to the admin menu! Be careful as some buttons/functions could cause harm", "cyan");
        iREADYsuCks = true;
      } else {
        Object.values(document.getElementById("StudentDashboard-g38"))[1].children[0]._owner.stateNode.props.dispatchToggleCheatButtonsAction();
        showToast("You no longer have access to the admin menu.", "cyan");
        iREADYsuCks = false;
      }
    });
    window.isMenuVisible = !0;
    document.addEventListener("keydown", irEadyIsTrash => {
      if (irEadyIsTrash.code === "ShiftRight") {
        if (isMenuVisible) {
          window.isMenuVisible = false;
          document.getElementById("devhaxx").style.display = "none";
        } else {
          window.isMenuVisible = true;
          document.getElementById("devhaxx").style.display = "block";
        }
      }
    });
  })();
})();