
function showSeal(id){

    const s = sealebrities[id];

    profilePic.src = s.img;

    profileName.textContent =
        s.name;

    followers.textContent =
        s.followers;

    likes.textContent =
        s.likes;

    posts.textContent =
        s.posts;

    location.textContent =
        s.location;

    bio.textContent =
        s.bio;

    food.textContent =
        s.food;

    personality.textContent =
        s.personality;

    famous.textContent =
        s.famous;

    fact.textContent =
        s.fact;

    achievements.innerHTML = "";

    s.achievements.forEach(a=>{

        achievements.innerHTML +=
            `<li>${a}</li>`;
    });

    gallery.innerHTML = "";

    s.gallery.forEach(img=>{

        gallery.innerHTML +=
        `
        <img
            src="${img}"
            class="gallery-img">
        `;
    });

    comments.innerHTML = "";

    s.comments.forEach(c=>{

        comments.innerHTML +=
        `
        <div class="comment">
            ${c}
        </div>
        `;
    });
}

const sealebrities = {

ponsuke:{

name:"Ponsuke ✓",

img:"Sealebs/Ponsuke.jpg",

followers:"24M",

likes:"2.4B",

posts:"1,247",

location:"🇯🇵 Japan",

bio:
"The legendary ring-balancing seal whose performances captivated millions around the world.",

food:"Mackerel",

personality:"Gentle • Patient • Playful",

famous:"Balancing rings",

fact:"Could balance multiple rings simultaneously.",

achievements:[
"World-famous performer",
"Internet icon",
"Aquarium superstar",
"Seal legend"
],

gallery:[
"Sealebs/Ponsuke1.jpg",
"Sealebs/Ponsuke2.jpg",
"Sealebs/Ponsuke3.jpg",
"Sealebs/Ponsuke4.jpg"
],


},


niko:{

name:"Niko ✓",

img:"Sealebs/niko.jpg",

followers:"8.2M",

likes:"612M",

posts:"842",

location:"🇯🇵 Japan",

bio:
"A lovable seal known for expressive reactions and adorable curiosity.",

food:"Salmon",

personality:"Curious • Energetic",

famous:"Adorable reactions",

fact:"Loved interacting with visitors.",

achievements:[
"Reaction king",
"Fan favorite",
"Aquarium celebrity"
],

gallery:[
"Sealebs/Niko1.jpg",
"Sealebs/niko2.jpg",
"Sealebs/niko3.jpg",
"Sealebs/niko4.jpg"
],


},


yuki:{

name:"Yuki-chan ✓",

img:"Sealebs/Yuki.jpg",

followers:"11M",

likes:"1.1B",

posts:"972",

location:"🇯🇵 Japan",

bio:
"An elegant seal known for graceful poses and calm beauty.",

food:"Herring",

personality:"Graceful • Relaxed",

famous:"Photogenic appearances",

fact:"One of the most photographed seals.",

achievements:[
"Seal princess",
"Photo icon",
"Internet star"
],

gallery:[
"Sealebs/Yuki1.jpg",
"Sealebs/Yuki2.jpg",
"Sealebs/Yuki3.jpg",
"Sealebs/Yuki4.jpg"
],

comments:[
"Beautiful.",
" Queen behavior.",
"The prettiest seal."
]
},


reggae:{

name:"Reggae ✓",

img:"Sealebs/reggae.jpg",

followers:"6.5M",

likes:"450M",

posts:"735",

location:"🇯🇵 Japan",

bio:
"A playful giant famous for interacting with toys and people.",

food:"Sardines",

personality:"Friendly • Playful",

famous:"Playful antics",

fact:"Loved toys.",

achievements:[
"Toy master",
"Crowd favorite",
"Gentle giant"
],

gallery:[
"Sealebs/reggae1.jpg",
"Sealebs/reggae2.jpg",
"Sealebs/reggae3.jpg",
"Sealebs/reggae4.jpg"
],

},


yochan:{

name:"Yo-chan ✓",

img:"Sealebs/yochan.jpg",

followers:"9.8M",

likes:"874M",

posts:"1044",

location:"🇯🇵 Japan",

bio:
"An internet darling famous for expressive faces and wholesome moments.",

food:"Squid",

personality:"Sweet • Curious",

famous:"Cute expressions",

fact:"Appeared in countless viral clips.",

achievements:[
"Viral superstar",
" Internet favorite",
" Seal icon"
],

gallery:[
"Sealebs/yo1.jpg",
"Sealebs/yo2.jpg",
"Sealebs/yo3.jpg",
"Sealebs/yo4.jpg"
],
}

};