document.getElementById("add-border").addEventListener('click', function () {
    const friendContainer = document.getElementById("friend-container");
    friendContainer.style.border = "1px solid red";
})

//

document.getElementById("add-background").addEventListener('click', function () {
    const addBackground = document.getElementsByClassName('friend');
    for (const friend of addBackground) {
        friend.style.backgroundColor = "yellow";
    }
    
})

//

document.getElementById("add-friend").addEventListener('click', function() {
    const addNewFriend = document.createElement("div");
    addNewFriend.classList = "friend";
    addNewFriend.innerHTML = `
            <h1 class="color">New friend</h1>
            <p>Dolorem natus dolor porro perferendis!</p>
    
    `
    const friendContainer = document.getElementById("friend-container");
    friendContainer.appendChild(addNewFriend);

})

//

document.getElementById("color-name").addEventListener('click', function () {
    const nameColor = document.getElementsByClassName('color');
    for (const color of nameColor) {
        color.style.color = "blue";
    }
})