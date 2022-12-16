import React, { useState } from 'react'
import { Modal} from 'react-bootstrap'


const Menulist = ({menus}) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [size, setSize] = useState('small')
  const [count, setCount] = useState(1)


  return (
   <div className='container'>
        <div className='row'> 
            <div className='col-12 shadow text-center my-3 py-3'  >
                <h4>{menus.ad}</h4>
                <img 
                  src={menus.img}
                  className='w-75'
                  style={{height:320}}
                  onClick={handleShow}
                  alt=''
                />
                <h6 className='text-start mx-2'>Size</h6>
                <select value={size} onChange={(e)=> setSize(e.target.value)} className='form-select'>
                  {
                  menus.ozellik.map((item)=>(
                    <option value={menus.fiyat[0].item}>{item}</option>
                  ))
                  }
                </select>
                <h6 className='text-start m-2'>Quantity</h6>
                <select value={count} onChange={(e)=>setCount(e.target.value)} className='form-select'>
                 {
                  [...Array(10).keys()].map((count)=>(
                    <option value={count+1}>{count+1}</option>
                  ))
                 }
                 
                 </select>
                 <p className='mt-3'><h4>Price: {menus.fiyat[0][size]*count} TL</h4></p> 
                 <button className='btn btn-success mt-2'>Sepete ekle</button>

                 <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>{menus.ad}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><img src={menus.img} alt=''/></Modal.Body>
                    <Modal.Footer>
                      {menus.desc}
                      <button className='btn btn-danger' onClick={handleClose}>KAPAT</button>
                    </Modal.Footer>
                  </Modal>
            </div>
        </div>   
   </div>
    

  )
}

export default Menulist