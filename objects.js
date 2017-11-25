var playlist = new Object({Zepplin: 'Stairway', Zappa: 'Gangsta'})

function updatePlaylist (list,artist,song) {
  return Object.assign({},list,{[artist]: song})
}
updatePlaylist(playlist,ACDC,'Dynamite')

<<<<<<< HEAD
function removeFromPlaylist (list,artist) {
var newList = Object.assign({},list)
delete newList[artist]
  return newList
}
removeFromPlaylist(playlist,Zepplin)
=======
function removeFromPlaylist (list,song) {
  return delete list.artist
}
removeFromPlaylist(playlist,Zappa)
>>>>>>> bb9a1800250c35a82b062fcc45cbae34022cea07
