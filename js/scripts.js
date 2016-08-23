// Business Logic
var bank = {
  amount: 0,
  name: "",
  password: "",
  deposit: function (amount) {
    this.amount += amount;
  },
  withdrawal: function (amount) {
    this.amount -= amount;
  }
};

setUP = Object.create(bank);


$.ajax({url: "https://pyrrus.github.io/text/user.txt", success: function(result){
  var holder = result.split(",");

  setUP.name = holder[0];
  setUP.password = holder[1];
  setUP.amount = parseInt(holder[2]);
}});

var firstBank = [];

firstBank.push(setUP)

// UI Logic
$(document).ready(function() {

  var name = "";
  var amount = "";

  var at = 0;


  $("form#setUp").submit(function(event) {
    event.preventDefault();

    firstTime = Object.create(bank);

    $(".setupHide").hide();

    firstTime.name = $("#name").val();

    name = $("#name").val();

    amount = parseInt($("#initdeposit").val());

    firstTime.password = $("#password").val();

    firstTime.amount = parseInt($("#initdeposit").val());


    firstBank.push(firstTime);

    for (var i = 0; i < firstBank.length; i++) {
      if (name === firstBank[i].name) {
        $("#amountMoney").text(firstBank[i].name + " amount: $" + firstBank[i].amount);
        at = i;
      }

    }

    $(".wdHide").show();

  });

  $("form#login").submit(function(event) {
    event.preventDefault();

    $(".setupHide").hide();



    name = $("#lName").val();

    password = $("#lPassword").val();




    for (var i = 0; i < firstBank.length; i++) {
      if (firstBank[i].name === name && password === firstBank[i].name) {
        $("#amountMoney").text(firstBank[i].name + " amount: $" + firstBank[i].amount);
        $(".wdHide").show();
        at = i;
      } else {
        $("#amountMoney").text("not found")
      }
    }



  });

  $("form#amount").submit(function(event) {
    event.preventDefault();

    var deposit = parseInt($("#deposit").val());
    var withdrawal = parseInt($("#withdrawal").val());

    if (deposit !== isNaN) {
      firstBank[at].deposit(deposit);
    }

    if (withdrawal !== isNaN) {
      firstBank[at].withdrawal(withdrawal);
    }

    $("#deposit").val("");
    $("#withdrawal").val("");

    $("#amountMoney").text(firstBank[at].name + " amount: $" + firstBank[at].amount);

  });
});
