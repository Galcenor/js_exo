// Sélectionnez l'élément image par son ID
var image = document.getElementById('Img');

// Ajoutez un gestionnaire d'événement pour l'événement "mouseover" (quand la souris entre)
image.addEventListener('mouseover', function() {
    // Ajoutez une bordure à l'image lorsque la souris entre
    image.style.border = '3px solid red'; // Vous pouvez personnaliser la bordure ici
});

// Ajoutez un gestionnaire d'événement pour l'événement "mouseout" (quand la souris sort)
image.addEventListener('mouseout', function() {
    // Supprimez la bordure de l'image lorsque la souris sort
    image.style.border = 'none';
});