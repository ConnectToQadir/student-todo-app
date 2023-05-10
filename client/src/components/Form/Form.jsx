import { useState } from 'react'
import axios from 'axios'

const Form = () => {

    var [data, setData] = useState({
        name: "",
        gender: "",
        country: "",
        hobbies: []
    })

    const dataChangeHandler = (e) => {

        if (e.target.name === "hobbies") {

            var ary = data.hobbies
            if (e.target.checked) {
                ary.push(e.target.value)
            } else {
                ary = ary.filter((item) => item !== e.target.value)
            }
            setData({ ...data, hobbies: ary })

        } else {
            setData({ ...data, [e.target.name]: e.target.value })
        }

    }


    const submitForm = async (e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:4600/api/student/enroll', data)
            alert("Student Enroll Successfully!")
            setData({
                name: "",
                gender: "",
                country: "",
                hobbies: []
            })
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <div className='Form'>
            <form onSubmit={submitForm} >


                <label htmlFor="name">Name</label>
                <input value={data.name} onChange={dataChangeHandler} required name='name' id='name' type="text" placeholder='Name' />


                <br /><br />

                Gender:
                <input onChange={dataChangeHandler} checked={data.gender ===  "male"} required name='gender' value="male" id="male" type="radio" />
                <label htmlFor="male">Male</label>

                <input onChange={dataChangeHandler} checked={data.gender ===  "female"} required name='gender' value="female" id="female" type="radio" />
                <label htmlFor="female">Female</label>

                <input onChange={dataChangeHandler} checked={data.gender ===  "other"} required name='gender' value="other" type="radio" id='other' />
                <label htmlFor="other">Other</label>



                <br /><br />

                Country:
                <select onChange={dataChangeHandler} value={data.country} required name="country">
                    <option value="" >Select Country</option>
                    <option>Pakistan</option>
                    <option>India</option>
                    <option>Bangladesh</option>
                </select>


                <br /><br />

                Hobbies:
                <input onChange={dataChangeHandler} type="checkbox" checked={data.hobbies.includes("cricket")} value='cricket' name="hobbies" id="cricket" />
                <label htmlFor="cricket">Cricket</label>

                <input onChange={dataChangeHandler} type="checkbox" checked={data.hobbies.includes("pramming")} value='pramming' name="hobbies" id="pramming" />
                <label htmlFor="pramming">Pramming</label>

                <input onChange={dataChangeHandler} type="checkbox" checked={data.hobbies.includes("reading")} value='reading' name="hobbies" id="reading" />
                <label htmlFor="reading">Reading</label>






                <br />
                <br />

                <button>Submit</button>






            </form>
        </div>
    )
}

export default Form