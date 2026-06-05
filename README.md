# Maneva Hair

Maneva Hair is a modern full-stack wig e-commerce and booking platform designed to provide customers with a seamless experience when browsing, selecting, and booking premium wigs. The application combines a fast and responsive frontend with powerful backend services and automated email notifications to streamline the customer journey.

## ✨ Features

- Modern and responsive user interface
- Browse premium wig collections
- Detailed product listings
- Wig booking and reservation functionality
- Automated booking confirmation emails
- Mobile-friendly design
- Real-time database integration
- Secure backend services
- Fast performance powered by Vite

## 🛠 Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS

### Backend & Database
- Supabase
  - PostgreSQL Database
  - Row Level Security (RLS)

### Email Services
- Resend
  - Booking confirmations

## 🚀 Getting Started

### Prerequisites

Before running the project, ensure you have:

- Node.js (v18 or later)
- npm or yarn
- A Supabase project
- A Resend account

### Installation

Clone the repository:

```bash
git clone https://github.com/NatalieVinyu/Maneva-Hair.git
```

Navigate to the project directory:

```bash
cd client
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
VITE_RESEND_API_KEY=your_resend_api_key
```

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

## 📂 Project Structure

```text
src/
├── assets/          # Images and static assets
├── components/      # Reusable UI components
├── pages/           # Application pages
├── lib/             # API and Supabase integrations
├── App.jsx
└── main.jsx
```

## 🔧 Available Scripts

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Lint the project:

```bash
npm run lint
```

## 🌐 Deployment

The project can be deployed on:

- Vercel
- Netlify
- Render
- GitHub Pages
- Any platform that supports React and Vite applications

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

## 📧 Email Workflow

1. Customer submits a booking request.
2. Booking information is stored in Supabase.
3. Resend processes the email request.
4. Customer receives a booking confirmation email.
5. Business owner can manage bookings through the database.

## 🔒 Security

- Environment variables protect sensitive credentials.
- Supabase Row Level Security (RLS) can be configured to protect data access.
- API keys are stored securely using environment variables.

## 🎯 Future Improvements

- Enable email confirmations once Resend plan limitations are upgraded
- Online payment integration
- Customer accounts and profiles
- Wishlist functionality
- Product reviews and ratings
- Admin dashboard
- Order management system
- Inventory tracking
- Appointment scheduling calendar

## 👩‍💻 Author

**Natalie Vinyu**

GitHub: https://github.com/NatalieVinyu

## 📜 License

This project is licensed under the MIT License.

---

Built with ❤️ using React.
