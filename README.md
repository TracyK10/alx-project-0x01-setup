# React Architect: Mastering Advanced Structures in Next.js

A modern Next.js web application scaffolded using `create-next-app@latest`. This project includes pre-configured support for:

- ✅ ESLint for code linting and quality
- ✅ Tailwind CSS for utility-first styling
- ✅ Import aliases for cleaner import paths

---

## 📁 Project Structure

```

alx-project-0x01/
├── public/             # Static assets like images
├── src/
│   ├── app/            # App directory (if using App Router)
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page-based routing (if using Pages Router)
│   ├── styles/         # Global styles
│   ├── utils/          # Utility/helper functions
│   └── ...
├── .eslintrc.json      # ESLint config
├── tailwind.config.js  # Tailwind CSS config
├── tsconfig.json       # Includes alias paths (if TypeScript was enabled)
├── package.json        # Project metadata and scripts
└── README.md           # Project documentation

````

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/<your-username>/alx-project-0x01-setup.git
cd alx-project-0x01
````

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

---

### Development

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to view the app in your browser.

---

### Build for Production

To build the application:

```bash
npm run build
# or
yarn build
```

Then start the production server:

```bash
npm start
# or
yarn start
```

---

### Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
# or
yarn lint
```

---

## 🛠️ Features & Configurations

### ✅ ESLint

Ensures code quality and consistency. Config can be adjusted in `.eslintrc.json`.

---

### 🎨 Tailwind CSS

Tailwind is preconfigured in `tailwind.config.js`. You can start styling using utility classes right away.

```tsx
<div className="bg-blue-500 text-white p-4 rounded-lg">
  Hello, Tailwind!
</div>
```

---

### 💡 Import Aliases

Aliased paths like `@/components` or `@/utils` are available. Modify `tsconfig.json` or `jsconfig.json` if needed.

```tsx
import Header from "@/components/Header";
```

---

## 📦 Scripts

| Script  | Description                   |
| ------- | ----------------------------- |
| `dev`   | Starts development server     |
| `build` | Builds the app for production |
| `start` | Starts the production server  |
| `lint`  | Runs ESLint on project files  |

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements

* [Next.js Documentation](https://nextjs.org/docs)
* [Tailwind CSS Documentation](https://tailwindcss.com/docs)
* [ESLint](https://eslint.org/)

```
