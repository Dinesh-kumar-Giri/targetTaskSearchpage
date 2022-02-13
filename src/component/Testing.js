import React,{useState} from 'react'
import axios from 'axios'

function Testing() {
  const [selectedFile,setSelectedFile]=useState(null)

  const userId = JSON.parse(localStorage.getItem('LogInUser'))._id
  const [postData, setpostData] = useState({
    image: '',
    title: '',
    decription: '',
    price: userId,
  })
  const handle = (e) => {
    setpostData({ ...postData, [e.target.name]: e.target.value })
  }


const submitPost=(e)=>{

 

  e.preventDefault();
  console.log('e.target-----',selectedFile)

  let formData = new FormData()
  formData.append('name','dssd')
  formData.append('file',selectedFile)
  console.log('formdata type------------------')

  axios({
    method: 'POST',
    data: formData,
    // withCredentials: true,
    url: `http://localhost:5000/UploadPostContent`,
    // config: { headers: { 'Content-Type': 'multipart/form-data' } },
  }).then((res) => {
    // if (res.data.status) {
    //     alert(res.data.message)
    // } else {
    //   console.log('not aded')
    // }
    console.log(res)
  })
  // axios
  //   .post(`http://localhost:5000/UploadPostContent`, formData)
  //   .then((res) => {
  //     alert("File Upload success");
  //   })
  //   .catch((err) => alert(err,"File Upload Error"));

}

  return (
    <div className=" my-4 mx-5 ">
            <form onSubmit={submitPost}>
            <input type="file"  name="image" onChange={(e) => setSelectedFile(e.target.files[0])}/>
            <input type="text" placeholder='title' name="title" onChange={handle}/><hr/>
            <input type="text" placeholder='decription' name="decription" onChange={handle}/><hr/>
            <input type="text" placeholder='price' name="price" onChange={handle}/><hr/>
             <input type='submit'/>
            </form>
    </div>
  )
}

export default Testing