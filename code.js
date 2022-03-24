timedLoop(1000, function() {
  setNumber("money", getNumber("money") + getNumber("y"));
  setNumber("money1", getNumber("money1") + getNumber("y"));
  setNumber("money2", getNumber("money2") + getNumber("y"));
  setNumber("money3", getNumber("money3") + getNumber("y"));
  setNumber("money4", getNumber("money4") + getNumber("y"));
});
setText("go", "+" + getNumber("x"));
onEvent("shop", "click", function(event) {
  setScreen("store");
});
onEvent("store1", "click", function(event) {
  setScreen("store");
});
onEvent("store2", "click", function(event) {
  setScreen("store");
});
onEvent("store3", "click", function(event) {
  setScreen("store");
});
onEvent("upgrade", "click", function(event) {
  setScreen("upgrades");
});
onEvent("upgrade1", "click", function(event) {
  setScreen("upgrades");
});
onEvent("upgrade2", "click", function(event) {
  setScreen("upgrades");
});
onEvent("bonuses1", "click", function(event) {
  setScreen("bonuses");
});
onEvent("bonuses2", "click", function(event) {
  setScreen("bonuses");
});
onEvent("bonuses3", "click", function(event) {
  setScreen("bonuses");
});
onEvent("reset1", "click", function(event) {
  setScreen("reset");
});
onEvent("reset2", "click", function(event) {
  setScreen("reset");
});
onEvent("reset3", "click", function(event) {
  setScreen("reset");
});
onEvent("back", "click", function(event) {
  setScreen("home");
});
onEvent("back1", "click", function(event) {
  setScreen("home");
});
onEvent("back2", "click", function(event) {
  setScreen("home");
});
onEvent("back3", "click", function(event) {
  setScreen("home");
});
onEvent("go", "click", function(event) {
  setNumber("money", getNumber("money") + getNumber("x"));
  setNumber("money1", getNumber("money1") + getNumber("x"));
  setNumber("money2", getNumber("money2") + getNumber("x"));
  setNumber("money3", getNumber("money3") + getNumber("x"));
  setNumber("money4", getNumber("money4") + getNumber("x"));
  while ((getNumber("money") > getNumber("b"))) {
    setNumber("b", getNumber("money"));
  }
  if (getNumber("bab") >= 1) {
    setNumber("e", randomNumber(1, getNumber("f")));
    if (getNumber("e") == 1) {
      setNumber("money", Math.round(getNumber("money") + getNumber("x") * 10));
      setNumber("money1", Math.round(getNumber("money1") + getNumber("x") * 10));
      setNumber("money2", Math.round(getNumber("money2") + getNumber("x") * 10));
      setNumber("money3", Math.round(getNumber("money3") + getNumber("x") * 10));
      setNumber("money4", Math.round(getNumber("money4") + getNumber("x") * 10));
      setPosition("crit", 105, 140);
      showElement("crit");
      timedLoop(40, function() {
        setPosition("crit", getXPosition("crit"), getYPosition("crit") - 1);
      });
      setTimeout(function() {
        hideElement("crit");
        stopTimedLoop();
      }, 1000);
    }
  }
});
onEvent("reset4", "click", function(event) {
  showElement("yes");
  showElement("no");
  showElement("warning");
  if (getNumber("b") < getNumber("money")) {
    setText("warning", "You'll only get a boost if you haven't had this much money before!");
  } else {
    setText("warning", "Are you sure?");
  }
  hideElement("reset4");
  hideElement("money4");
  hideElement("back3");
  hideElement("store3");
  hideElement("upgrade2");
  hideElement("bonuses3");
  hideElement("resetinfo");
  hideElement("button5");
  onEvent("yes", "click", function(event) {
    setText("warning", "");
    hideElement("yes");
    hideElement("no");
    hideElement("warning");
    showElement("reset4");
    showElement("money4");
    showElement("back3");
    showElement("store3");
    showElement("upgrade2");
    showElement("bonuses3");
    showElement("resetinfo");
    showElement("button5");
    setNumber("x", 1);
    setText("go", "+" + getNumber("x"));
    if (getNumber("money") >= getNumber("b")) {
      setNumber("b", getNumber("money"));
      setNumber("a", 0);
    }
    if (getNumber("money") >= getNumber("b")) {
    while ((getNumber("money") >= 10)) {
      setNumber("money", getNumber("money") / 10);
      setNumber("a", getNumber("a") + 1);
      }
    setNumber("a", getNumber("a") + 1);
    setNumber("z", (getNumber("z") - 1.5) * (getNumber("a") / 100) + 1.5);
    setNumber("c", getNumber("c") * (1 + getNumber("a") / 100));
    }
    setNumber("money", 0);
    setNumber("money1", 0);
    setNumber("money2", 0);
    setNumber("money3", 0);
    setNumber("money4", 0);
    setNumber("y", 0);
    setNumber("sca", 50);
    setNumber("scb", 500);
    setNumber("scc", 5000);
    setNumber("scd", 50000);
    setNumber("sce", 500000);
    setNumber("scf", 5000000);
    setNumber("scg", 50000000);
    setNumber("sch", 500000000);
    setNumber("sci", 5000000000);
    setNumber("saa", 0);
    setNumber("sab", 0);
    setNumber("sac", 0);
    setNumber("sad", 0);
    setNumber("sae", 0);
    setNumber("saf", 0);
    setNumber("sag", 0);
    setNumber("sah", 0);
    setNumber("sai", 0);
    setNumber("uca", 100);
    setNumber("ucb", 1000);
    setNumber("ucc", 10000);
    setNumber("ucd", 100000);
    setNumber("uce", 1000000);
    setNumber("ucf", 10000000);
    setNumber("ucg", 100000000);
    setNumber("uch", 1000000000);
    setNumber("uci", 10000000000);
    setNumber("uaa", 0);
    setNumber("uab", 0);
    setNumber("uac", 0);
    setNumber("uad", 0);
    setNumber("uae", 0);
    setNumber("uaf", 0);
    setNumber("uag", 0);
    setNumber("uah", 0);
    setNumber("uai", 0);
    setNumber("bca", 10000);
    setNumber("bcb", 10000);
    setNumber("bcc", 10000);
    setNumber("baa", 0);
    setNumber("bab", 0);
    setNumber("bac", 0);
  });
  onEvent("no", "click", function(event) {
    setText("warning", "");
    hideElement("yes");
    hideElement("no");
    hideElement("warning");
    showElement("reset4");
    showElement("money4");
    showElement("back3");
    showElement("store3");
    showElement("upgrade2");
    showElement("bonuses3");
    showElement("resetinfo");
  });
});
onEvent("sa", "click", function(event) {
  if (getNumber("money") >= getNumber("sca")) {
    plus("sca", "saa", "sa");
  }
});
onEvent("sb", "click", function(event) {
  if (getNumber("money") >= getNumber("scb")) {
    plus("scb", "sab", "sb");
  }
});
onEvent("sc", "click", function(event) {
  if (getNumber("money") >= getNumber("scc")) {
    plus("scc", "sac", "sc");
  }
});
onEvent("sd", "click", function(event) {
  if (getNumber("money") >= getNumber("scd")) {
    plus("scd", "sad", "sd");
  }
});
onEvent("se", "click", function(event) {
  if (getNumber("money") >= getNumber("sce")) {
    plus("sce", "sae", "se");
  }
});
onEvent("sf", "click", function(event) {
  if (getNumber("money") >= getNumber("scf")) {
    plus("scf", "saf", "sf");
  }
});
onEvent("sg", "click", function(event) {
  if (getNumber("money") >= getNumber("scg")) {
    plus("scg", "sag", "sg");
  }
});
onEvent("sh", "click", function(event) {
  if (getNumber("money") >= getNumber("sch")) {
    plus("sch", "sah", "sh");
  }
});
onEvent("si", "click", function(event) {
  if (getNumber("money") >= getNumber("sci")) {
    plus("sci", "sai", "si");
  }
});
onEvent("ua", "click", function(event) {
  if (getNumber("money") >= getNumber("uca")) {
    change("uca", "uaa", "ua");
  }
});
onEvent("ub", "click", function(event) {
  if (getNumber("money") >= getNumber("ucb")) {
    change("ucb", "uab", "ub");
  }
});
onEvent("uc", "click", function(event) {
  if (getNumber("money") >= getNumber("ucc")) {
    change("ucc", "uac", "uc");
  }
});
onEvent("ud", "click", function(event) {
  if (getNumber("money") >= getNumber("ucd")) {
    change("ucd", "uad", "ud");
  }
});
onEvent("ue", "click", function(event) {
  if (getNumber("money") >= getNumber("uce")) {
    change("uce", "uae", "ue");
  }
});
onEvent("uf", "click", function(event) {
  if (getNumber("money") >= getNumber("ucf")) {
    change("ucf", "uaf", "uf");
  }
});
onEvent("ug", "click", function(event) {
  if (getNumber("money") >= getNumber("ucg")) {
    change("ucg", "uag", "ug");
  }
});
onEvent("uh", "click", function(event) {
  if (getNumber("money") >= getNumber("uch")) {
    change("uch", "uah", "uh");
  }
});
onEvent("ui", "click", function(event) {
  if (getNumber("money") >= getNumber("uci")) {
    change("uci", "uai", "ui");
  }
});
onEvent("ba", "click", function(event) {
  if (getNumber("money") >= getNumber("bca")) {
    setNumber("money", getNumber("money") - getNumber("bca"));
    setNumber("money1", getNumber("money1") - getNumber("bca"));
    setNumber("money2", getNumber("money2") - getNumber("bca"));
    setNumber("money3", getNumber("money3") - getNumber("bca"));
    setNumber("money4", getNumber("money4") - getNumber("bca"));
    setNumber("bca", getNumber("bca") * 10);
    setNumber("baa", getNumber("baa") + 1);
    setNumber("sca", Math.round(getNumber("sca") * 0.99));
    setNumber("scb", Math.round(getNumber("scb") * 0.99));
    setNumber("scc", Math.round(getNumber("scc") * 0.99));
    setNumber("scd", Math.round(getNumber("scd") * 0.99));
    setNumber("sce", Math.round(getNumber("sce") * 0.99));
    setNumber("scf", Math.round(getNumber("scf") * 0.99));
    setNumber("scg", Math.round(getNumber("scg") * 0.99));
    setNumber("sch", Math.round(getNumber("sch") * 0.99));
    setNumber("sci", Math.round(getNumber("sci") * 0.99));
    setNumber("uca", Math.round(getNumber("uca") * 0.99));
    setNumber("ucb", Math.round(getNumber("ucb") * 0.99));
    setNumber("ucc", Math.round(getNumber("ucc") * 0.99));
    setNumber("ucd", Math.round(getNumber("ucd") * 0.99));
    setNumber("uce", Math.round(getNumber("uce") * 0.99));
    setNumber("ucf", Math.round(getNumber("ucf") * 0.99));
    setNumber("ucg", Math.round(getNumber("ucg") * 0.99));
    setNumber("uch", Math.round(getNumber("uch") * 0.99));
    setNumber("uci", Math.round(getNumber("uci") * 0.99));
    setNumber("bca", Math.round(getNumber("bca") * 0.99));
    setNumber("bcb", Math.round(getNumber("bcb") * 0.99));
    setNumber("bcc", Math.round(getNumber("bcc") * 0.99));
    setNumber("bcd", Math.round(getNumber("bcd") * 0.99));
    setNumber("bce", Math.round(getNumber("bce") * 0.99));
    setNumber("bcf", Math.round(getNumber("bcf") * 0.99));
    setNumber("bcg", Math.round(getNumber("bcg") * 0.99));
    setNumber("bch", Math.round(getNumber("bch") * 0.99));
    setNumber("bci", Math.round(getNumber("bci") * 0.99));
  }
});
onEvent("bb", "click", function(event) {
  if (getNumber("money") >= getNumber("bcb")) {
    if (getNumber("bab") < 100) {
      buy("bcb", "bab");
      setNumber("bab", getNumber("bab") + 1);
      setNumber("bcb", Math.round(getNumber("bcb") * 10));
      setNumber("f", getNumber("f") - 1);
    } else {
      setText("bab", "Max");
    }
  }
});
onEvent("bc", "click", function(event) {
  hide();
});
onEvent("bd", "click", function(event) {
  hide();
});
onEvent("be", "click", function(event) {
  hide();
});
onEvent("bf", "click", function(event) {
  hide();
});
onEvent("bg", "click", function(event) {
  hide();
});
onEvent("bh", "click", function(event) {
  hide();
});
onEvent("bi", "click", function(event) {
  hide();
});
function plus(cost, amount, button) {
  setNumber("money", getNumber("money") - getNumber(cost));
  setNumber("money1", getNumber("money1") - getNumber(cost));
  setNumber("money2", getNumber("money2") - getNumber(cost));
  setNumber("money3", getNumber("money3") - getNumber(cost));
  setNumber("money4", getNumber("money4") - getNumber(cost));
  setNumber(cost, Math.round(getNumber(cost) * getNumber("z")));
  setNumber(amount, getNumber(amount) + 1);
  setNumber("x", getNumber("x") + getNumber(button));
  setNumber("go", "+" + getNumber("x"));
}
function change(cost, amount, button) {
  setNumber("money", getNumber("money") - getNumber(cost));
  setNumber("money1", getNumber("money1") - getNumber(cost));
  setNumber("money2", getNumber("money2") - getNumber(cost));
  setNumber("money3", getNumber("money3") - getNumber(cost));
  setNumber("money4", getNumber("money4") - getNumber(cost));
  setNumber(cost, Math.round(getNumber(cost) * getNumber("z")));
  setNumber(amount, getNumber(amount) + 1);
  setNumber("y", getNumber("y") + getNumber(button));
}
function buy(cost, amount) {
  setNumber("money", getNumber("money") - getNumber(cost));
  setNumber("money1", getNumber("money1") - getNumber(cost));
  setNumber("money2", getNumber("money2") - getNumber(cost));
  setNumber("money3", getNumber("money3") - getNumber(cost));
  setNumber("money4", getNumber("money4") - getNumber(cost));
}
//REEEEEEEEEEEEEE;
