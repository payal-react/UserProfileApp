import React from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';  
import { useContext,useState, useEffect } from 'react';
import { schoolContext } from "./../store/Provider"; 
function UserList(props) {  

    const { setUser,setSelectedProfile } = useContext(schoolContext);

    const editUser = item => {
        console.log(item);
        props.tabOnChange();
        setSelectedProfile(item);
    };


  const [data, setData] = useState([]);  
  useEffect(() => {  
    const GetData = async () => {  
      const result = await axios('https://reqres.in/api/users?page=2');  
      console.log(result.data.data);
      setData(result.data.data);  
      setUser(result.data.data);
    };  
    GetData();  
  }, []);  

  return (  
    <div className="animated fadeIn">   
            <Table striped bordered hover> 
                <thead>  
                  <tr>  
                    <th>FirstName</th>  
                    <th>LastName</th>  
                    <th>Email</th>  
                    <th>Avatar</th>
                  </tr>  
                </thead>  
                <tbody>  
                  {  
                    data.map((item, idx) => {  
                      return <tr key={item.id} onClick={() => { editUser(item) }}>  
                        <td>{item.first_name}</td>  
                        <td>{item.last_name}</td>  
                        <td>{item.email}</td>  
                        <td>{item.avatar}</td>    
                      </tr>  
                    })}  
                </tbody>  
              </Table>    
    </div>  
  )  
}  
export default UserList