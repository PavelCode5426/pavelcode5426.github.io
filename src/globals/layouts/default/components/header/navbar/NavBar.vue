<template>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="ion-android-menu" />
  </button>
  <div id="navbarSupportedContent" class="collapse navbar-collapse justify-content-end">
    <nav-bar-logo />
    <ul class="navbar-nav">
      <nav-link name="Inicio" href="#home" />
      <nav-link name="Sobre mi" href="#about" />
      <nav-link name="Habilidades" href="#skill" />
      <nav-link name="Portafolio" href="#portofolio" />
      <nav-link name="Resumen" href="#resume" />

      <!--      <nav-dropdown-link name="Idiomas"> -->
      <!--        <nav-link name="Español" /> -->
      <!--        <nav-link name="English" /> -->
      <!--      </nav-dropdown-link> -->
    </ul>
    <div class="bottom_content">
      <contact-info />
      <social-medias />
    </div>
  </div>
</template>
