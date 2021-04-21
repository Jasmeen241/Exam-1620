const albums = [
    { name: "Album 1", price: 12.99, inCart: false }, 
    { name: "Album 2", price: 14.99, inCart: false }, 
    { name: "Album 3", price: 9.99, inCart: false }, 
    { name: "Album 4", price: 19.99, inCart: false }
  ];

function src(){
  for (i of albums){
     let albName1 =document.getElementById("Album 1")
     albName1.src = "Images/Album1.png"

     let albName2 =document.getElementById("Album 2")
     albName2.src = "Images/Album2.png"

     let albName3 =document.getElementById("Album 3")
     albName3.src = "Images/Album3.png"

     let albName4 =document.getElementById("Album 4")
     albName4.src = "Images/Album4.png"
  }
}

src()




