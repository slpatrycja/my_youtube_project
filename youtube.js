$("document").ready(function(){
    $("#eyesclosed").hide();


    $("#eyesclosed").click(function(){
        refresh_navbar();
        $("#eyesclosed").hide();
        $("#title").text(String.fromCharCode(160) +"Halsey - Eyes Closed (Stripped)");
        document.getElementById("video_source").src = "eyesclosed.mp4";
        document.getElementById("video_content").load();
    });

    $("#sorry").click(function(){
        refresh_navbar();
        $("#sorry").hide();
        $("#title").text(String.fromCharCode(160) +"Halsey - Sorry");
        document.getElementById("video_source").src = "sorry.mp4";
        document.getElementById("video_content").load();
    });

    $("#yellow").click(function(){
        refresh_navbar();
        $("#yellow").hide();
        $("#title").text(String.fromCharCode(160) +"Kina Grannis - Yellow (cover)");
        document.getElementById("video_source").src = "yellow.mp4";
        document.getElementById("video_content").load();
    });

    $("#withoutyou").click(function(){
        refresh_navbar();
        $("#withoutyou").hide();
        $("#title").text(String.fromCharCode(160) +"Hearts&Colors - Without you");
        document.getElementById("video_source").src = "withoutyou.mp4";
        document.getElementById("video_content").load();
    });

    $("#movie").click(function(){
        refresh_navbar();
        $("#movie").hide();
        $("#title").text(String.fromCharCode(160) +"Downloaded movie");
        document.getElementById("video_source").src = "movie.mp4";
        document.getElementById("video_content").load();
    });
    //$("#video_source").html("<source src='eyesclosed.mp4' type='video/mp4'></video>");


    function refresh_navbar() {
        $("#eyesclosed").show();
        $("#yellow").show();
        $("#withoutyou").show();
        $("#sorry").show();
        $("#movie").show();
    }




});