# EDEN 4.0 - Innovation Hackathon

Welcome to EDEN 4.0, a cutting-edge hackathon website built with modern web technologies.

## Project Architecture

The following diagram illustrates the complete architecture and data flow of the EDEN 4.0 project:

```mermaid
flowchart TD
    subgraph "Developer Machine"
        DM1["package.json"]:::tooling
        DM2["package-lock.json"]:::tooling
        DM3["eslint.config.js"]:::tooling
    end

    subgraph "Build System"
        VS["vite.config.js"]:::tooling
        PC["postcss.config.js"]:::tooling
        TW["tailwind.config.js"]:::tooling
    end

    subgraph "Container/CI"
        DF["Dockerfile"]:::tooling
    end

    subgraph "Static File Host / CDN"
        HTML["public/index.html"]:::hosting
        DATA["public/data.json"]:::assets
        GLTF["public/scene.gltf"]:::assets
        BIN["public/scene.bin"]:::assets
        PDF["public/Eden.pdf"]:::assets
        TEX["public/textures/"]:::assets
        SPON["public/sponsers/"]:::assets
    end

    subgraph "Browser Runtime"
        Browser["Client Browser"]:::runtime
        subgraph "Entry Point"
            MAIN["src/main.jsx"]:::runtime
            ICSS["src/index.css"]:::runtime
        end
        subgraph "React App"
            APP["src/App.jsx"]:::components
            APPCSS["src/App.css"]:::components
            subgraph "Components"
                Navbar["Navbar.jsx"]:::components
                Home["Home.jsx"]:::components
                About["About.jsx"]:::components
                Schedule["Schedule.jsx"]:::components
                Venue["Venue.jsx"]:::components
                Sponsors["Sponsors.jsx"]:::components
                Footer["Footer.jsx"]:::components
                DateVenue["datev.jsx"]:::components
                EventStats["EventStats.jsx"]:::components
                FAQ["Faq.jsx"]:::components
                FAQSec["FaqSection.jsx"]:::components
                Team["Team.jsx"]:::components
                Prize["Prize.jsx"]:::components
                Judge["Judge.jsx"]:::components
                Redbull["Redbull.jsx"]:::components
                Loading["loading.jsx"]:::components
                BG["bg.jsx"]:::components
                PixelBG["PixelArtbg.jsx"]:::components
            end
            subgraph "Asset Loader & Utils"
                IMGOPT["imageOptimization.js"]:::assets
                LOTTIE["loading.json"]:::assets
                VSH["vertexShader.glsl"]:::assets
                FSH["fragmentShader.glsl"]:::assets
            end
        end
    end

    %% Connections
    DM1 --> VS
    DM2 --> VS
    DM3 --> VS
    VS --> DF
    PC --> DF
    TW --> DF
    DF --> HTML
    DF --> DATA
    DF --> GLTF
    DF --> BIN
    DF --> PDF
    DF --> TEX
    DF --> SPON
    HTML --> Browser
    DATA --> Browser
    GLTF --> Browser
    BIN --> Browser
    PDF --> Browser
    TEX --> Browser
    SPON --> Browser
    Browser --> MAIN
    Browser --> ICSS
    MAIN --> APP
    ICSS --> APP
    APP --> Navbar
    APP --> Home
    APP --> About
    APP --> Schedule
    APP --> Venue
    APP --> Sponsors
    APP --> Footer
    APP --> DateVenue
    APP --> EventStats
    APP --> FAQ
    APP --> FAQSec
    APP --> Team
    APP --> Prize
    APP --> Judge
    APP --> Redbull
    APP --> Loading
    APP --> BG
    APP --> PixelBG
    APP --> IMGOPT
    APP --> LOTTIE
    APP --> VSH
    APP --> FSH

    %% Click Events
    click DM1 "https://github.com/shibinsha02/eden/blob/main/package.json"
    click DM2 "https://github.com/shibinsha02/eden/blob/main/package-lock.json"
    click DM3 "https://github.com/shibinsha02/eden/blob/main/eslint.config.js"
    click VS "https://github.com/shibinsha02/eden/blob/main/vite.config.js"
    click PC "https://github.com/shibinsha02/eden/blob/main/postcss.config.js"
    click TW "https://github.com/shibinsha02/eden/blob/main/tailwind.config.js"
    click DF "https://github.com/shibinsha02/eden/tree/main/Dockerfile"
    click HTML "https://github.com/shibinsha02/eden/blob/main/public/index.html"
    click DATA "https://github.com/shibinsha02/eden/blob/main/public/data.json"
    click GLTF "https://github.com/shibinsha02/eden/blob/main/public/scene.gltf"
    click BIN "https://github.com/shibinsha02/eden/blob/main/public/scene.bin"
    click PDF "https://github.com/shibinsha02/eden/blob/main/public/Eden.pdf"
    click TEX "https://github.com/shibinsha02/eden/tree/main/public/textures/"
    click SPON "https://github.com/shibinsha02/eden/tree/main/public/sponsers/"
    click MAIN "https://github.com/shibinsha02/eden/blob/main/src/main.jsx"
    click ICSS "https://github.com/shibinsha02/eden/blob/main/src/index.css"
    click APP "https://github.com/shibinsha02/eden/blob/main/src/App.jsx"
    click APPCSS "https://github.com/shibinsha02/eden/blob/main/src/App.css"
    click Navbar "https://github.com/shibinsha02/eden/blob/main/src/Components/Navbar/Navbar.jsx"
    click Home "https://github.com/shibinsha02/eden/blob/main/src/Components/Home/Home.jsx"
    click About "https://github.com/shibinsha02/eden/blob/main/src/Components/About/About.jsx"
    click Schedule "https://github.com/shibinsha02/eden/blob/main/src/Components/Schedule/Schedule.jsx"
    click Venue "https://github.com/shibinsha02/eden/blob/main/src/Components/Venue/Venue.jsx"
    click Sponsors "https://github.com/shibinsha02/eden/blob/main/src/Components/Sponsors/Sponsors.jsx"
    click Footer "https://github.com/shibinsha02/eden/blob/main/src/Components/Footer/Footer.jsx"
    click DateVenue "https://github.com/shibinsha02/eden/blob/main/src/Components/Date&Venue/datev.jsx"
    click EventStats "https://github.com/shibinsha02/eden/blob/main/src/Components/EventStats/EventStats.jsx"
    click FAQ "https://github.com/shibinsha02/eden/blob/main/src/Components/FAQ/Faq.jsx"
    click FAQSec "https://github.com/shibinsha02/eden/blob/main/src/Components/FaqSection/FaqSection.jsx"
    click Team "https://github.com/shibinsha02/eden/blob/main/src/Components/Team/Team.jsx"
    click Prize "https://github.com/shibinsha02/eden/blob/main/src/Components/Prize/Prize.jsx"
    click Judge "https://github.com/shibinsha02/eden/blob/main/src/Components/Judge/Judge.jsx"
    click Redbull "https://github.com/shibinsha02/eden/blob/main/src/Components/RedBull/Redbull.jsx"
    click Loading "https://github.com/shibinsha02/eden/blob/main/src/Components/Loading/loading.jsx"
    click BG "https://github.com/shibinsha02/eden/blob/main/src/Components/Background/bg.jsx"
    click PixelBG "https://github.com/shibinsha02/eden/blob/main/src/Components/Background/PixelArtbg.jsx"
    click IMGOPT "https://github.com/shibinsha02/eden/blob/main/src/utils/imageOptimization.js"
    click LOTTIE "https://github.com/shibinsha02/eden/blob/main/src/assets/loading.json"
    click VSH "https://github.com/shibinsha02/eden/blob/main/src/Components/Shades/vertexShader.glsl"
    click FSH "https://github.com/shibinsha02/eden/blob/main/src/Components/Shades/fragmentShader.glsl"

    %% Styles
    classDef tooling fill:#ADD8E6,stroke:#000
    classDef hosting fill:#98FB98,stroke:#000
    classDef runtime fill:#FFA500,stroke:#000
    classDef assets fill:#D3D3D3,stroke:#000
    classDef components fill:#DDA0DD,stroke:#000
```

## Architecture Overview

This diagram shows the complete flow from development to deployment:

### 🔧 **Developer Machine**

- **package.json**: Project dependencies and scripts
- **package-lock.json**: Locked dependency versions
- **eslint.config.js**: Code linting configuration

### 🏗️ **Build System**

- **vite.config.js**: Vite build tool configuration
- **postcss.config.js**: PostCSS processing configuration
- **tailwind.config.js**: Tailwind CSS framework configuration

### 🐳 **Container/CI**

- **Dockerfile**: Container configuration for deployment

### 📦 **Static Assets**

- **data.json**: Dynamic content configuration
- **3D Models**: GLTF and binary files for 3D graphics
- **Textures**: Material textures for 3D models
- **Sponsors**: Sponsor images and assets

### ⚛️ **React Application**

- **Component Architecture**: Modular React components
- **Asset Management**: Optimized loading and processing
- **Shader System**: Custom GLSL shaders for visual effects

## Tech Stack

- **Frontend**: React + Vite
- **Styling**: Tailwind CSS + PostCSS
- **3D Graphics**: Three.js + GLTF models
- **Animations**: Custom CSS animations
- **Build Tool**: Vite
- **Container**: Docker
- **Linting**: ESLint

## Features

- 🚀 Modern React architecture
- 🎨 Beautiful 3D graphics and animations
- 📱 Fully responsive design
- ⚡ Fast loading with optimized assets
- 🔧 Hot module replacement for development
- 🐳 Containerized deployment
- 📊 Dynamic content management via JSON

## Getting Started

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Development Server**

   ```bash
   npm run dev
   ```

3. **Build for Production**

   ```bash
   npm run build
   ```

4. **Docker Deployment**
   ```bash
   docker build -t eden-4.0 .
   docker run -p 80:80 eden-4.0
   ```

## Project Structure

- `/src/Components/`: React components organized by feature
- `/public/`: Static assets and configuration files
- `/src/utils/`: Utility functions and helpers
- `/src/assets/`: Application-specific assets

---

Built with ❤️ for EDEN 4.0 Hackathon
