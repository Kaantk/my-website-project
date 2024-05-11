import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ContactValidation } from "~/validations/ContactValidation";
import { IoIosSend } from "react-icons/io";
import classNames from "classnames";

const Contact = () => {
  return (
    <div
      id="contact"
      className="p-6 flex flex-col gap-5 scroll-mt-14 md:scroll-mt-16"
    >
      <h2 className="font-semibold text-2xl text-center">İletişim</h2>
      <div className="flex flex-col gap-5 md:flex-row mx-auto ">
        <Formik
          validationSchema={ContactValidation}
          initialValues={{
            fullName: "",
            email: "",
            message: "",
          }}
          onSubmit={(values, { resetForm }) => {
            alert(JSON.stringify(values));
            resetForm();
          }}
        >
          {({ isValid, dirty, isSubmitting }) => (
            <Form className="flex flex-col gap-4 text-black-light bg-blue-lighest rounded-lg p-5 md:min-w-80 lg:p-7 lg:min-w-[500px] shadow-lg">
              <div className="flex flex-col gap-1 font-semibold">
                <label htmlFor="fullName" className="text-sm lg:text-base">
                  Ad Soyad
                </label>
                <Field
                  name="fullName"
                  type="text"
                  placeholder="İsim/soyisim giriniz"
                  className="border rounded-sm p-2 text-sm focus:outline-none focus:ring lg:text-base"
                />
                <ErrorMessage
                  name="fullName"
                  component="small"
                  className="text-red-600 text-xs "
                />
              </div>
              <div className="flex flex-col gap-1 font-semibold">
                <label htmlFor="email" className="text-sm lg:text-base">
                  E-mail
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Mail adresinizi giriniz"
                  className="border rounded-sm p-2 text-sm focus:outline-none focus:ring lg:text-base"
                />
                <ErrorMessage
                  name="email"
                  component="small"
                  className="text-red-600 text-xs "
                />
              </div>
              <div className="flex flex-col gap-1 font-semibold">
                <label htmlFor="email" className="text-sm lg:text-base">
                  Mesajınız
                </label>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Mesajınızı buraya yazın"
                  rows={4}
                  className="border rounded-sm p-2 text-sm focus:outline-none focus:ring lg:text-base"
                />
                <ErrorMessage
                  name="message"
                  component="small"
                  className="text-red-600 text-xs "
                />
              </div>
              <button
                type="submit"
                disabled={!isValid || !dirty || isSubmitting}
                className={classNames(
                  "border mx-auto p-2 px-12 rounded-full text-sm font-semibold text-white flex items-center justify-center gap-2 shadow-lg bg-blue-dark transition-all ease-in-out duration-300 transform",
                  {
                    "hover:cursor-pointer hover:bg-opacity-80 hover:-translate-y-1":
                      isValid && dirty && !isSubmitting,
                    "opacity-50 cursor-not-allowed":
                      !isValid || !dirty || isSubmitting,
                  }
                )}
              >
                Gönder
                <IoIosSend className="text-2xl" />
              </button>
            </Form>
          )}
        </Formik>
        <div className="px-2 text-black-light flex flex-col gap-2 md:w-80 lg:w-96">
          <h3 className="font-semibold lg:text-xl">
            Size nasıl yardımcı olabilirim ?
          </h3>
          <p className="text-justify text-sm text-black-lightest lg:text-base">
            Çalışmamı beğendiyseniz ve hizmetlerimden yararlanmak istiyorsanız
            iletişim formunu kullanarak bana bir mesaj bırakın. E-postamı, veya
            iletişim numaramı kullanarak iletişime geçin.
          </p>
          <p className="text-sm lg:text-base">Görüşmek dileği ile!</p>
          <div>
            <div className="text-sm lg:text-base">
              <div>
                <span>
                  Yaş: <b>22</b>
                </span>
              </div>
              <div>
                <span>
                  Mail: <b>kaantetk@gmail.com</b>
                </span>
              </div>
              <div>
                <span>
                  Adres: <b>Esenler / İstanbul</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
