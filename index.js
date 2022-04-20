
window.onload = () => {
        let btnNode = document.querySelector('.container>p>a.btn-primary')
        btnNode.onclick = loadPhotos

        let btnNode2 = document.querySelector('.container>p>a.btn-secondary')
        btnNode2.onclick = loadPhotos2
        
        makeEditBtnHideBtn()
}

const options = {
	method: 'GET',
	headers: {
		Authorization: "Bearer 563492ad6f91700001000001441ef1e3bd30489bb0df42ed01fabd88"}
	
};

let loadPhotos = () => {

    fetch('https://api.pexels.com/v1/search?query=dog', options)
        .then(response => response.json())
        .then(pics => {console.log(pics.photos)
    
        let photos = pics.photos
    
        let cardNode = document.querySelectorAll('.card')
        let svgNode = document.querySelectorAll('.bd-placeholder-img')
    
        for (let i = 0; i < photos.length; i++) {
            let albumPhoto = photos[i].src.original
            console.log(albumPhoto)
             let imgNode = document.createElement('img')
                imgNode.setAttribute("src", albumPhoto);
                imgNode.setAttribute("style", "height: 225px");
    
                 cardNode[i].replaceChild(imgNode, svgNode[i]) 
            
        }
    
    
    
        
        })
        .catch(err => console.error(err)
       
        );
}


let loadPhotos2 = () => {

    fetch('https://api.pexels.com/v1/search?query=cat', options)
        .then(response => response.json())
        .then(pics => {console.log(pics.photos)
    
        let photos = pics.photos
    
        let cardNode = document.querySelectorAll('.card')
        let svgNode = document.querySelectorAll('.bd-placeholder-img')
    
        for (let i = 0; i < photos.length; i++) {
            let albumPhoto = photos[i].src.original
            console.log(albumPhoto)
             let imgNode = document.createElement('img')
                imgNode.setAttribute("src", albumPhoto);
                imgNode.setAttribute("style", "height: 225px");
    
                 cardNode[i].replaceChild(imgNode, svgNode[i]) 
            
        }
    
    
    
        
        })
        .catch(err => console.error(err)
       
        );
}


function makeEditBtnHideBtn() {
    let btnNode = document.querySelectorAll('.btn-group > button.btn-sm:last-of-type')
    btnNode.forEach(btn => {
        btn.innerText = 'Hide'
    })
}