interface IUser {
  username: string
  password: string // Hashed using bcrypt algorithm
  fullName: {
    firstName: string
    lastName: string
  }
  age: number
  email: string
  isActive: boolean
  hobbies: string[]
  address: {
    street: string
    city: string
    country: string
  }
  orders: {
    productName: string
    price: number
    quantity: number
  }[]
}

export { IUser }
