/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile ={
    name: 'Fiifi Cudjoe Debrah',
    photo: { scr: 'images/profile-image.png', alt:'Profile Picture'},

    favoriteFoods: [
        'Jollof','Tuo Zaafi', 'Khebab', 'Oat'
    ],

    hobbies: [
        'Video games', 'Music', 'Crafting'
    ],

    placesLived: [],
   
};
/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Altona, DE',
        length: '1 year'
    },

    {
        place: 'Tema, GH',
        length: '35'
    }
);
console.log(myProfile.placesLived);



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo.scr;
document.querySelector('#photo').alt = myProfile.photo.alt;


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    document.querySelector('#favorite-foods').appendChild(li);
}

);

/* Hobbies List */
myProfile.hobbies.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    document.querySelector('#hobbies').appendChild(li);
}

);

/* Places Lived DataList */
myProfile.placesLived.forEach(placesLived => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd')
    dt.textContent = placesLived.place;
    dd.textContent = placesLived.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
}
);

