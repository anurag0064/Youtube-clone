import { useState } from "react";
import axios from 'axios';
import Navbar from "../../../components/header/Navbar";
import Sidebar from "../../../components/header/Sidebar";


const Createvideo=() => {
    const [slug, SetSlug] = useState('');
    const [name, SetName] = useState('');    
    const [thumbnail, SetThumbnail] = useState('');
    const [channelid, SetChannelid] = useState(''); 
    const [description, SetDescription] = useState(''); 
    const [logo, SetLogo] = useState(''); 


    
  const handleSubmit = async(e) => {
    e.preventDefault();
    SetLoading(true);
     SetSuccess('');
     SetError('');

     if (slug == "" ||name == "" || logo == "" || description == "" || thumbnail == "" || channelid =="") {
        SetError("please fill all fields!");
      SetLoading(false);
  
        return false;
     }
      
     try {

        const res = await axios.post("http://127.0.0.1:5000/Createvideo", {
          name:channelid, slug ,logo , description , thumbnail, 
        });
       

      }
      catch(err ) {
        SetError(err)
    
       }


   } 
  return (
    <>
      <Navbar/>
      <Sidebar/>
      
  

    

    
    </>
  )
}
export default Createvideo
