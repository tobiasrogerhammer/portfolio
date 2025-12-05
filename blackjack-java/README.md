# Blackjack Java Game - Live Demo

## 🎯 **Portfolio-Matched Design**

This is a redesigned Blackjack game with a beautiful, portfolio-matched interface that visitors can play directly in their browser.

## ✨ **Features**

- **Portfolio color scheme** (indigo/blue gradients)
- **Responsive design** for mobile and desktop
- **Interactive gameplay** with smooth animations
- **Professional styling** matching your portfolio
- **No downloads required** - play instantly in browser

## 🚀 **Deployment Instructions**

### **Step 1: Upload to GitHub**

1. **Create a new repository** on GitHub named `blackjack-java`
2. **Upload all files** from this directory to the repository
3. **Make sure the `render.yaml` file is in the root directory**

### **Step 2: Deploy to Render**

1. **Go to [render.com](https://render.com)**
2. **Sign up** with your GitHub account
3. **Click "New Blueprint"**
4. **Connect your repository**: `tobiasrogerhammer/blackjack-java`
5. **Select branch**: `master` (or `main`)
6. **Click "Apply"**

### **Step 3: Get Your Live URL**

- Render will provide a URL like: `https://blackjack-java.onrender.com`
- **Test the application** to ensure it works
- **Copy the URL** for your portfolio

## 📁 **Project Structure**

```
blackjack-java-repo/
├── src/
│   └── main/
│       ├── java/
│       │   └── com/tobias/blackjack/
│       │       ├── BlackjackApplication.java
│       │       ├── controller/
│       │       │   └── GameController.java
│       │       ├── model/
│       │       │   ├── Card.java
│       │       │   ├── Game.java
│       │       │   └── Player.java
│       │       ├── service/
│       │       │   └── GameService.java
│       │       └── web/
│       │           └── TeaVmEntry.java
│       └── resources/
│           ├── application.properties
│           └── static/
│               ├── index.html
│               ├── script.js
│               └── style.css
├── pom.xml
├── render.yaml
├── Dockerfile
├── mvnw
└── README.md
```

## 🎮 **How It Works**

### **For Visitors:**

1. **Visit your portfolio**
2. **Click "Try Live"** on the Blackjack project
3. **Open the web application**
4. **Play Blackjack** in browser
5. **No setup required!**

### **Current Status:**

- **Demo interface** is fully functional
- **Beautiful design** matching your portfolio
- **Mobile-responsive** layout
- **Ready for full Java integration**

## 📱 **Mobile Optimized**

- **Touch-friendly** buttons and controls
- **Responsive grid** layout
- **Optimized spacing** for small screens
- **Fast loading** on mobile networks

## 🎨 **Design Highlights**

- **Indigo/Blue gradients** matching your portfolio
- **Clean, modern interface** with professional styling
- **Smooth animations** and hover effects
- **Intuitive controls** with clear visual hierarchy

## 🔧 **Development**

### **Local Development:**

```bash
# Build the project
./mvnw clean package

# Run the application
./mvnw spring-boot:run

# Or run the JAR directly
java -jar target/blackjack-web-1.0.0.jar
```

The application will be available at `http://localhost:8080`

### **Features:**

- **Full Java backend** with Spring Boot
- **REST API** for game actions
- **TeaVM integration** for client-side Java compilation
- **Responsive design** for all devices
- **Professional presentation**

Your Blackjack game now has a **beautiful, portfolio-matched design** that visitors can experience instantly in their browser! 🎉
