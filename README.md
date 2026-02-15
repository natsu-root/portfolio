# Professional Portfolio - Angular

A modern, responsive, and animated portfolio website built with Angular 19, TypeScript, and SCSS.

## Features

- **Modern Design**: Dark theme with gradient accents and glass morphism effects
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations**: Scroll animations, hover effects, and transitions
- **Interactive Components**: Dynamic typing effect, skill bars, timeline
- **Sections Included**:
  - Hero Section with animated typing text
  - About Me with education timeline
  - Projects showcase with filtering
  - Internship experience timeline
  - Skills with progress bars
  - Publications section
  - Workshops & Training
  - Contact form with social links

## Demo Live Page
https://natsu-root.github.io/portfolio/

## Tech Stack

- **Framework**: Angular 19
- **Language**: TypeScript 5.6
- **Styling**: SCSS with CSS Variables
- **Animations**: CSS Animations & Keyframes
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Poppins, JetBrains Mono)

## Prerequisites

- Node.js 18+ 
- npm 9+
- Angular CLI 19+

## Installation & Setup

### 1. Install Angular CLI Globally

```bash
npm install -g @angular/cli@19
```

### 2. Navigate to Project Directory

```bash
cd angular-portfolio
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
ng serve
```

Or use:

```bash
npm start
```

### 5. Open in Browser

Navigate to `http://localhost:4200`

## Build for Production

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
angular-portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/
│   │   │   ├── hero/
│   │   │   ├── about/
│   │   │   ├── projects/
│   │   │   ├── internships/
│   │   │   ├── skills/
│   │   │   ├── publications/
│   │   │   ├── workshops/
│   │   │   └── contact/
│   │   └── app.component.ts
│   ├── assets/
│   ├── styles.scss
│   ├── index.html
│   └── main.ts
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Customization

### Personal Information

Edit the following files to customize with your information:

1. **Hero Section**: `src/app/components/hero/hero.component.ts`
   - Update name, roles, description, stats

2. **About Section**: `src/app/components/about/about.component.ts`
   - Update education details, achievements

3. **Projects Section**: `src/app/components/projects/projects.component.ts`
   - Add your projects with descriptions and technologies

4. **Internships Section**: `src/app/components/internships/internships.component.ts`
   - Update internship experiences

5. **Skills Section**: `src/app/components/skills/skills.component.ts`
   - Modify skills and proficiency levels

6. **Publications Section**: `src/app/components/publications/publications.component.ts`
   - Add research papers and publications

7. **Workshops Section**: `src/app/components/workshops/workshops.component.ts`
   - Update workshops and certifications

8. **Contact Section**: `src/app/components/contact/contact.component.ts`
   - Update contact information and social links

### Styling

- Global styles: `src/styles.scss`
- Component styles are inline in each component file
- CSS variables for easy theming in `:root`

### Colors

The portfolio uses CSS variables for consistent theming:

```scss
--primary-color: #6366f1;
--secondary-color: #06b6d4;
--accent-color: #f472b6;
--bg-primary: #0f172a;
--bg-secondary: #1e293b;
--text-primary: #f8fafc;
--text-secondary: #cbd5e1;
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `ng serve` | Start development server |
| `ng build` | Build for production |
| `ng test` | Run unit tests |
| `ng lint` | Run linter |

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

- Fonts: [Google Fonts](https://fonts.google.com)
- Icons: [Font Awesome](https://fontawesome.com)
- Design Inspiration: Modern portfolio designs

---

**Happy Coding!** 🚀
