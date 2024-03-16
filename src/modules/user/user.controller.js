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
export{
    login,
    register,
    forgetPassword
}