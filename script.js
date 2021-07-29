var makeup =[
    {
        name : "Note Allık",
        image : "image/allik.jpg",
        link : "https://www.gratis.com/note-luminous-silk-compact-blusher-allik/urun/NoteVaryant001?sku=10033068"
    },

    {
        name : "Note Fondöten",
        image : "image/fondoten.jpg",
        link : "https://www.gratis.com/note-mattifying-extreme-wear-foundation-fondoten/urun/NoteVaryant008?sku=10033336"
    },

    {
        name : "Pastel Beyaz Oje",
        image : "image/oje.jpg",
        link : "https://www.gratis.com/pastel-oje/urun/Pastel1014?sku=11000048"
    },

    {
        name : "Physicians Formula Butter Bronzer",
        image : "image/bronzer.jpg",
        link : "https://www.gratis.com/physicians-formula-murumuru-butter-bronzer/urun/PhysiciansFormula1008?gclid=CjwKCAjwgdX4BRB_EiwAg8O8HQM5egpP3yySXB1JxA6d4wlUuLDzKCEUlkjuq11q1hs1iqtghPir0hoCPcsQAvD_BwE"
    },

    {
        name : "Nyx Maskara",
        image : "image/maskara.jpg",
        link : "https://www.nyxcosmetics.com.tr/worth-the-hype-volumizing-lengthening-mascara?change_variant=1&sku=K2782400&OM.zn=Favorite%20Category%20Top%20Sellers-w22&OM.zpc=800897140250"
    },

    {
        name : "Nyx Eyeliner",
        image : "image/eyeliner.jpg",
        link : "https://www.nyxcosmetics.com.tr/epic-ink-liner"
    },

    {
        name : "Nyx Far Paleti",
        image : "image/far.jpg",
        link : "https://www.nyxcosmetics.com.tr/ultimate-shadow-palette"
    },

    {
        name : "Essence Kaş Jeli",
        image : "image/kasjeli.jpg",
        link : "https://www.watsons.com.tr/p/essence-kas-kirpik-jeli-maskara-30662?#ins_eureka=eyJjYW1wYWlnbklkIjowLCJrZXl3b3JkIjoiZXNzZW5jZSBrYcWfIiwib3JkZXIiOjEsInByb2R1Y3RJZCI6IjMwNjYyIiwic2VhcmNoSWQiOiIxNTk1Mjc5MDk0eXFwOGZSa0taaSJ9"
    },

    {
        name : "Loreal Paris True Match Kapatıcı",
        image : "image/kapatici.jpg",
        link : " https://www.watsons.com.tr/p/loreal-paris-true-match-kapatici-3n-creamy-beige-27035?_sgm_campaign=scn_8075733a589e000&_sgm_source=27035&_sgm_action=click"
    },

    {
        name : "Urban Care Dolgunlaştırıcı Saç Kremi",
        image : "image/sackremi.jpg",
        link : "https://www.watsons.com.tr/p/urban-care-pembe-greyfurt-ve-zencefil-iceren-dolgunlastirici-sac-bakim-sampuani-250-ml-35500?#ins_eureka=eyJjYW1wYWlnbklkIjowLCJrZXl3b3JkIjoidXJiYW4gY2FyZSAiLCJvcmRlciI6OCwicHJvZHVjdElkIjoiMzU1MDAiLCJzZWFyY2hJZCI6IjE1OTUyNzkxODMwUjh6TElzMDlpIn0%3D"
    }
];


var index = 0;
var slideCount = makeup.length;
var settings = {
    duration:'2000',
    random: false
}
var interval;


init(settings);

function init(settings){
    var prev;
    interval = setInterval(function(){
        if(settings.random){
            do{
                index = Math.floor(Math.random()*slideCount);
            }
            while(index == prev)
            prev = index;
        }
        else{
            if(slideCount == index){
                index = 0;
            }
            showSlide(index);
            index++;

        }
        showSlide(index);
    },settings.duration)
}

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
})


document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})


function showSlide(i)
{
    if(i == slideCount){
        index = 0;
    }

    if(i < 0){
        index = slideCount ;
    }
    document.querySelector('.card-img-top').setAttribute('src',makeup[index].image);
    document.querySelector('.card-title').textContent = makeup[index].name;
    document.querySelector('.card-link').setAttribute('href',makeup[index].link);
}


var ileri = document.querySelector('.fa-arrow-circle-right');
var geri = document.querySelector('.fa-arrow-circle-left');

ileri.addEventListener('click',function(e){
    index++;
    showSlide(index);
})


geri.addEventListener('click',function(e){
    index--;
    showSlide(index)
})