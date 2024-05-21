import * as Yup from "yup";

export const ContactValidation = Yup.object().shape({
  email: Yup.string()
    .email("Lütfen geçerli bir e-posta adresi girin.")
    .required("E-posta adresi boş bırakılamaz."),
  fullName: Yup.string()
    .required("Lütfen bir isim giriniz.")
    .required("Tam ad boş bırakılamaz."),
  message: Yup.string()
    .max(200, "En fazla 200 karakter olmalı.")
    .required("Lütfen bir mesaj giriniz."),
});
