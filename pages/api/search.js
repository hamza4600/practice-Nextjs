const Users=[
    
    {
        id:1,
        "name":"Azzaare",
        "email":"jf@baffier.fr",
        "login":"Azzaare",
        "avatar":"https://avatars.githubusercontent.com/u/4535131?v=4\u0026s=80",
    },
    {
        id:2,
        "name":"Vitor Oliveira",
        "email":"vbrazo@gmail.com",
        "login":"vbrazo",
        "avatar":"https://avatars.githubusercontent.com/u/1292556?v=4\u0026s=80",
    },
    {
        id:3,
        "name":"phillip055",
        "email":"vorathep055@gmail.com",
        "login":"phillip055",
        "avatar":"https://avatars.githubusercontent.com/u/9292937?v=4\u0026s=80",
    },
    {
        id:4,
        "name":"Emil Suleymanov",
        "email":"emil.suleymanov@tum.de",
        "login":"sssemil",
        "avatar":"https://avatars.githubusercontent.com/u/3113308?v=4\u0026s=80",
    },
    {
        id:5,
        "name":"MaximSmolskiy",
        "email":"mithridatus@mail.ru",
        "login":"MaximSmolskiy",
        "avatar":"https://avatars.githubusercontent.com/u/25690822?v=4\u0026s=80",

    },
    {
        id:6,
        "name":"mike zhang",
        "email":"zhangmingkai19892013@gmail.com",
        "login":"zhangmingkai4315",
        "avatar":"https://avatars.githubusercontent.com/u/8868334?v=4\u0026s=80",
    },
    {
        id:7,
        
        "name":"Oleg Karasik",
        "email":"OlegKarasik@coherentsolutions.com",
        "login":"OlegKarasik",
        "avatar":"https://avatars.githubusercontent.com/u/36962980?v=4\u0026s=80"
    },
    {
        id:8,
        
        "name":"maxbarsukov",
        "email":"maximbarsukov@bk.ru",
        "login":"maxbarsukov",
        "avatar":"https://avatars.githubusercontent.com/u/60351594?v=4\u0026s=80",
    },
    {
        id:9,
        "name":"Thomas Huang",
        "email":"thomas.huang2017@gmail.com",
        "login":"thomashhuang",
        "avatar":"https://avatars.githubusercontent.com/u/18605591?v=4\u0026s=80",
    },
    {
        id:10,
        "name":"Ali Hassan",
        "email":"contact@alihassan.dev",
        "login":"malihassan20",
        "avatar":"https://avatars.githubusercontent.com/u/10503652?v=4\u0026s=80",
    }
]
// apply logic if req commes from my app then show data
// if(req.query.search){
//   const result = Users.filter(user=>
//     user.name.toLocaleLowerCase().includes(req.query.search)||
//     user.email.toLocaleLowerCase().includes(req.query.search)||
//     user.login.toLocaleLowerCase().includes(req.query.search)
//   )
//   res.send(result)
// }
// else{
//   res.send(Users)
// }

export default function handeler(req,res) {
    const {q} = req.query;
    const keys=["name","email","login"];
    const Search =( data) =>{
        if(q){
            return data.filter(user=>
                keys.some(key=>
                    user[key].toLocaleLowerCase().includes(q.toLocaleLowerCase())
                )
            )
        }
        return data;
    }

   
    res.status(200).json(Search(Users))
}
 