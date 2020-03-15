var projects = [
    {
        ID: "burger",
        Project: "Burger Tracker",
        URL: "https://aarkitekkt-eat-da-burger.herokuapp.com/",
        Github: "https://github.com/aarkitekkt/eat-da-burger",
        ImageUrl: "./assets/images/Devour-Burger.gif",
        GitHubIcon: "./assets/images/GitHub-Mark-Light-32px.png",
        UrlIcon: "./assets/images/linkIcon.png"
    },
    {
        ID: "laptops",
        Project: "Laptop Marketplace",
        URL: "https://aqueous-beach-33300.herokuapp.com/",
        Github: "https://github.com/aarkitekkt/brb-laptops",
        ImageUrl: "./assets/images/laptopsCapture.gif",
        GitHubIcon: "./assets/images/GitHub-Mark-Light-32px.png",
        UrlIcon: "./assets/images/linkIcon.png"
    },
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
    }, {
        ID: "phone",
        Project: "Mobile Phone Rendering",
        URL: "",
        Github: "",
        ImageUrl: "./assets/images/phone_2.jpg",
        GitHubIcon: "",
        UrlIcon: ""
    }, {
        ID: "intRender",
        Project: "Interior Architectural Rendering",
        URL: "",
        Github: "",
        ImageUrl: "./assets/images/Atrium-comp-d3.jpg",
        GitHubIcon: "",
        UrlIcon: ""
    }, {
        ID: "sunglasses",
        Project: "Sunglasses Animation",
        URL: "",
        Github: "",
        ImageUrl: "./assets/images/sunglass_2.png",
        GitHubIcon: "",
        UrlIcon: ""
    }, {
        ID: "sne",
        Project: "sne iPad Stand",
        URL: "",
        Github: "",
        ImageUrl: "./assets/images/sne_1.JPG",
        GitHubIcon: "",
        UrlIcon: ""
    }, {
        ID: "strata",
        Project: "Strata iPad Enclosure",
        URL: "",
        Github: "",
        ImageUrl: "./assets/images/strata_1.jpg",
        GitHubIcon: "",
        UrlIcon: ""
    }, {
        ID: "zaha",
        Project: "Zaha iPad Stand",
        URL: "",
        Github: "",
        ImageUrl: "./assets/images/zaha_2.jpg",
        GitHubIcon: "",
        UrlIcon: ""
    }
]

// When image is clicked, append project information to div.
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

