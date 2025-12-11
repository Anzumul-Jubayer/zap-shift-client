import React from 'react';

const PaymentCancel = () => {
    return (
        <div>
            <h1 className='text-4xl font-semibold'>Payment is Cancelled.Please Try again</h1>
            <Link to='/dashboard/my-parcel'><button className='btn btn-primary text-black'>Try Again</button></Link>
        </div>
    );
};

export default PaymentCancel;