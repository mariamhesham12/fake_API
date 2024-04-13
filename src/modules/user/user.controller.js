const login=async(req,res,next)=>{
    const { email, password } = req.body;
    if(email=='abc@gmail.com'&&password=='123456'){
    return res.json({
        status:0,
        message:"user logged in successfully",
        customer:{
            id:"123",
            name:"abc",
            numberOfNotifications:12
        },
        contacts:{
            phone:"123456789",
            email:"abc@gmail.com",
            link:"abc@udemy.com"
        }
})}
else{
    res.json({message:"invalid email or password"})
}
}

const register=async(req,res,next)=>{
    const{user_name,country_mobile_code,mobile_phone,email,password,profile_picture}=req.body
    if((user_name=='abc'||user_name)&&(country_mobile_code=='+20'||country_mobile_code)&&(mobile_phone=='123456789'||mobile_phone)&&(email=='abc@gmail.com'||email)&&(password=='123456'||password)&&(profile_picture==''||profile_picture)) 
    return res.json({
        status:0,
        message:"user registered successfully",
        customer:{
            id:"123",
            name:"abc",
            numberOfNotifications:12
        },
        contacts:{
            phone:"123456789",
            email:"abc@gmail.com",
            link:"abc@udemy.com"
        }
})
}

const forgetPassword=async(req,res,next)=>{
    const{email}=req.body
    if(email=='abc@gmail.com'||email){
        return res.json({
            status:0,
            message:"Success",
            support:"We have sent an email to you , if you need any help contact us on support@system.com"
        })
    }
}

const home=async(req,res,next)=>{
    return res.json({ 
        "status": 0,
        "message": "Success",
        "data":
        { 
            "services":
            [
                {
                    "id": 1,
                    "title": "Service 1",
                    "image":"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                    
                },
                {
                    "id": 2,
                    "title": "Service 2",
                    "image":"https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                    
                },
                {
                    "id": 3,
                    "title": "Service 3",
                    "image":"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                    
                },
                {
                    "id": 4,
                    "title": "Service 4",
                    "image":"https://images.unsplash.com/photo-1521790797524-b2497295b8a0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                },
                {
                    "id": 5,
                    "title": "Service 5",
                    "image":"https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                    
                },
                {
                    "id": 6,
                    "title": "Service 6",
                    "image":"https://images.unsplash.com/photo-1603714228681-b399854b8f80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
                }
            ],
            "banners":
            [
                {
                    "id": 1,
                    "link":"",
                    "title": "banner 1",
                    "image":"https://images.unsplash.com/photo-1598511756475-c722aeaf9ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
                },
                {
                    "id": 2,
                    "link":"",
                    "title": "banner 2",
                    "image":"https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                },
                {
                    "id": 3,
                    "title": "banner 3",
                    "image":"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                },
                {
                    "id": 4,
                    "title": "banner 4",
                    "image":"https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                }
            ],
            "stores":
            [
                {
                    "id": 1,
                    "title": "Store 1",
                    "image":"https://images.unsplash.com/photo-1562280963-8a5475740a10?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                },
                {
                    "id": 2,
                    "title": "Store 2",
                    "image":"https://images.unsplash.com/photo-1579026111824-6f6e4daf2ffd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3RvcmVzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                },
                {
                    "id": 3,
                    "title": "Store 3",
                    "image":"https://images.unsplash.com/photo-1482859602406-7659b00979fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN0b3Jlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                },
                {
                    "id": 4,
                    "title": "Store 4",
                    "image":"https://images.unsplash.com/photo-1569565195293-c5e30f91b40c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHN0b3Jlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                },
                {
                    "id": 5,
                    "title": "Store 5",
                    "image":"https://images.unsplash.com/photo-1555686913-2e38a187c840?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHN0b3Jlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                },
                {
                    "id": 6,
                    "title": "Store 6",
                    "image":"https://images.unsplash.com/photo-1542581482-851c38ee4b94?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHN0b3Jlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                }
            ]
        }
        })
}
export{
    login,
    register,
    forgetPassword,
    home
}