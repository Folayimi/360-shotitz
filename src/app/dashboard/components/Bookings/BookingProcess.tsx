"use client";

import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import { createBookings } from "@/services/request";
import { profileSchema } from "../Interface";

// Icons
import { FaTimes } from "react-icons/fa";

// booking process - steps
import BookingProcessOne from "./StepOne";
import BookingProcessTwo from "./StepTwo";
import BookingProcessThree from "./StepThree";
import FinalStep from "./FinalStep";
import { bookingSchema, bankDetailsSchema } from "../Interface";
import Loader from "@/Loader/Loader";

const BookingProcess = ({
  setisStartBookingProcess,
}: {
  setisStartBookingProcess: Dispatch<SetStateAction<Boolean>>;
}) => {
  const [bookingInfo, setBookingInfo] = useState<bookingSchema>({
    phone: "",
    plan: "JASPER",
    shoot_type: "OUTDOOR",
    location: "",
    number_of_shoot: 0,
    amount: "",
    shooting_date: new Date().getTime.toString(),
    shooting_time: "",
  });
  const [bookingSteps, setBookingSteps] = useState(1);
  const [valid, setValid] = useState(false);
  const [changing, setChanging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [bankDetails, setBankDetails] = useState<bankDetailsSchema>({
    account_name: "",
    account_number: "",
    bank_name: "",
  });

  //  Profile details
  const [profile, setProfile] = useState<profileSchema>({
    first_name: "fetching...",
    last_name: "",
    email: "",
    avatar: "",
  });

  useEffect(() => {
    if (
      bookingInfo["phone"] &&
      bookingInfo["plan"] &&
      bookingInfo["shoot_type"] &&
      bookingInfo["location"] &&
      bookingInfo["number_of_shoot"] &&
      bookingInfo["shooting_date"] &&
      bookingInfo["shooting_time"]
    ) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [bookingInfo, changing]);

  useEffect(() => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      console.log("unAuthorized");
      window.location.pathname = "/auth/login";
    }
  }, []);

  const HandleBookingProcessSubmission = async () => {
    setChanging(!changing);
    let data = [];
    if (bookingSteps === 3) {
      if (valid) {
        setLoading(true);
        // TODO: CALL API TO MAKE BOOKINGS RATHER THAN CONSOLE LOGGING IT
        data = await createBookings(bookingInfo);
        console.log(data);
        console.log(bookingInfo);
        setLoading(false);
        // END BOOKING PROCESS
        return setisStartBookingProcess(false);
      }
    } else if (
      bookingSteps === 1 &&
      bookingInfo["phone"] &&
      bookingInfo["shooting_date"] &&
      bookingInfo["shooting_time"]
    ) {
      setBookingSteps(bookingSteps + 1);
    } else if (
      bookingSteps === 2 &&
      bookingInfo["shoot_type"] &&
      bookingInfo["location"] &&
      bookingInfo["number_of_shoot"] &&
      bookingInfo["amount"]
    ) {
      setBookingSteps(bookingSteps + 1);
    }
  };

  return (
    <div className="w-full min-h-[100vh] h-[100vh] overflow-y-scroll py-24 fixed top-0 left-0 right-0 bg-[black]/70 z-[9999999999] flex flex-col gap-6 justify-center items-center">
      <div className="relative bg-black w-[90%] md:w-[600px] rounded-lg p-3 min-h-[90dvh] px-4 md:px-10 py-6 pb-10 shadow-2xl flex gap-6 flex-col justify-start items-start">
        <div className="w-full flex flex-col gap-2">
          <div className="w-full">
            {bookingSteps === 1 && (
              <BookingProcessOne
                setBookingInfo={setBookingInfo}
                bookingInfo={bookingInfo}
                profile={profile}
                setProfile={setProfile}
              />
            )}

            {bookingSteps === 2 && (
              <BookingProcessThree
                bookingInfo={bookingInfo}
                setBookingInfo={setBookingInfo}
              />
            )}
            {bookingSteps === 3 && (
              <FinalStep bookingInfo={bookingInfo} profile={profile} />
            )}

            <button
              className="w-full min-h-12 bg-primary rounded-md mt-6"
              onClick={HandleBookingProcessSubmission}
            >
              {bookingSteps === 1 && "Next"}
              {bookingSteps === 2 && "Next"}
              {loading
                ? bookingSteps === 3 && <Loader />
                : bookingSteps === 3 && "Make Payment"}
            </button>
          </div>
        </div>

        <div
          className="bg-[white] absolute -top-3 -right-2 rounded p-3 cursor-pointer flex gap-1 items-center justify-center"
          onClick={() => setisStartBookingProcess(false)}
        >
          <FaTimes className="text-2xl text-[#000000] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default BookingProcess;
