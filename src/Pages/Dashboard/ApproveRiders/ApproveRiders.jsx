import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaEye, FaTrash, FaUserCheck } from "react-icons/fa";
import { IoPersonRemoveSharp } from "react-icons/io5";
import Swal from "sweetalert2";

const ApproveRiders = () => {
  const axiosSecure = useAxiosSecure();

  // react-query useQuery
  const { data: riders = [], refetch } = useQuery({
    queryKey: ["riders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/riders");
      return res.data;
    },
  });

  // update rider status
  const updateRiderStatus = (status, rider) => {
    const updateInfo = { status, email: rider.riderEmail };

    axiosSecure.patch(`/riders/${rider._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Rider status is set to ${status}`,
          showConfirmButton: false,
          timer: 2500,
        });
        refetch(); // auto-refresh table
      }
    }).catch(err => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong while updating status!",
      });
      console.error(err);
    });
  };

  const handleApproval = (rider) => {
    updateRiderStatus("approved", rider);
  };

  const handleReject = (rider) => {
    updateRiderStatus("rejected", rider);
  };

  return (
    <div>
      <h2 className="text-5xl mb-4">Riders Pending Approval: {riders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Email</th>
              <th>District</th>
              <th>Application Status</th>
              <th>Work Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider, i) => (
              <tr key={rider._id}>
                <th>{i + 1}</th>
                <td>{rider.riderName}</td>
                <td>{rider.riderEmail}</td>
                <td>{rider.district}</td>
                <td>
                  <p
                    className={
                      rider.status === "approved"
                        ? "text-green-800"
                        : rider.status === "rejected"
                        ? "text-red-500"
                        : "text-yellow-600"
                    }
                  >
                    {rider.status}
                  </p>
                </td>
                <td>{rider.workStatus}</td>
                <td className="flex gap-2">
                  <button
                    onClick={() => handleApproval(rider)}
                    className="btn btn-success"
                  >
                    <FaEye />
                  </button>
                  <button
                    onClick={() => handleApproval(rider)}
                    className="btn btn-success"
                  >
                    <FaUserCheck />
                  </button>
                  <button
                    onClick={() => handleReject(rider)}
                    className="btn btn-warning"
                  >
                    <IoPersonRemoveSharp />
                  </button>
                  <button className="btn btn-error">
                    <FaTrash />
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

export default ApproveRiders;
