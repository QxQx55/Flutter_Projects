import 'package:flutter/foundation.dart';
import '../models.dart';

class CartProvider with ChangeNotifier {
  final List<CartItem> _items = [];
  DeliveryMethod _selectedDelivery = mockMethods[0];

  List<CartItem> get items => _items;
  DeliveryMethod get selectedDelivery => _selectedDelivery;

  int get itemCount => _items.fold(0, (sum, item) => sum + item.quantity);
  
  double get subtotal => _items.fold(0, (sum, item) => sum + (item.gift.price * item.quantity));
  
  double get total => subtotal > 0 ? subtotal + _selectedDelivery.price : 0;

  void addToCart(GiftItem gift) {
    int index = _items.indexWhere((item) => item.gift.id == gift.id);
    if (index >= 0) {
      _items[index].quantity++;
    } else {
      _items.add(CartItem(gift: gift));
    }
    notifyListeners();
  }

  void removeFromCart(GiftItem gift) {
    _items.removeWhere((item) => item.gift.id == gift.id);
    notifyListeners();
  }

  void updateQuantity(GiftItem gift, int quantity) {
    int index = _items.indexWhere((item) => item.gift.id == gift.id);
    if (index >= 0) {
      if (quantity > 0) {
        _items[index].quantity = quantity;
      } else {
        _items.removeAt(index);
      }
      notifyListeners();
    }
  }

  void selectDeliveryMethod(DeliveryMethod method) {
    _selectedDelivery = method;
    notifyListeners();
  }

  void clear() {
    _items.clear();
    _selectedDelivery = mockMethods[0];
    notifyListeners();
  }
}
