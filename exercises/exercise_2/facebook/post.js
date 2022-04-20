const post={
    share_post:"Amigos",
    location:"Morelia, Mich.",
    description:"Estoy aprendiendo...",
    date_post:"18/04/2020",
    hour_post:"18:00:34",
    people_tag:["Anitta Reyes", "Jose Luis CM"],
    comments:{        
        name:"Anitta Reyes",
        comment:"Felicidades...",
        date_post:"18/04/2020",
        reaction:[
            {
                like:3,
                love:5,
                wow:9
            }                        
        ],
        name:"Luna ERZ",
        comment:"Revisa...",
        date_post:"19/04/2020",
        reaction:[
            {
                like:1,
                love:0,
                wow:2
            }                        
        ]                
    },
    getPeopleTag:function(){
        return this.people_tag;
    }
    
}
console.log("PeopleTag "+post.getPeopleTag());
