var projects = [
    {
        ID: "ski",
        Project: "Should I go skiing today?",
        URL: "https://aarkitekkt.github.io/Ski_Resort_Weather_Report/",
        Github: "https://github.com/aarkitekkt/Ski_Resort_Weather_Report",
        ImageUrl: "./assets/images/skiCapture.JPG",
        GitHubIcon: "./assets/images/GitHub-Mark-Light-32px.png",
        UrlIcon: "./assets/images/linkIcon.png"
    }, {
        ID: "weather",
        Project: "Weather Dashboard",
        URL: "https://aarkitekkt.github.io/weather-dashboard/",
        Github: "https://github.com/aarkitekkt/weather-dashboard",
        ImageUrl: "./assets/images/weatherCapture.JPG",
        GitHubIcon: "./assets/images/GitHub-Mark-Light-32px.png",
        UrlIcon: "./assets/images/linkIcon.png"
    }, {
        ID: "password",
        Project: "Password Generator",
        URL: "https://aarkitekkt.github.io/password-generator/",
        Github: "https://github.com/aarkitekkt/password-generator",
        ImageUrl: "./assets/images/passwordCapture.JPG",
        GitHubIcon: "./assets/images/GitHub-Mark-Light-32px.png",
        UrlIcon: "./assets/images/linkIcon.png"
    }
]



$("img").click(function () {
    var imgID = $(this).attr("id");
    for (let i = 0; i < projects.length; i++) {
        if (imgID === projects[i].ID) {
            console.log(projects[i].Project)
            $("#projectTitle").text(projects[i].Project);
            $("#projectImage").attr("src", projects[i].ImageUrl);
            $("#gitHubIcon").attr("src", projects[i].GitHubIcon);
            $("#gitLink").attr("href", projects[i].Github);
            $("#UrlIcon").attr("src", projects[i].UrlIcon);
            $("#urlLink").attr("href", projects[i].URL);
        }
    }
});

