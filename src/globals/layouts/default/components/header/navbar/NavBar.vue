<template>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="ion-android-menu" />
  </button>
  <div id="navbarSupportedContent" class="collapse navbar-collapse justify-content-end">
    <nav-bar-logo />
    <ul class="navbar-nav">
      <nav-link name="Inicio" />
      <nav-link name="Sobre mi" />
      <nav-link name="Servicios" />
      <nav-link name="Portafolio" />
      <nav-link name="Experiencia" />
      <nav-link name="Contacto" />

      <nav-dropdown-link name="Idioma">
        <nav-link name="Español" />
        <nav-link name="English" />
      </nav-dropdown-link>
    </ul>
    <div class="bottom_content">
      <contact-info />
      <social-icons />
    </div>
  </div>
</template>
