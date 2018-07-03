$("document").ready(function(){
    $("#eyesclosed").hide();
    document.getElementById("video_content").load();
    

    $("#eyesclosed").click(function(){
        refresh_navbar();
        $("#eyesclosed").hide();
        $("#title").text(String.fromCharCode(160) +"Halsey - Eyes Closed (Stripped)");
        document.getElementById("video_source").src = "eyesclosed.mp4";
        document.getElementById("video_content").load();
        $("#video_content").muted = false;
    });

    $("#sorry").click(function(){
        refresh_navbar();
        $("#sorry").hide();
        $("#title").text(String.fromCharCode(160) +"Halsey - Sorry");
        document.getElementById("video_source").src = "sorry.mp4";
        document.getElementById("video_content").load();
        $("#video_content").muted = false;
    });

    $("#yellow").click(function(){
        refresh_navbar();
        $("#yellow").hide();
        $("#title").text(String.fromCharCode(160) +"Kina Grannis - Yellow (cover)");
        document.getElementById("video_source").src = "yellow.mp4";
        document.getElementById("video_content").load();
        $("#video_content").muted = false;
    });

    $("#withoutyou").click(function(){
        refresh_navbar();
        $("#withoutyou").hide();
        $("#title").text(String.fromCharCode(160) +"Hearts&Colors - Without you");
        document.getElementById("video_source").src = "withoutyou.mp4";
        document.getElementById("video_content").load();
        $("#video_content").muted = false;
    });

    $("#movie").click(function(){
        refresh_navbar();
        $("#movie").hide();
        $("#title").text(String.fromCharCode(160) +"Downloaded movie");
        document.getElementById("video_source").src = "movie.mp4";
        document.getElementById("video_content").load();
        $("#video_content").muted = false;
    });
    //$("#video_source").html("<source src='eyesclosed.mp4' type='video/mp4'></video>");


    function refresh_navbar() {
        $("#eyesclosed").show();
        $("#yellow").show();
        $("#withoutyou").show();
        $("#sorry").show();
        $("#movie").show();
    }
    var video = document.getElementById("video_content");
        $("#backwards").mousedown(startMovingBackward);
        $("#backwards").mouseout(stopMovingBackward);
        $("#fastbackwards").mousedown(startMovingFastBackward);
        $("#fastbackwards").mouseout(stopMovingBackward);

        $("#play").click(function(){
            video.play();
        });   
        
        $("#pause").click(function(){
            video.pause();
        });

        $("#stop").click(function(){
            video.pause();
            video.currentTime = 0;
        });

        $("#forwards").click(function(){
            video.playbackRate = 1.5;
            $("#play").click(function(){
            video.playbackRate = 1.0;
        });
        });
        
        $("#fastforwards").click(function(){
            video.playbackRate = 3;
            $("#play").click(function(){
            video.playbackRate = 1.0;
        });
        });
       

        function startMovingBackward()
            {
                moveBackWardInterval=setInterval(function(){
                    video.currentTime-=2;
                },1000);
            }

        function startMovingFastBackward()
        {
            moveBackWardInterval=setInterval(function(){
                video.currentTime-=8;
            },1000);
        }

            function stopMovingBackward()
            {
                clearInterval(moveBackWardInterval);
                video.play();
            }

        var volumeBar = document.getElementById("volume-bar");
        volumeBar.addEventListener("change", 
        function() {
        video.volume = volumeBar.value;
        });
        var muteButton = document.getElementById("mute");
        muteButton.addEventListener("click", function() {
            if (video.muted == false) {
                video.muted = true;
          
              muteButton.innerHTML = "<i class='glyphicon glyphicon-volume-up'></i>";
            } 
            
            else {
              video.muted = false;
              muteButton.innerHTML = "<i class='glyphicon glyphicon-volume-off'></i>";;
            }
          });
          $(".video_container").hover(function(){
            $(".controls").fadeIn();
          });

          $(".video_container").mouseleave(function(){
            $(".controls").hide();
          });
          

    }



);