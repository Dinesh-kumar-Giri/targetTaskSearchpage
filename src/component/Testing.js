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



  // axios({
  //   method: 'POST',
  //   headers: {
  //     "Content-Type": "multipart/form-data"
  //   },
  //   data: selectedFile,
  //   url: `https://productimage12.s3.ap-south-1.amazonaws.com/ss?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2HFJ2UPFZA4I7KDO%2F20220215%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20220215T064318Z&X-Amz-Expires=600&X-Amz-Signature=3f743e68c9fe8da2e50f98def999dd6fb74477a28818da1d1a3117a3b2ef0752&X-Amz-SignedHeaders=host`,
  // }).then((res) => {
  //   console.log(res)
  // }).catch((err)=>{
  //   console.log(err)
  // })
  //  fetch(`https://productimage12.s3.ap-south-1.amazonas.com/file-name.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA2HFJ2UPFSZ7X7WF5%2F20220215%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20220215T051217Z&X-Amz-Expires=300&X-Amz-Signature=4cc40ff29b3576e2e53a319e2ed6455825721999cc82bd645f5cc7064532f67e&X-Amz-SignedHeaders=hos`, {
  //   method: "PUT",
  //   headers: {
  //     "Content-Type": "multipart/form-data"
  //   },
  //   body:selectedFile
  // })

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