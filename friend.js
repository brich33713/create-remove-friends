// Old code that didn't allow for action on new buttons created
// let remove = document.querySelectorAll("li button");

// for(let x of remove){
//     x.onclick = function(e){
//         e.preventDefault();
//         e.target.parentElement.remove();
//     }
// }

let newFriend = document.getElementById('newFriends');
let submit = document.getElementsByName('submit')[0];
let list = document.getElementById('friendList');

//event delegation
list.addEventListener('click', function(e) {
	e.preventDefault();
	if (e.target.tagName === 'BUTTON') {
		e.target.parentElement.remove();
	}
});

submit.addEventListener('click', function(e) {
	e.preventDefault();
	if(newFriend.value !== ""){
	let addFriend = document.createElement('li');
	addFriend.innerText = `${newFriend.value} `;
	let unfriendButton = document.createElement('button');
	unfriendButton.innerText = 'Unfriend';
	addFriend.appendChild(unfriendButton);
	list.appendChild(addFriend);
	newFriend.value = '';
	}
});
