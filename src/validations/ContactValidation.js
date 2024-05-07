import * as Yup from "yup";

export const ContactValidation = Yup.object().shape({
  email: Yup.string()
    .email("Lütfen geçerli bir e-posta adresi girin.") // E-posta formatı için
    .required("E-posta adresi boş bırakılamaz."), // Boşluk kontrolü için
  fullName: Yup.string()
    .min(6, "Tam ad en az 6 karakter olmalı.") // Tam ad için minimum uzunluk
    .required("Tam ad boş bırakılamaz."), // Boşluk kontrolü için
  message: Yup.string()
    .max(100, "En fazla 100 karakter olmalı.") // Tam ad için minimum uzunluk
    .required("Lütfen bir mesaj giriniz."), // Boşluk kontrolü için
});
