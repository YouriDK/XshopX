// Ordre
// Cart
// Actions
// Name
//Product
// Paiement
// User
// Shipping
export const CSS = `margin : auto`;
export const texte = {
  Ordre: {
    ord_sum: {
      fr: 'Récapitulatif de la commande',
      en: 'Order Summary',
    },
    orders: {
      fr: 'Commandes',
      en: 'Orders',
    },
    ordre_num: {
      fr: 'Commande n° ',
      en: 'Order n° ',
    },
    deliver: {
      fr: 'Livrer la commande',
      en: 'Deliver Order',
    },

    order_tab: {
      fr: ['Article', 'Expédition', 'Taxes', 'Commande total'],
      en: ['Items', 'Shipping', 'Tax', 'Order Total'],
    },
    order_list: {
      fr: ['ID', 'CLIENT', 'DATE', 'TOTAL', 'PAIEMENT', 'LIVRAISON', 'ACTIONS'],
      en: ['ID', 'USER', 'DATE', 'TOTAL', 'PAID', 'DELIVERED', 'ACTIONS'],
    },
    notdeli: {
      fr: 'Non livré',
      en: 'Not delivered',
    },
    deli: {
      fr: 'Livré lt',
      en: 'Delivered at',
    },
  },
  Terms: {
    add_account: {
      fr: 'Vous avez déjà un compte ?',
      en: "You don't have you account ?",
    },
    delete: {
      fr: 'Supprimer',
      en: 'Delete',
    },
    name: { fr: 'Nom', en: 'Name' },
    back: { fr: 'Retour', en: 'Back to result' },
    edit: { fr: 'Modifier', en: 'Edit' },
    site: 'Shop-X',
    user: { fr: 'Profil utilisateur', en: 'User Profil' },
    updated: { fr: 'Poofil mis à jour', en: 'Profile updated successfully' },
    pwd: { fr: 'Mot de passe', en: 'password' },
    confirm: { fr: 'Confirmer le mot de passe', en: 'confirm password' },
    update: { fr: 'Actualiser', en: 'Updated' },
    create: { fr: 'Créer un compte', en: 'Create an account' },
    already: { fr: 'Déjà inscrit', en: 'Already signed' },
    sign: { fr: ' Inscription', en: 'Sign In' },
    stats: { fr: 'Statut', en: 'Status' },
    qty: { fr: 'Quantité', en: 'Quantity' },
    reviews: { fr: 'avis', en: 'reviews' },
    category: { fr: 'Catégorie', en: 'Category' },
    brand: { fr: 'Marque', en: 'Brand' },

    details: {
      fr: 'détails',
      en: 'details',
    },

    connection: {
      fr: 'Déconnexion',
      en: ' Sign Out',
    },
    continue: 'continue',
    description: 'description',
    rating: { fr: 'Avis', en: ' Rating' },
  },
  Paiement: {
    methods: ['Paypal', 'Stripe'],
    unpay: {
      fr: 'Non payé',
      en: 'Not paid',
    },
    payment_meth: {
      fr: 'Méthodes de paiment',
      en: 'Paiment method',
    },
  },
  Cart: {
    cart: {
      fr: 'Panier',
      en: 'Shopping Cart',
    },
  },
  Stock: {
    count: {
      fr: 'Nombre en stock',
      en: 'Count in stock',
    },
    in_stock: { fr: 'En stock', en: 'In stock' },
    no_sotck: { fr: 'Indisponible', en: 'In Stock' },
  },

  Products: {
    fr: ['ID', 'NOM', 'PRIX', 'CATEGORY', 'MARQUE', 'ACTION'],
    en: ['ID', 'NAME', 'PRICE', 'CATEGORY', 'BRAND', 'ACTION'],
  },

  Panier: {
    add: { fr: 'Ajouter au panier', en: 'Add to Cart' },
    vide: { fr: 'Le panier est vide !', en: 'Cart is empty !' },
    shop: {
      fr: 'Session shopping ! ',
      en: 'Shopping time ! ',
    },
    checkout: {
      fr: ' Validation du panier',
      en: ' Proceed to Checkout',
    },
  },

  Shipping: {
    ship: { fr: 'Expédition', en: 'Shipping' },
    shipping: { fr: "Addresse d'expédition", en: 'Shipping address' },
    city: { fr: 'Ville', en: 'City' },
    postal: { fr: 'Code postal', en: 'Postal code' },
    country: { fr: 'Pays', en: 'Country' },
    address: {
      fr: 'Addresse',
      en: 'Address',
    },
  },
};

export interface ProductProps {
  _id: string;
  name: string;
  image: string;
  brand: string;
  category: string;
  price: number;
  countInStock: number;
  description: string;
  rating: number;
  numReviews: number;
  product?: any;
}

export interface ItemsProps {
  name: string;
  qty: number;
  image: string;
  price: number;
  product: any;
}
export interface OrderProps {
  orderItems: ItemsProps[];
  shippingAddress: {
    fullName: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
  paymentMethod: string;
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  user: any;
  isPaid: boolean;
  paidAt: Date;
  isDelvered: boolean;
  DeliveredAt: Date;
}
export interface UserProps {
  name: string;
  email: string;
  password: string;
  admin: boolean;
}
