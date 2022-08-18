/* Unnamed */


/* PRN Products */
var firstImg = document.getElementById('prod-PRN-first')
var secondImg = document.getElementById('prod-PRN-second')
var thirdImg = document.getElementById('prod-PRN-third')

function PRNProdsChange() {
    const imgsArray = ["first.jfif", "second.jfif", "third.jfif", "fourth.jfif", "fifth.jfif", "sixth.jfif"]
        firstImg.src = "./PRN-Products/" + imgsArray[Math.floor(Math.random() * 6)]
        secondImg.src = "./PRN-Products/" + imgsArray[Math.floor(Math.random() * 6)]
        thirdImg.src = "./PRN-Products/" + imgsArray[Math.floor(Math.random() * 6)] 
        console.log("Action Taken.")
}
setInterval(PRNProdsChange, 3000)

