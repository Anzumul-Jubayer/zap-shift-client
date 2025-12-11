import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { MdEdit } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcel = () => {
  const { user } = useAuth();
 
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [],refetch } = useQuery({
    queryKey: ["myParcels", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  const handleSendParcelDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcel/${id}`)
        .then (res=>{
           
            if(res.data.deletedCount){
                refetch()
              Swal.fire({
          title: "Deleted!",
          text: "Your parcel request has been deleted.",
          icon: "success",
        });
            }
        })
        
      }
    });
  };
  return (
    <div>
      <h2>All my parcels:{parcels.length}</h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th>Payment</th>
              <th>Tracking Id</th>
              <th>Delivery Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.cost}</td>
                <td>{parcel.paymentStatus==='paid'?<span className="text-primary">Paid</span>:<Link to={`/dashboard/payment/${parcel._id}`} className="btn btn-primary btn-small text-black">Pay</Link>}</td>
                <td>{parcel.trackingId}</td>
                <td>{parcel.deliveryStatus}</td>
                <td>
                  <button className="btn btn-square hover:bg-primary">
                    <FaMagnifyingGlass />
                  </button>
                  <button className="btn btn-square hover:bg-primary mx-2">
                    <MdEdit />
                  </button>
                  <button
                    onClick={() => handleSendParcelDelete(parcel._id)}
                    className="btn btn-square hover:bg-primary"
                  >
                    <FaRegTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcel;
