"use client";

import React, { useState, useEffect } from "react";
import { bookingSchema } from "../Interface";
import { calculateAmount } from "@/services/request";
import Loader from "@/Loader/Loader";

const BookingProcessOne = ({
  setBookingInfo,
  bookingInfo,
}: {
  setBookingInfo: React.Dispatch<React.SetStateAction<bookingSchema>>;
  bookingInfo: bookingSchema;
}) => {
  const handleChange = (e: any) => {
    let name = e.target.name;
    let value = e.target.value;
    setBookingInfo({ ...bookingInfo, [name]: value });
  };

  const [loading, setLoading] = useState(false);

  const calculateShootAmount = async () => {
    let data = [];
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      setLoading(true);
      data = await calculateAmount(accessToken, {
        number_of_shoot: bookingInfo["number_of_shoot"],
      });
      setLoading(false);
      if (data) {
        console.log(data);
        setBookingInfo({ ...bookingInfo, amount: data.price });
      }
    } else {
      data = await calculateAmount("string", {
        number_of_shoot: bookingInfo["number_of_shoot"],
      });
    }
  };

  // useEffect(() => {
  //   if (bookingInfo["number_of_shoot"] > 0) {
  //     calculateShootAmount();
  //   }
  // }, [bookingInfo["number_of_shoot"]]);

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-3xl text-primary">Create Bookings</h1>
      </div>

      <form className="flex flex-col gap-5 mt-8">
        <div className="flex flex-col gap-1">
          <label htmlFor="full_name">Shoot Type</label>
          <select
            name="shoot_type"
            id="shoot_type"
            value={bookingInfo["shoot_type"]}
            onChange={handleChange}
            className="w-full bg-white rounded-md min-h-12 mt-1.5 p-2 text-black"
          >
            <option value="outdoor">OUTDOOR</option>
            <option value="indoor">INDOOR</option>
          </select>
        </div>
        <div>
          <label htmlFor="Phone_number">Number of Shoot</label>
          <input
            type="number"
            id="no_of_shoot"
            name="number_of_shoot"
            placeholder="e.g 20"
            onChange={handleChange}
            className="w-full bg-white rounded-md min-h-12 mt-1.5 p-2 text-black"
          />
        </div>

        <div>
          <div className="w-full flex items-center gap-[10px]">
            <label htmlFor="Phone_number">Amount</label>
            <button
              type="button"
              onClick={() => {
                if (bookingInfo["number_of_shoot"] > 0) {
                  calculateShootAmount();
                }
              }}
              className="bg-primary text-white px-2 py-1 rounded-md"
            >
              {loading ? (
                <>
                  <div className="w-full flex items-center gap-[5px]">
                    <Loader /> <p>Calculate</p>
                  </div>
                </>
              ) : (
                <>
                  <p>Calculate</p>
                </>
              )}
            </button>
          </div>
          <input
            type="number"
            id="amount"
            name="amount"
            value={bookingInfo["amount"]}
            disabled
            placeholder="Enter number of shoot to get amount"
            className="w-full bg-white rounded-md min-h-12 mt-1.5 p-2 text-black"
          />
        </div>

        <div>
          <label htmlFor="password">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={bookingInfo["location"]}
            onChange={handleChange}
            placeholder="e.g lagos"
            className="w-full bg-white rounded-md min-h-12 mt-1.5 p-2 text-black"
          />
        </div>

        {/* <div className="w-full flex flex-col gap-2.5">
          <button className="w-full min-h-12 bg-primary rounded-md mt-3">
            Make payment
          </button>
        </div> */}
      </form>
    </div>
  );
};

export default BookingProcessOne;
