export interface Product {
  id: string;
  name: string;
  flavor: string;
  price: number;
  description: string;
  image: string;
  ingredients: string[];
  nutritionInfo: {
    calories: number;
    sodium: string;
    potassium: string;
    magnesium: string;
    calcium: string;
  };
  category: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  flavor: string;
}

export interface ShippingInfo {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
}
