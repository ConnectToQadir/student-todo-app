const router = require('express').Router()
const StudentModel = require('../model/student')



router.post('/enroll',async (req,res)=>{
    try {


        if(req.body.hobbies.length === 0){
            return(
                res.status(400).json({
                    success:false,
                    message:"Please select atleast one hobby!"
                })
            )
        }

        // method 1
        var newStudent = new StudentModel(req.body)
        var savedStudent = await newStudent.save()

        res.status(201).json({
            success:true,
            message:savedStudent
        })


        // method 2
        // var newStudent = await StudentModel.create(req.body)
        
    } catch (error) {

        res.status(500).json({
            success:false,
            message:error.message.split(":")[2].trim()
        })
    }
})



module.exports = router