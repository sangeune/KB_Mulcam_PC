<script setup></script>

<template>
  <header class="TheHeader">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-md">
        <RouterLink class="navbar-brand" to="/">로고</RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <RouterLink
                class="nav-link dropdown-toggle active"
                href="/intro"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                소개
              </RouterLink>
              <ul class="dropdown-menu">
                <li>
                  <RouterLink class="dropdown-item" to="/intro/about">하트하트재단</RouterLink>
                </li>
                <li>
                  <RouterLink class="dropdown-item" to="/intro/transManagement"
                    >투명경영
                  </RouterLink>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/business">사업</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/sponsor">후원</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/news">소식</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.navbar-collapse {
  flex-grow: 0;
}
</style>
