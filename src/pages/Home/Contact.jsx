import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ContactValidation } from "~/validations/ContactValidation";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  const handleSubmit = (values) => {
    alert("Form gönderildi: " + JSON.stringify(values, null, 2));
  };

  return (
    <div className="p-6 flex flex-col gap-5">
      <h2 className="font-semibold text-2xl text-center">İletişim</h2>
      <div className="flex flex-col gap-5 md:flex-row md:items-center mx-auto">
        <Formik
          validationSchema={ContactValidation}
          initialValues={{
            email: "",
            fullName: "",
            message: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false);
          }}
        >
          {({ isValid, dirty, isSubmitting }) => (
            <Form className="flex flex-col gap-4 text-black-light bg-blue-lighest rounded-lg p-5 md:min-w-80">
              <div className="flex flex-col gap-1 font-semibold">
                <label htmlFor="fullName" className="text-sm">
                  Ad Soyad
                </label>
                <Field
                  name="fullName"
                  type="text"
                  placeholder="İsim/soyisim giriniz"
                  className="border rounded-sm p-2 text-sm focus:outline-none focus:ring "
                />
                <ErrorMessage
                  name="fullName"
                  component="small"
                  className="text-red-600 text-xs"
                />
              </div>
              <div className="flex flex-col gap-1 font-semibold">
                <label htmlFor="email" className="text-sm">
                  E-mail
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Mail adresinizi giriniz"
                  className="border rounded-sm p-2 text-sm focus:outline-none focus:ring "
                />
                <ErrorMessage
                  name="email"
                  component="small"
                  className="text-red-600 text-xs"
                />
              </div>
              <div className="flex flex-col gap-1 font-semibold">
                <label htmlFor="email" className="text-sm">
                  Mesajınız
                </label>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Mesajınızı buraya yazın"
                  rows={4}
                  className="border rounded-sm p-2 text-sm focus:outline-none focus:ring "
                />
                <ErrorMessage
                  name="message"
                  component="small"
                  className="text-red-600 text-xs"
                />
              </div>
              <button
                type="submit"
                disabled={!isValid || !dirty || isSubmitting}
                className="border mx-auto p-2 px-12 rounded-full text-sm font-semibold text-white flex items-center justify-center gap-2 shadow-lg bg-blue-dark hover:bg-opacity-80 transition-all ease-in-out duration-300 transform hover:-translate-y-1"
              >
                Gönder
                <IoIosSend className="text-2xl" />
              </button>
            </Form>
          )}
        </Formik>
        <div className="px-2 text-black-light flex flex-col gap-2 max-w-80">
          <h3 className="font-semibold">Size nasıl yardımcı olabilirim ?</h3>
          <p className="text-justify text-sm text-black-lightest">
            Çalışmamı beğendiyseniz ve hizmetlerimden yararlanmak istiyorsanız
            iletişim formunu kullanarak bana bir mesaj bırakın. E-postamı, veya
            iletişim numaramı kullanarak iletişime geçin.
          </p>
          <p className="text-sm">Görüşmek dileği ile!</p>
          <div>
            <div className="text-sm">
              <div>
                <span>
                  Yaş: <b>22</b>
                </span>
              </div>
              <div>
                <span>
                  Mail: <b>kaan.tk3@hotmail.com</b>
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
