var channelName1 = "zeenews";
var channelName2 = "TEDxTalks";
var channelName3 = "whistle4CSK";
var vidWidth = 130;
var vidHeight = 100;
var vidResults = 5;
$(document).ready(function () {
  $.get(
    "https://www.googleapis.com/youtube/v3/channels",
    {
      part: "contentDetails",
      forUsername: channelName1,
      key: "AIzaSyDMUDarUjIvY_mE5aY1GFaNFqwh4bYtIYs",
    },
    function (data) {
      $.each(data.items, function (i, item) {
        console.log(item);
        pid = item.contentDetails.relatedPlaylists.uploads;
        getvids(pid);
      });
    }
  );
  function getvids(pid) {
    $.get(
      "https://www.googleapis.com/youtube/v3/playlistItems",
      {
        part: "snippet",
        maxResults: vidResults,
        playlistId: pid,
        key: "AIzaSyDMUDarUjIvY_mE5aY1GFaNFqwh4bYtIYs",
      },
      function (data) {
        var output;
        $.each(data.items, function (i, item) {
          console.log(item);
          videoTitle = item.snippet.title;

          videoId = item.snippet.resourceId.videoId;

          //console.log(videoId);
          output =
            "<li><iframe height=" +
            vidHeight +
            " width=" +
            vidWidth +
            ' src="https://www.youtube.com/embed/' +
            videoId +
            '"></iframe></li>';
          console.log(output);

          $("#results1").append(output);
        });
      }
    );
  }

});
$(document).ready(function () {
  $.get(
    "https://www.googleapis.com/youtube/v3/channels",
    {
      part: "contentDetails",
      forUsername: channelName2,
      key: "AIzaSyDMUDarUjIvY_mE5aY1GFaNFqwh4bYtIYs",
    },
    function (data) {
      $.each(data.items, function (i, item) {
        console.log(item);
        pid = item.contentDetails.relatedPlaylists.uploads;
        getvids(pid);
      });
    }
  );
  function getvids(pid) {
    $.get(
      "https://www.googleapis.com/youtube/v3/playlistItems",
      {
        part: "snippet",
        maxResults: vidResults,
        playlistId: pid,
        key: "AIzaSyDMUDarUjIvY_mE5aY1GFaNFqwh4bYtIYs",
      },
      function (data) {
        var output;
        $.each(data.items, function (i, item) {
          console.log(item);
          videoTitle = item.snippet.title;

          videoId = item.snippet.resourceId.videoId;

          //console.log(videoId);
          output =
            "<li><iframe height=" +
            vidHeight +
            " width=" +
            vidWidth +
            ' src="https://www.youtube.com/embed/' +
            videoId +
            '"></iframe></li>';
          console.log(output);

          $("#results2").append(output);
        });
      }
    );
  }

});
$(document).ready(function () {
  $.get(
    "https://www.googleapis.com/youtube/v3/channels",
    {
      part: "contentDetails",
      forUsername: channelName3,
      key: "AIzaSyDMUDarUjIvY_mE5aY1GFaNFqwh4bYtIYs",
    },
    function (data) {
      $.each(data.items, function (i, item) {
        console.log(item);
        pid = item.contentDetails.relatedPlaylists.uploads;
        getvids(pid);
      });
    }
  );
  function getvids(pid) {
    $.get(
      "https://www.googleapis.com/youtube/v3/playlistItems",
      {
        part: "snippet",
        maxResults: vidResults,
        playlistId: pid,
        key: "AIzaSyDMUDarUjIvY_mE5aY1GFaNFqwh4bYtIYs",
      },
      function (data) {
        var output;
        $.each(data.items, function (i, item) {
          console.log(item);
          videoTitle = item.snippet.title;

          videoId = item.snippet.resourceId.videoId;

          //console.log(videoId);
          output =
            "<li><iframe height=" +
            vidHeight +
            " width=" +
            vidWidth +
            ' src="https://www.youtube.com/embed/' +
            videoId +
            '"></iframe></li>';
          console.log(output);

          $("#results3").append(output);
        });
      }
    );
  }

});
