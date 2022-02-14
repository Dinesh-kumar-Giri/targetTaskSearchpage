import React,{useState} from 'react'
import axios from 'axios'

function Testing() {
  const [selectedFile,setSelectedFile]=useState(null)
  const [postData, setpostData] = useState({
    title: '',
    decription: '',
    price: '',
  })

  const userId = JSON.parse(localStorage.getItem('LogInUser'))._id
 
  const handle = (e) => {
    setpostData({ ...postData, [e.target.name]: e.target.value })
  }


const submitPost=(e)=>{

 

  e.preventDefault();
  console.log('e.target-----',selectedFile)

  let formData = new FormData()
  formData.append('title',postData.title)
  formData.append('decription',postData.decription)
  formData.append('price',postData.price)

  formData.append('file',selectedFile)
  console.log('formdata type------------------')

  axios({
    method: 'POST',
    data: formData,
    url: `http://localhost:5000/UploadPostContent`,
  }).then((res) => {
    console.log(res)
  })
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