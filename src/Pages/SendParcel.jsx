import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
    control,
  } = useForm();
  const { user } = useAuth();
  const navigate=useNavigate()
  const axiosSecure = useAxiosSecure();
  const wareHouses = useLoaderData();
  const regionsDuplicate = wareHouses.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  const senderRegions = useWatch({ control, name: "senderRegion" });
  const receiverRegions = useWatch({ control, name: "receiverRegion" });
  const districtByRegion = (region) => {
    const regionDistricts = wareHouses.filter((w) => w.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };
  const handleSendParcel = (data) => {
    console.log(data);
    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;
    const packageWeight = parseFloat(data.parcelWeight);
    let cost = 0;
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (packageWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = packageWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    data.cost = cost;
    Swal.fire({
      title: "Agree with the price??",
      text: `You have to pay ${cost} Tk!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/parcels", data).then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            navigate('/dashboard/my-parcel')
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "please continue to payment",
              showConfirmButton: false,
              timer: 2500,
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <h2 className="text-5xl font-bold">Send A Parcel</h2>
      <form onSubmit={handleSubmit(handleSendParcel)} className="mt-12 p-4">
        {/* document */}
        <div>
          <label className="label mr-4">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio"
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio"
            />
            Non-Document
          </label>
        </div>
        {/* parcel info:name,*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-10">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              className="input w-full"
              {...register("parcelName")}
              placeholder="parcel name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label ">Parcel Weight</label>
            <input
              type="number"
              className="input w-full"
              {...register("parcelWeight")}
              placeholder="parcel weight"
            />
          </fieldset>
        </div>
        {/* two colums */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-10">
          {/* senderinfo */}

          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Sender Details</h4>
            {/* name */}
            <label className="label">Sender Name</label>
            <input
              type="text"
              className="input w-full"
              defaultValue={user?.displayName}
              {...register("senderName")}
              placeholder="sender name"
            />
            {/* email */}
            <label className="label">Sender Email</label>
            <input
              type="email"
              className="input w-full"
              defaultValue={user?.email}
              {...register("senderEmail")}
              placeholder="sender email"
            />
            {/* sender region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Region</legend>
              <select
                {...register("senderRegion")}
                defaultValue="Pick a region"
                className="select w-full"
              >
                <option disabled={true}>Pick a region</option>
                {regions.map((el, i) => (
                  <option key={i} value={el}>
                    {el}
                  </option>
                ))}
              </select>
            </fieldset>
            {/* sender district */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender District</legend>
              <select
                {...register("senderDistrict")}
                defaultValue="Pick a district"
                className="select w-full"
              >
                <option disabled={true}>Pick a district</option>
                {districtByRegion(senderRegions).map((el, i) => (
                  <option key={i} value={el}>
                    {el}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* Address */}
            <label className="label mt-4">Sender Address</label>
            <input
              type="text"
              className="input w-full"
              {...register("senderAddress")}
              placeholder="sender Address"
            />
            {/* phone */}
            <label className="label mt-4">Sender Phone</label>
            <input
              type="text"
              className="input w-full"
              {...register("senderPhone")}
              placeholder="sender Phone"
            />
          </fieldset>
          {/* reciver info */}
          <div>
            {/* name */}
            <fieldset className="fieldset">
              <h4 className="text-2xl font-semibold">Receiver Details</h4>
              <label className="label">Receiver Name</label>
              <input
                type="text"
                className="input w-full"
                {...register("receiverName")}
                placeholder="receiver name"
              />
              {/* email */}
              <label className="label">Receiver Email</label>
              <input
                type="email"
                className="input w-full"
                {...register("receiverEmail")}
                placeholder="receiver email"
              />
              {/* receiver region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver Region</legend>
                <select
                  {...register("receiverRegion")}
                  defaultValue="Pick a region"
                  className="select w-full"
                >
                  <option disabled={true}>Pick a region</option>
                  {regions.map((el, i) => (
                    <option key={i} value={el}>
                      {el}
                    </option>
                  ))}
                </select>
              </fieldset>
              {/* receiver district */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Receiver District</legend>

                <select
                  {...register("receiverDistrict")}
                  defaultValue="Pick a district"
                  className="select w-full"
                >
                  <option value="Pick a district" disabled>
                    Pick a district
                  </option>

                  {districtByRegion(receiverRegions)?.map((el, i) => (
                    <option key={i} value={el}>
                      {el}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* Address */}
              <label className="label mt-4">Receiver Address</label>
              <input
                type="text"
                className="input w-full"
                {...register("receiverAddress")}
                placeholder="receiver Address"
              />
              {/* phone */}
              <label className="label mt-4">Receiver Phone</label>
              <input
                type="text"
                className="input w-full"
                {...register("receiverPhone")}
                placeholder="receiver Phone"
              />
            </fieldset>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-primary text-black"
          value="Send Parcel"
        />
      </form>
    </div>
  );
};

export default SendParcel;
