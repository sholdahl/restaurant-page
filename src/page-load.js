const renderContent = () => {
    const imgDiv = document.querySelector(".main-img");
    const mainHeading = document.querySelector("#img-overlay-title");
    const mainSubheading = document.querySelector(".main-subheading");
    const subheading = document.querySelector(".sub-title");
    const para = document.querySelector(".main-para");

    const picLink = "https://www.singleplatform.com/wp-content/uploads/2018/12/5-Tips-for-Improving-Restaurant-Ambiance.jpg";
    const mainMsg = "Restaurant Name";
    const mainSubMsg = "Authentic Mediterranean Cusine. Fresh and Organic. Your Neighborhood Bistro."
    const subHeadingMsg = "About Us";
    const paraMsg = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed risus pretium quam vulputate dignissim suspendisse in est ante. Massa sapien faucibus et molestie ac feugiat sed. Et ligula ullamcorper malesuada proin libero. Mattis enim ut tellus elementum sagittis vitae et leo duis. Viverra adipiscing at in tellus integer feugiat scelerisque. Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Scelerisque in dictum non consectetur. Ipsum consequat nisl vel pretium lectus quam id. Duis tristique sollicitudin nibh sit amet commodo nulla. Eu facilisis sed odio morbi quis commodo odio aenean. Felis eget velit aliquet sagittis id consectetur purus ut faucibus. Dignissim enim sit amet venenatis urna cursus. Aliquet porttitor lacus luctus accumsan tortor. Vel pretium lectus quam id leo in vitae turpis. <br> <br> Sodales ut etiam sit amet. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Amet risus nullam eget felis. Sed felis eget velit aliquet sagittis id consectetur. Cursus sit amet dictum sit amet. Amet volutpat consequat mauris nunc congue nisi vitae. Ac turpis egestas sed tempus urna. Adipiscing at in tellus integer feugiat scelerisque varius morbi. Eleifend quam adipiscing vitae proin sagittis nisl. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Nisl rhoncus mattis rhoncus urna neque viverra. Dignissim diam quis enim lobortis scelerisque fermentum. Fermentum et sollicitudin ac orci phasellus."

    imgDiv.style.background = "url(" + picLink + ")";
    mainHeading.textContent = mainMsg;
    mainSubheading.textContent = mainSubMsg;
    subheading.textContent = subHeadingMsg;
    para.innerHTML = paraMsg
}

export default renderContent