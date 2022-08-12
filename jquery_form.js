$(document).ready(function(){ 
    $("#nom_err").hide();
    $("#prenom_err").hide();
    $("#email_err").hide();
    $("#pwd1_err").hide();
    $("#pwd2_err").hide();
    function prenom_check(){
        var prenom = $("#prenom").val();
        length_prenom = prenom.length;
        var re = /^[A-Za-z]+$/;
        if(length_prenom > 2 && re.test(prenom)){
        $("#prenom").removeClass("border-danger");
        $("#prenom").addClass("border-success");
        $("#prenom_err").hide();
        return true;
        }else{
            $("#prenom_err").show();
            $("#prenom").removeClass("border-success");
            $("#prenom").addClass("border-danger");
            return false;
        }
    }
    $("#prenom").keyup(function(){
        prenom_check();
    }) 
    function nom_check(){
        var nom = $("#nom").val();
        length_nom = nom.length;
        var re = /^[A-Za-z]+$/;
        if(length_nom > 2 && re.test(nom)){
            $("#nom").removeClass("border-danger");
            $("#nom").addClass("border-success");
            $("#nom_err").hide();
            return true;
        }else{
            $("#nom").removeClass("border-success");
            $("#nom").addClass("border-danger");
            $("#nom_err").show();
            return false;
        }
    }
    $("#nom").keyup(function(){
        nom_check();
    })
    function email_check(){
        let re_email = /\S+@\S+\.\S+/;
        var email = $("#email").val();
        if(re_email.test(email)){
            $("#email").removeClass("border-danger");
            $("#email").addClass("border-success");
            $("#email_err").hide();
            return true;
        }else{
            $("#email").removeClass("border-success");
            $("#email").addClass("border-danger");
            $("#email_err").show();
            return false;
        }
    }
    $("#email").keyup(function(){
       email_check();
    })
    function pwd1_check(){
        let mdp = $("#pwd1").val();
        if(mdp.length>=5){
            $("#pwd1").removeClass("border-danger");
            $("#pwd1").addClass("border-success");
            $("#pwd1_err").hide();
            return true;
        }else{
            $("#pwd1").removeClass("border-success");
            $("#pwd1").addClass("border-danger");
            $("#pwd1_err").show();
            return false;
        }
    }
    $("#pwd1").keyup(function(){
        pwd1_check();
    })
    function pwd2_check(){
        let mdp = $("#pwd2").val();
        if(mdp.length>=5 && mdp ===  $("#pwd1").val()){
            $("#pwd2").removeClass("border-danger");
            $("#pwd2").addClass("border-success");
            $("#pwd2_err").hide();
            return true;
        }else{
            $("#pwd2").removeClass("border-success");
            $("#pwd2").addClass("border-danger");
            $("#pwd2_err").show();
            return false;
        }
    }
    $("#pwd2").keyup(function(){
        pwd2_check();
    })
    $("#submit").click(function(e){
        e.preventDefault()
        if(prenom_check() == true && nom_check() == true && email_check() == true && pwd1_check() == true && pwd2_check() == true){
            alert("all good")
        }else{
            alert("something is missing or wrong!")
        }
    })
    
})
