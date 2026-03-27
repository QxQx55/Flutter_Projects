import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:provider/provider.dart';
import 'providers/cart_provider.dart';
import 'screens/home_screen.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => CartProvider()),
      ],
      child: const EthioGiftApp(),
    ),
  );
}

class EthioGiftApp extends StatelessWidget {
  const EthioGiftApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'EthioGift',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        useMaterial3: true,
        primaryColor: const Color(0xFF0D4734),
        scaffoldBackgroundColor: const Color(0xFFFCFCFC),
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFF0D4734),
          primary: const Color(0xFF0D4734),
          secondary: const Color(0xFFD4AF37), // Gold
          surface: Colors.white,
        ),
        textTheme: GoogleFonts.interTextTheme(Theme.of(context).textTheme),
        appBarTheme: const AppBarTheme(
          backgroundColor: Colors.white,
          elevation: 0,
          iconTheme: IconThemeData(color: Color(0xFF0D4734)),
          titleTextStyle: TextStyle(
            color: Color(0xFF0D4734),
            fontSize: 22,
            fontWeight: FontWeight.w800,
          ),
        ),
      ),
      home: const HomeScreen(),
    );
  }
}
