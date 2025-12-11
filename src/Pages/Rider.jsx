import React from "react";
import { useForm, useWatch } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Rider = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
    control,
  } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const wareHouses = useLoaderData();
  const regionsDuplicate = wareHouses.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];

  const districtByRegion = (region) => {
    const regionDistricts = wareHouses.filter((w) => w.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };
  const riderRegion = useWatch({ control, name: "region" });
  const handleBeARiderApplication = (data) => {
    console.log(data);
    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "your application has been submitted.please wait patiently",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };
  return (
    <div>
      <h2 className="text-4xl text-primary">Be a Rider</h2>
      <form
        onSubmit={handleSubmit(handleBeARiderApplication)}
        className="mt-12 p-4"
      >
        {/* two colums */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 my-10">
          {/* senderinfo */}

          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Rider Details</h4>
            {/* name */}
            <label className="label">Rider Name</label>
            <input
              type="text"
              className="input w-full"
              defaultValue={user?.displayName}
              {...register("riderName")}
              placeholder="rider name"
            />
            {/* email */}
            <label className="label">Rider Email</label>
            <input
              type="email"
              className="input w-full"
              defaultValue={user?.email}
              {...register("riderEmail")}
              placeholder="rider email"
            />
            {/*  region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Region</legend>
              <select
                {...register("region")}
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
            {/* district */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">District</legend>
              <select
                {...register("district")}
                defaultValue="Pick a district"
                className="select w-full"
              >
                <option disabled={true}>Pick a district</option>
                {districtByRegion(riderRegion).map((el, i) => (
                  <option key={i} value={el}>
                    {el}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* Address */}
            <label className="label mt-4">Your Address</label>
            <input
              type="text"
              className="input w-full"
              {...register("address")}
              placeholder="Rider Address"
            />
          </fieldset>
          {/* more info */}
          <div>
            {/* license */}
            <fieldset className="fieldset">
              <h4 className="text-2xl font-semibold">More Details</h4>
              <label className="label">Driving License</label>
              <input
                type="text"
                className="input w-full"
                {...register("license")}
                placeholder="driving license"
              />
              {/* nid */}
              <label className="label">NID</label>
              <input
                type="number"
                className="input w-full"
                {...register("nid")}
                placeholder="rider nid"
              />

              {/* Bike Information */}
              <label className="label mt-4">Bike Information</label>
              <input
                type="text"
                className="input w-full"
                {...register("bike")}
                placeholder="bike info"
              />
            </fieldset>
          </div>
        </div>
        <input
          type="submit"
          className="btn btn-primary text-black"
          value="Apply as a rider"
        />
      </form>
    </div>
  );
};

export default Rider;
