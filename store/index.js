export const state = () => ({
  authUser: null
})

export const getters = {
  isLoggedIn: (state) => {
    try {
      return state.authUser.id !== null
    } catch {
      return false
    }
  }
}

export const mutations = {
  RESET_AUTH_USER: (state) => {
    state.authUser = null
  },
  ON_AUTH_STATE_CHANGED_MUTATION: (state, { authUser, claims }) => {
    if (authUser) {
      const { uid, email, emailVerified, displayName, photoURL } = authUser
      state.authUser = {
        uid,
        displayName,
        email,
        emailVerified,
        photoURL: photoURL || null,
        isAdmin: claims.custom_claim
      }
    }
  }
}

export const actions = {
  nuxtServerInit({ commit }, { res }) {
    if (res && res.locals && res.locals.user) {
      const { allClaims: claims, ...authUser } = res.locals.user
      if (!authUser) commit('RESET_AUTH_USER')
      else commit('ON_AUTH_STATE_CHANGED_MUTATION', { authUser, claims })
    }
  }
}
