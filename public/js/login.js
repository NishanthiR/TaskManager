$(document).ready(function() {
    var TMusername = localStorage.setItem("TMusername");
    var TMpassword = localStorage.getItem("TMpassword");
    $("#uName").val(TMusername);
    $("#lPassword").val(TMpassword);

    $("#check").on("click", function() {
        var passwordInput = $("#lPassword");
    
    if(passwordInput.attr("type") === "password") {
        passwordInput.attr("type", "text");
    }else{
        passwordInput.attr("type", "password");
    }
    })

    $("#remMe").click(function() {
        var userName = $("#uName").val();
        var passWord = $("#lPassword").val();
        localStorage.setItem("TMusername", "username");
        localStorage.getItem("TMpassword", "password");
    })

    $("#reg").click(function() {
        location.href= "/reg";
    })
})
    
