export const rememberUser = async (email:string) => {
    const users = localStorage.setItem('email', email)
    return users || null
  }
  