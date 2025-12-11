import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const PaymentSuccess = () => {
    const [searchParams]=useSearchParams()
    const [paymentInfo,setpaymentInfo]=useState({})
    const sessionId=searchParams.get('session_id')
    const axiosSecure=useAxiosSecure()
    useEffect(()=>{
      if(sessionId){
         axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
         .then(res=>{
            console.log(res.data)
            setpaymentInfo({
                transactionId:res.data.transactionId,
                trackingId:res.data.trackingId
            })
         })
      }
    },[sessionId,axiosSecure])



    return (
        <div>
            <h1 className='text-4xl font-semibold'>Payment Successful</h1>
            <p>Your TransactionId:{paymentInfo.transactionId}</p>
            <p>Your Parcel Tracking Id:{paymentInfo.trackingId}</p>
        </div>
    );
};

export default PaymentSuccess;
