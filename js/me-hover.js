function imgHover() {
    document.getElementById('name').setAttribute('style', 'transform: scale(.6); padding-top: 50px; line-height: 10px; color: #ccc;');
    document.getElementById('profession').setAttribute('style', 'transform: scale(.6); line-height: 5px;');
}

function imgHoverOff() {
    document.getElementById('name').setAttribute('style', 'transform: scale(1); padding-top: 20px; line-height: 60px; color: #ff7878;');
    document.getElementById('profession').setAttribute('style', 'transform: scale(1); line-height: 10px;');
}

document.getElementById('me').addEventListener('mouseover', imgHover);
document.getElementById('me').addEventListener('mouseout', imgHoverOff);