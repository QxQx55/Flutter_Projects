class GiftItem {
  final String id;
  final String title;
  final String category;
  final double price;
  final String imageUrl;

  GiftItem({
    required this.id,
    required this.title,
    required this.category,
    required this.price,
    required this.imageUrl,
  });
}

class DeliveryMethod {
  final String id;
  final String title;
  final String description;
  final double price;

  DeliveryMethod({
    required this.id,
    required this.title,
    required this.description,
    required this.price,
  });
}

// Mock Data
final List<GiftItem> mockGifts = [
  GiftItem(id: '1', title: 'Golden Anniversary Box', category: 'Weddings', price: 3500, imageUrl: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=800'),
  GiftItem(id: '2', title: 'Newborn Essentials Basket', category: 'Baby Showers', price: 2800, imageUrl: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?q=80&w=800'),
  GiftItem(id: '3', title: 'Eternal Red Roses Array', category: 'Valentine\'s Day', price: 1500, imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800'),
  GiftItem(id: '4', title: 'Habesha Cultural Coffee Set', category: 'Any Day', price: 4500, imageUrl: 'https://images.unsplash.com/photo-1559525839-b184a4d698c7?q=80&w=800'),
  GiftItem(id: '5', title: 'Sweet Sixteen Surprise', category: 'Birthdays', price: 2200, imageUrl: 'https://images.unsplash.com/photo-1627485937980-221c88ce049c?q=80&w=800'),
  GiftItem(id: '6', title: 'The Royal Emerald Hamper', category: 'Birthdays', price: 5500, imageUrl: 'https://images.unsplash.com/photo-1577998638062-a5fbab2a129d?q=80&w=800'),
];

final List<DeliveryMethod> mockMethods = [
  DeliveryMethod(id: 'd1', title: 'Addis Ababa Standard', description: '2-3 Days (Free)', price: 0),
  DeliveryMethod(id: 'd2', title: 'Addis Ababa Express', description: 'Same Day', price: 150),
  DeliveryMethod(id: 'd3', title: 'Regional Delivery', description: '3-5 Days', price: 300),
  DeliveryMethod(id: 'd4', title: 'International Shipping', description: 'Global Delivery', price: 2000),
];

class CartItem {
  final GiftItem gift;
  int quantity;

  CartItem({required this.gift, this.quantity = 1});
}
