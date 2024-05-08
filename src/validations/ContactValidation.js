import * as Yup from "yup";

export const ContactValidation = Yup.object().shape({
  email: Yup.string()
    .email("Lütfen geçerli bir e-posta adresi girin.")
    .required("E-posta adresi boş bırakılamaz."),
  fullName: Yup.string()
    .min(6, "Tam ad en az 6 karakter olmalı.")
    .required("Tam ad boş bırakılamaz."),
  message: Yup.string()
    .min(10, "En az 10 karakter giriniz.")
    .max(100, "En fazla 100 karakter olmalı.")
    .required("Lütfen bir mesaj giriniz."),
});
