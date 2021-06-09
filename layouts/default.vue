<template>
  <main class="container has-text-weight-bold">
      <b-notification
            type="is-danger"
            has-icon
            aria-close-label="Close notification"
            role="alert">
            <p class="is-size-4 is-size-5-mobile">
                <span>&#8226;</span> This site is under slow but heavy construction.
            </p>
            <p class="is-size-4 is-size-5-mobile">
                <span>&#8226;</span> This is an unofficial site.
            </p>
            <p class="is-size-4 is-size-5-mobile">
                <span>&#8226;</span> This is unoptimized.
            </p>
      </b-notification>
      <a href="/">
        <p class="title is-size-1-mobile has-text-centered">Palia Post</p>
      </a>
      <div class="has-text-centered">
      <b-navbar centered class="mb-3">
          <template #start>
              <b-navbar-item tag="nuxt-link" to="/about" class=is-size-1>
                  About
              </b-navbar-item>
              <b-navbar-item tag="nuxt-link" to="/contribute" class=is-size-1>
                  Contribute
              </b-navbar-item>
              <b-navbar-item tag="nuxt-link" to="/contact" class=is-size-1>
                  Contact
              </b-navbar-item>
          </template>
      </b-navbar>
      </div>
      <nuxt />
  </main>
</template>
