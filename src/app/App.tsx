import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { OnboardingScreen } from './components/OnboardingScreen';
import { LoginScreen } from './components/LoginScreen';
import { HomeScreen } from './components/HomeScreen';
import { SpecialistScreen } from './components/SpecialistScreen';
import { BookingScreen } from './components/BookingScreen';
import { ConfirmationScreen } from './components/ConfirmationScreen';

export default function App() {
  return (
    <Router>
      <div className="size-full max-w-[390px] mx-auto bg-[var(--pearl-white)] relative overflow-hidden">
        {/* iOS Status Bar Simulation */}
        <div className="h-11 bg-transparent"></div>

        <Routes>
          <Route path="/" element={<Navigate to="/onboarding" replace />} />
          <Route path="/onboarding" element={<OnboardingScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/specialists" element={<SpecialistScreen />} />
          <Route path="/booking" element={<BookingScreen />} />
          <Route path="/confirmation" element={<ConfirmationScreen />} />
        </Routes>
      </div>
    </Router>
  );
}
