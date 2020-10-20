function init() {
  //   const albumsTable = document.getElementById("albums_table");
  //   console.log(albumsTable);
  //   const albumsTableJquery = $("albums_table");
}

function getAlbumsFromApi() {
  const numberOfAlbums = parseInt(
    document.getElementById("number_of_albums").value
  );

  $.ajax({
    url: "https://jsonplaceholder.typicode.com/photos",
    success: function (data) {
      drawAblbums(data, numberOfAlbums);
    },
    error: function () {
      alert("Error in Album application");
    },
  });
}

function drawAblbums(albums, numberOfAlbums) {
  clearTable();
  const albumsBodyTable = document.getElementById("albums_content");
  if (!Array.isArray(albums)) return;
  if (typeof numberOfAlbums !== "number") return;

  for (let index = 0; index < numberOfAlbums; index++) {
    const albumRow = getAlbumRow(albums[index]);
    albumsBodyTable.append(albumRow);
  }
}

function clearTable() {
  const albumsBodyTable = document.getElementById("albums_content");
  albumsBodyTable.innerHTML = "";
}

function getAlbumRow(album) {
  const tr = document.createElement("TR");

  const tdId = document.createElement("TD");
  const tdAlbumId = document.createElement("TD");
  const tdAlbumTitle = document.createElement("TD");
  const tdAlbumImage = document.createElement("TD");

  const albumImage = document.createElement("IMG");

  tdId.innerText = album.id;
  tdAlbumId.innerText = album.albumId;
  tdAlbumTitle.innerText = album.title;
  albumImage.src = album.thumbnailUrl;
  tdAlbumImage.append(albumImage);

  tr.append(tdId, tdAlbumId, tdAlbumTitle, tdAlbumImage);
  return tr;
}

init();
