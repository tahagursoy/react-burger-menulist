import React, { useEffect, useState } from 'react'
import { Button, Table } from 'antd'
import axios from 'axios'

const Customers = () => {

    let url ='https://northwind.vercel.app/api/customers'

    const [customers, setCustomers] = useState([])
    const [loading, setloading] = useState([true])

    useEffect(()=>{

        axios.get(url).then(res=>{
            setCustomers(res.data)
            console.log(res.data)
            setloading(false)
        })

    },[])

    const columns = [
        {
            title: 'id',
            dataIndex: 'id' 
        },
        {
            title: 'Company Name',
            dataIndex: 'companyName' 
        },
        {
            title: 'Contact Name',
            dataIndex: 'contactName' 
        },
        {
            title: 'Contact Title',
            dataIndex: 'contactTitle' 
        },
        {
            title: 'Delete',
            dataIndex: 'id', 
            render: () => <Button danger >Delete </Button>
        },

    ]

    


  return (
    <Table dataSource={customers} columns={columns} loading={loading} />
  )
}

export default Customers