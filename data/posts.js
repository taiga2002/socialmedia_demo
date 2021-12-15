import {USERS} from "./users"

export const POSTS = [
{
    imageUrl:"https://images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg",
    user: USERS[0].user,
    likes:7870,
    caption:"Healthy lifestyle",
    profile_picture:USERS[0].image,
    comments: [
        {user:"haruka",
        comment: "Wow this sounds so nice i wanna try"
        },
        {
            user:"masaki",
            comment:"Once i wake up i gotta do same :)"
        },
    ],
},
{
    imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvcQTlgu5tUcKDTDt14ZPYPWUPyjmg4AY3Aw&usqp=CAU",
    user: USERS[1].user,
    likes:800,
    caption:"Healthy lifestyle",
    profile_picture:USERS[1].image,
    comments: [
        {user:"haruka",
        comment: "Wow this sounds so nice i wanna try"
        },
        {
            user:"masaki",
            comment:"Once i wake up i gotta do same :)"
        },
    ],
},
]
