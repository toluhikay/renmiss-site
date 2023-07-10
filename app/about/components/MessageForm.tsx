import React from "react";
import { BsFillPersonFill, BsFillTelephoneForwardFill } from "react-icons/bs";
import { FaAt } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({});

const MessageForm = () => {
  const formik = useFormik({
    initialValues: {},
    validationSchema,
    onSubmit(values) {},
  });
  const FormData = [
    { id: 1, props: "name", label: "Name", icon: <BsFillPersonFill />, type: "text" },
    { id: 2, props: "email", label: "Email", icon: <FaAt />, type: "email" },
    { id: 3, props: "phone_number", label: "Phone Number", icon: <BsFillTelephoneForwardFill />, type: "tel" },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <form action="" onSubmit={formik.handleSubmit} className="w-full bg-white rounded-[30px]  lg:w-[80%] shadow-black/30 lg:py-[81px] md:py-[60px] py-[40px] lg:px-[74px] md:px-[40px] px-[30px] shadow-lg mt-[50px] mb-12">
        <div className="flex justify-between items-start flex-wrap w-full">
          <div className="md:w-[48%] w-full">
            {FormData.map((item, index) => {
              return (
                <div key={index}>
                  <label htmlFor={item.props} className="text-sm font-semibold">
                    {item.label}
                  </label>{" "}
                  <br />
                  <div className="w-full flex bg-[#E9EDF8] p-2 items-center justify-between mt-[10px] rounded-[2px] mb-[30px]">
                    <p className="text-[#93A0AB]">{item.icon}</p>
                    <input type={item.type} {...formik.getFieldProps(item.props)} className="w-full cursor-pointer bg-inherit text-[#93A0AB] ml-1 outline-none border-none py-3 text-sm" placeholder="Enter" />
                    {/* {formik.touched.(item.props) && formik.errors. ? <div>{formik.errors.{item.props}</div> : null} */}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="md:w-[48%] w-full h-full">
            <label htmlFor="message" className="text-sm font-semibold">
              Message
            </label>{" "}
            <br />
            <textarea className="bg-[#E9EDF8] outline-none mt-[14px] p-2 rounded-[2px] w-full h-full border-none" name="message" id="" cols={30} rows={12}></textarea>
          </div>
        </div>
        <div className="w-full py-12 flex justify-center">
          <button className="md:w-[60%] w-full bg-green-800 py-4 rounded-[10px] text-white font-bold" type="submit">
            Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageForm;
